import React from "react";
import "./Dashboard.css";
import Header from "../../Layout/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Post from "../../Layout/Post/Post";
import YourCircles from "../../Layout/YourCircles/YourCircles";

const posts = [
  {
    _id: "620e7d3366d8d74efc3b2305",
    description:
      "What worked for me was to remove an item until I didn't crave it anymore instead of going completely cold turkey.",
    title: "Best strategies for kicking a sugar addiction?",
    user: { _id: "620e4979dc557df876cc5842", name: "Nikhil Chalamalla" },
    comments: ["620f3f0744d4409b30a648f7"],
    createdAt: "2022-02-17T16:52:03.601Z",
    circle: { _id: "620e4ae4dc557df876cc584c", name: "Nutrition" },
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
    createdAt: "2022-02-23T05:24:52.716Z",
    circle: { _id: "620e4ae4dc557df876cc584c", name: "Education" },
    __v: 0,
  },
];

function Dashboard() {
  return (
    <>
      <Header dashboard={"true"} />
      <div className="dashboard-container">
        <div className="dasboard-space-container"></div>
        <div className="dashboard-left-section">
          <YourCircles
            circlesArray={[
              "Education",
              "Financial planning / budgeting",
              "Nutrition",
              "Childcare",
              "Elderly Care",
              "Activities",
            ]}
          />

          <Card className="your-circles">
            <CardContent>
              <div className="dashboard-heading circle-trending-topic-header">
                Trending Topics
              </div>
              <div className="dashboard-trending-topics-subheading">
                Discover what's trending with your colleagues
              </div>
              <div className="circle-name-title circle-topics">
                Work life balance
              </div>
              <div className="circle-name-title circle-topics">Topic</div>
              <div className="circle-name-title circle-topics">Topic</div>
              <div className="circle-name-title circle-topics">Topic</div>
              <div className="circle-name-title circle-topics">Topic</div>
            </CardContent>
          </Card>
        </div>
        <div className="dashboard-right-section">
          <div className="dashboard-heading-container">
            <div className="dashboard-heading circles-conversation-heading">
              Conversations in your Circle
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
          <div className="dashboard-post-container">
            {posts.map((res) => {
              return <Post {...res} showCircle={true} />;
            })}
          </div>
        </div>
        <div className="dasboard-space-container"></div>
      </div>
    </>
  );
}

export default Dashboard;
