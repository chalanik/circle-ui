import React from "react";
import "./Dashboard.css";
import Header from "../../Layout/Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Post from "../../Layout/Post/Post";
import YourCircles from "../../Layout/YourCircles/YourCircles";
import { useNavigate } from "react-router-dom";
import userMock from "../../Mocks/user-mock";

function Dashboard() {
  let userInfo = localStorage.getItem("userInfo");
  if(userInfo == null) {
    userInfo = userMock;
  } else {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }

  const posts = userInfo.posts;
  const navigate = useNavigate();

  const handlePostClick = (post) => {
    console.log(post);
    navigate(`/post/`, { state: post });
  };

  return (
    <>
      <Header dashboard={"true"} />
      <div className="dashboard-container">
        <div className="dasboard-space-container"></div>
        <div className="dashboard-left-section">
          <YourCircles circles={userInfo.circles} />

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
              return (
                <Post
                  post={res}
                  isPostWithCircle={true}
                  onPostClick={handlePostClick}
                />
              );
            })}
          </div>
        </div>
        <div className="dasboard-space-container"></div>
      </div>
    </>
  );
}

export default Dashboard;
