import React from "react";
import "./Circle.css";
import Header from "../../Layout/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircleButton from "../../Layout/Button/CircleButton";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import Post from "../../Layout/Post/Post";

function Circle() {
  const circle = {
    _id: "620e4ae4dc557df876cc584c",
    name: "Nutrition",
    users: [
      { _id: "620e4979dc557df876cc5842", name: "Nikhil Chalamalla" },
      { _id: "620e49e5dc557df876cc5844", name: "Karthikeyan K" },
      { _id: "620e4a21dc557df876cc5848", name: "Neha Sinha" },
    ],
    posts: [
      {
        _id: "620e7d3366d8d74efc3b2305",
        description:
          "What worked for me was to remove an item until I didn't crave it anymore instead of going completely cold turkey.",
        title: "Best strategies for kicking a sugar addiction?",
        user: { _id: "620e4979dc557df876cc5842", name: "Nikhil Chalamalla" },
        comments: ["620f3f0744d4409b30a648f7"],
        createdAt: "2022-02-17T16:52:03.601Z",
        circle: "620e4ae4dc557df876cc584c",
        __v: 0,
      },
      {
        _id: "620e866eb4f4e0d8878d3e35",
        description:
          "All else being equal, if I hypothetically just added a couple of tablespoons of olive oil to my day, is that actually healthier?",
        title:
          '"Olive Oil is healthy," alright, but clarification needed: is it intrinsically healthy or only when it replaces unhealthy fats?',
        user: { _id: "620e49e5dc557df876cc5844", name: "Karthikeyan K" },
        comments: [],
        createdAt: "2022-02-17T17:31:26.175Z",
        circle: "620e4ae4dc557df876cc584c",
        __v: 0,
      },
    ],
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
          <div className="dashboard-heading-container">
            <div className="dashboard-heading circles-conversation-heading">
              <div>
                <CircleButton buttonText="Start a new topic"></CircleButton>
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
            {circle.posts.map((res) => {
              return <Post {...res} key={res._id} />;
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
    </>
  );
}

export default Circle;
