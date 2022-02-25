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
import PostDialog from "../../Layout/PostDialog/PostDialog";
import "../../styles.css";
import { useParams } from "react-router-dom";
import userMock from "../../Mocks/user-mock";

function Circle(props) {
  let user = localStorage.getItem("userInfo");
  if (user == null) {
    user = userMock;
  } else {
    user = JSON.parse(localStorage.getItem("userInfo"));
  }

  let { id } = useParams();
  let cirlceData = user.circles.find((circle) => circle._id === id);
  let posts = user.posts.filter((post) => cirlceData.posts.includes(post._id));
  const [open, setOpen] = React.useState(false);
  const [circle, addPost] = React.useState({ ...cirlceData, posts: posts });

  let [totalMembers,activeMemebers] = [new Set(),new Set()];

  user.posts.map(post => {
      totalMembers.add(post.user._id);
      post.comments.map(comment => { 
        totalMembers.add(comment._id);
        activeMemebers.add(comment._id)
      });
  });

  const handleClickOpen = (value) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validatePost = async (post) => {
    const res = await await fetch(
      `https://eastus.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?classify=True`,
      {
        method: "POST",
        body: post,
        headers: { 
          "Content-Type": "text/plain",
          "Ocp-Apim-Subscription-Key": "570a1bee96c64016bb3bc0fe4ebc3630"
        },
      }
    );
  }

  const handlePost = async (post) => {
    const moderatorData = await validatePost(post);
    const moderatorRes = await moderatorData.json();
    const isValidPost = moderatorRes.Terms.length === 0;
    if(isValidPost) {
      const res = await fetch(
        `https://circle-server.azurewebsites.net/api/v1/circle/${circle._id}/post`,
        {
          method: "POST",
          body: JSON.stringify({ ...post, user: user._id }),
          headers: { "Content-Type": "application/json" },
        }
      );
      post = await res.json();
      post.user = { _id: user._id, name: user.name };
      post.circle = { _id: circle._id, name: circle.name };
      addPost({ ...circle, posts: [...circle.posts, post] });
    }
    else  {
      console.log('Data is not good !!')
    }
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
            <div className="circle-name-title-header">{circle.name}</div>
            <div className="circle-member-info-container">
              <div className="circle-member-info">
                <PeopleOutlineIcon />
                <span className="circle-member-info-text">{totalMembers.size} members </span>
              </div>
              <div className="circle-member-info">
                <RecordVoiceOverIcon />
                <span className="circle-member-info-text">{activeMemebers.size} active now </span>
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
          <div className="dashboard-heading-container">
            <div className="dashboard-heading circles-conversation-heading">
              <div>
                <CircleButton
                  buttontext="Start a new topic"
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
            {circle.posts.map((res) => {
              return <Post post={res} key={res._id} isPost={true} />;
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
                <div className="circle-name-container" key={name}>
                  <img src="not-joined-circle.svg" alt={name} />
                  <div className="circle-name-title">{name}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="dasboard-space-container"></div>
      </div>
      <PostDialog open={open} onClose={handleClose} onPost={handlePost} />
    </>
  );
}

export default Circle;
