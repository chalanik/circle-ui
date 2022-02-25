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
import { useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";

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
  const [showErrorMessage, setErrMessageOpen] = React.useState(false);
  const [circle, updateCircle] = React.useState();

  let [totalMembers, activeMemebers] = [new Set(), new Set()];

  user.posts.forEach((post) => {
    totalMembers.add(post.user._id);
    post.comments.forEach((comment) => {
      totalMembers.add(comment._id);
      activeMemebers.add(comment._id);
    });
  });

  useEffect(() => {
    !circle &&
      fetch(`https://circle-server.azurewebsites.net/api/v1/circle/${id}`)
        .then((res) => res.json())
        .then((data) => {
          updateCircle(data);
        })
        .catch(() => {
          updateCircle({ ...cirlceData, posts: posts });
        });
  });

  const setErrorMessageOnPost = (value) => {
    setErrMessageOpen(value);
  };

  const handleClickOpen = (value) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validatePost = async (post) => {
    return fetch(
      `https://eastus.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?classify=True`,
      {
        method: "POST",
        body: post.description,
        headers: {
          "Content-Type": "text/plain",
          "Ocp-Apim-Subscription-Key": "570a1bee96c64016bb3bc0fe4ebc3630",
        },
      }
    );
  };

  const handlePost = async (post) => {
    setErrorMessageOnPost(false);
    const moderatorData = await validatePost(post);
    const moderatorRes = await moderatorData.json();
    const isInValidPost = moderatorRes.Terms && moderatorRes.Terms.length > 0;
    if (isInValidPost) {
      setErrorMessageOnPost(true);
    } else {
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
      updateCircle({ ...circle, posts: [...circle.posts, post] });
      localStorage.setItem("update", true);
      handleClose();
    }
  };

  const similarCirclesArray = [
    "College admissions",
    "Universal Pre-K",
    "Tutors",
    "SAT/ACT Prep",
  ];

  if (!circle)
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
                <span className="circle-member-info-text">
                  {totalMembers.size} members{" "}
                </span>
              </div>
              <div className="circle-member-info">
                <RecordVoiceOverIcon />
                <span className="circle-member-info-text">
                  {activeMemebers.size} active now{" "}
                </span>
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
      <PostDialog
        showErrorMessage={showErrorMessage}
        open={open}
        onPost={handlePost}
        onClose={handleClose}
      />
    </>
  );
}

export default Circle;
