import * as React from "react";
import CircleButton from "../Button/CircleButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import "./PostDialog.css";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";

import "../../styles.css";

export default function PostDialog(props) {
  const { onClose, open, showErrorMessage, onPost } = props;

  console.log("Data : ", onClose, open, showErrorMessage, onPost);

  let post = { title: "", description: "" };

  const titleRef = React.useRef("");
  const descriptionRef = React.useRef("");
  const switchRef = React.useRef("");

  const handleClose = () => {
    onClose();
  };

  const handlePost = () => {
    post.title = titleRef.current.value;
    post.description = descriptionRef.current.value;
    post.anonymous = switchRef.current.checked;

    onPost(post);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle className="type-body-bold-xl">
          Your topic
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
            id="outlined-multiline-static-title"
            className="type-body"
            label=""
            multiline
            fullWidth
            rows={1}
            placeholder="Your topic’s title. This is the preview people will see "
            sx={{ paddingBottom: "16px" }}
            inputRef={titleRef}
          />
          <TextField
            id="outlined-multiline-static-desc"
            label=""
            multiline
            fullWidth
            rows={6}
            inputRef={descriptionRef}
            placeholder="(Optional) This is where you can give any additional details about your topic or elaborate on any question you have"
          />
        </DialogContent>
        <div className="reply-dialog-actions">
          <span>
            <Switch inputRef={switchRef} /> <span>Post anonymously</span>
          </span>
          <CircleButton
            onClick={handlePost}
            buttontext="Post topic"
          ></CircleButton>
        </div>
        {showErrorMessage ? (
          <div class="error-msg-container">
            <Alert severity="error">
              This post might contain strong language
            </Alert>
          </div>
        ) : null}
      </Dialog>
    </div>
  );
}
