import React from "react";
import "./Dashboard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Post from "../../Layout/Post/Post";
import YourCircles from "../../Layout/YourCircles/YourCircles";
import { useNavigate } from "react-router-dom";
import userMock from "../../Mocks/user-mock";
import { CircularProgress, Box } from "@mui/material";
import { useEffect } from "react";
import { sortByCreatedAt, sortByScore } from "../../Utility/Utils";

function Dashboard() {
  let userInfo = localStorage.getItem("userInfo");
  if (userInfo == null) {
    userInfo = userMock;
  } else {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }
  const [posts, setPost] = React.useState(userInfo.posts.sort(sortByScore));

  // set sort state
  const [sort, setSort] = React.useState("popular");

  const navigate = useNavigate();

  const handlePostClick = (post) => {
    console.log(post);
    navigate(`/post/`, { state: post });
  };

  const handleSort = (event) => {
    // if value is latest sort posts by createdAt
    if (event.target.value === "latest") {
      setSort("latest");
      setPost(posts.sort(sortByCreatedAt));
    } else {
      // if value is popular sort posts by score
      setSort("popular");
      setPost(posts.sort(sortByScore));
    }
  };

  useEffect(() => {
    const update = localStorage.getItem("update");
    (!posts.length || update === "true") &&
      fetch(
        `https://circle-server.azurewebsites.net/api/v1/user/${userInfo._id}/`
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("userInfo", JSON.stringify(data));
          sort === "latest"
            ? data.posts.sort(sortByCreatedAt)
            : data.posts.sort(sortByScore);
          setPost(data.posts);
          localStorage.setItem("update", "false");
        });
  });

  if (!posts)
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <div className="dashboard-container">
        <div className="dasboard-space-container"></div>
        <div className="dashboard-left-section">
          <YourCircles
            circles={userInfo.circles.sort(
              (a, b) => b.posts.length - a.posts.length
            )}
          />

          <Card className="trending-topics">
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
              <div className="circle-name-title circle-topics">
                College admissions 2022
              </div>
              <div className="circle-name-title circle-topics">
                Teaching child about masking
              </div>
              <div className="circle-name-title circle-topics">
                Covid protocols in NYC public schools
              </div>
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
                value={sort}
                onChange={handleSort}
              >
                <MenuItem value={"popular"}>Popular</MenuItem>
                <MenuItem value={"latest"}>Latest</MenuItem>
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
                  key={res._id}
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
