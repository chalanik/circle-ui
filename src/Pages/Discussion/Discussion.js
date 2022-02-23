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

function Discussion(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (value) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const post = {
    _id: "620e7d3366d8d74efc3b2305",
    description:
      "What worked for me was to remove an item until I didn't crave it anymore instead of going completely cold turkey.",
    title: "Best strategies for kicking a sugar addiction?",
    user: { _id: "620e4979dc557df876cc5842", name: "Nikhil Chalamalla" },
    comments: [
      {
        _id: "620f3f0744d4409b30a648f7",
        content:
          "I know a lot of people on team \"no artificial sweeteners\", but I have no issue with them at all and don't really miss the real stuff anymore. I use monkfruit drops in my tea, Mio in my water, and erythritol for a lot of my baking. Erythritol is a great one because it's mostly just excreted through urine unlike other artificial sweeteners that are fermented in the gut.",
        user: { _id: "620e49e5dc557df876cc5844", name: "Karthikeyan K" },
        createdAt: "2022-02-18T06:39:03.380Z",
        __v: 0,
      },
    ],
    createdAt: "2022-02-17T16:52:03.601Z",
    circle: { _id: "620e4ae4dc557df876cc584c", name: "Nutrition" },
    __v: 0,
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
          <CircleButton buttonText="Leave circle"></CircleButton>
        </div>
      </div>
      <div className="dashboard-container">
        <div className="dasboard-space-container"></div>
        <div className="circle-left-section">
          <a className="post-back-button type-link-xl" href="/circle">
            <ArrowBack className="arrow-back" /> Back to main {post.circle.name}
          </a>
          <Post {...post} key={post._id} isPost={true} />
          <div className="dashboard-heading-container">
            <div className="dashboard-heading circles-conversation-heading">
              <div>
                <CircleButton
                  buttonText="Post a reply"
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
              return <Post {...res} key={res._id} isComment={true} />;
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
