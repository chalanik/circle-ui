import * as React from "react";
import CircleButton from "../Button/CircleButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import "./ReplyDialog.css";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";
import "../../styles.css";

export default function ReplyDialog(props) {
  const { onClose, open, showErrorMessage, onComment } = props;

  const textRef = React.useRef("");
  const switchRef = React.useRef("");

  let comment = { content: "", anonymous: false };

  const handleClose = () => {
    onClose();
  };

  const handleComment = () => {
    comment.content = textRef.current.value;
    comment.anonymous = switchRef.current.checked;
    comment.content && onComment(comment);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle className="type-body-bold-xl">
          Your reply
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            fullWidth
            rows={6}
            placeholder="This is where you can reply to the main topic"
            inputRef={textRef}
          />
        </DialogContent>
        <div className="reply-dialog-actions">
          <span>
            <Switch inputRef={switchRef} /> <span>Post anonymously</span>
          </span>
          <CircleButton
            onClick={handleComment}
            buttontext="Post reply"
          ></CircleButton>
        </div>
        {showErrorMessage ? (
          <div className="error-msg-container">
            <Alert severity="error">
              This post might contain strong language
            </Alert>
          </div>
        ) : null}
      </Dialog>
    </div>
  );
}
