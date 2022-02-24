import React from "react";
import Header from "../../Layout/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircleButton from "../../Layout/Button/CircleButton";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import Post from "../../Layout/Post/Post";
import "./Discussion.css";
import "../../styles.css";
import { ArrowBack } from "@mui/icons-material";
import ReplyDialog from "../../Layout/ReplyDialog/ReplyDialog";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

function Discussion(props) {
  const { state } = useLocation();
  let post = state;
  console.log(post);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (value) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const similarCirclesArray = [
    "College admissions",
    "Universal Pre-K",
    "Tutors",
    "SAT/ACT Prep",
  ];
  return (
    <>
      <Header dashboard={"true"} />
      <div className="your-circle-header-container">
        <div className="your-circle-name-container">
          <img
            src="education-icon.svg"
            alt="education icon"
            className="education-icon"
          />
          <div className="circle-name-title-container">
            <div className="circle-name-title-header">Education</div>
            <div className="circle-member-info-container">
              <div className="circle-member-info">
                <PeopleOutlineIcon />
                <span className="circle-member-info-text">135 members </span>
              </div>
              <div className="circle-member-info">
                <RecordVoiceOverIcon />
                <span className="circle-member-info-text">20 active now </span>
              </div>
            </div>
          </div>
        </div>
        <div className="leave-circle-button">
          <CircleButton buttontext="Leave circle"></CircleButton>
        </div>
      </div>
      <div className="dashboard-container">
        <div className="dasboard-space-container"></div>
        <div className="circle-left-section">
          <Link className="post-back-button type-link-xl" to={`/circle/${post.circle._id}`}>
            <ArrowBack className="arrow-back" /> Back to main {post.circle.name}
          </Link>
          <Post post={post} key={post._id} isPost={true} />
          <div className="dashboard-heading-container">
            <div className="dashboard-heading circles-conversation-heading">
              <div>
                <CircleButton
                  buttontext="Post a reply"
                  onClick={handleClickOpen}
                ></CircleButton>
              </div>
            </div>
            <div className="circle-sort-container">
              <span className="sort-by-text">Sort by</span>
              <Select
                className="circle-sort-select"
                value="Popular"
                // onChange={handleChange}
              >
                <MenuItem value={"Popular"}>Popular</MenuItem>
                <MenuItem value={"Latest"}>Latest</MenuItem>
              </Select>
            </div>
          </div>
          <div className="post-container">
            {post.comments.map((res) => {
              return <Post post={res} key={res._id} isComment={true} />;
            })}
          </div>
        </div>
        <div className="circle-right-section">
          <Card className="your-circles">
            <CardContent>
              <div className="your-circles-heading">
                <div className="dashboard-heading">Similar Circles</div>
              </div>
              {similarCirclesArray.map((name) => (
                <div className="circle-name-container">
                  <img src="not-joined-circle.svg" alt={name} />
                  <div className="circle-name-title">{name}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="dasboard-space-container"></div>
      </div>
      <ReplyDialog open={open} onClose={handleClose}></ReplyDialog>
    </>
  );
}

export default Discussion;
