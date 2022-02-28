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
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import { useEffect } from "react";
import userMock from "../../Mocks/user-mock";
import {
  sortByCreatedAt,
  sortByScore,
  validatePost,
} from "../../Utility/Utils";
import CTACard from "../../Layout/CTACard/CTACard";

function Discussion(props) {
  let user = localStorage.getItem("userInfo");
  if (user == null) {
    user = userMock;
  } else {
    user = JSON.parse(localStorage.getItem("userInfo"));
  }
  // const user = JSON.parse(localStorage.getItem("userInfo"));
  let { id } = useParams();
  const [post, setPost] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [showErrorMessage, setErrMessageOpen] = React.useState(false);
  const [sort, setSort] = React.useState("latest");

  const handleSort = (event) => {
    // if value is latest sort posts by createdAt
    if (event.target.value === "latest") {
      setSort("latest");
      post.comments.sort(sortByCreatedAt);
      setPost(post);
    } else {
      // if value is popular sort posts by score
      setSort("popular");
      post.comments.sort(sortByScore);
      setPost(post);
    }
  };

  const handleClickOpen = (value) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setErrorMessageOnPost = (value) => {
    setErrMessageOpen(value);
  };

  useEffect(() => {
    !post &&
      fetch(`https://circle-server.azurewebsites.net/api/v1/post/${id}`)
        .then((res) => res.json())
        .then((data) => {
          data.comments.sort(sortByCreatedAt);
          setPost(data);
        })
        .catch(() => {
          setPost(user.posts[0]);
        });
  });

  const handleComment = async (comment) => {
    setErrorMessageOnPost(false);
    console.log(comment);
    const moderatorData = await validatePost(comment.content);
    let isInValidPost;
    if (moderatorData?.ok) {
      const moderatorRes = await moderatorData.json();
      isInValidPost = moderatorRes?.Terms && moderatorRes.Terms.length > 0;
    }

    if (isInValidPost) {
      setErrorMessageOnPost(true);
    } else {
      const res = await fetch(
        `https://circle-server.azurewebsites.net/api/v1/post/${id}/comment`,
        {
          method: "POST",
          body: JSON.stringify({ ...comment, user: user._id, post: post._id }),
          headers: { "Content-Type": "application/json" },
        }
      );
      comment = await res.json();
      comment.user = { _id: user._id, name: user.name };
      post.comments.unshift(comment);
      setPost(post);
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
  if (!post)
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
            <div className="circle-name-title-header type-h1">Education</div>
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
          <Link
            className="post-back-button type-link-xl"
            to={`/circle/${post.circle._id}`}
          >
            <ArrowBack className="arrow-back" /> Back to main {post.circle.name}
          </Link>
          <div className="circle-topic-container">
            <Post post={post} key={post._id} isPost={true} />
          </div>
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
                value={sort}
                onChange={handleSort}
              >
                <MenuItem value={"popular"}>Popular</MenuItem>
                <MenuItem value={"latest"}>Latest</MenuItem>
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
                <div className="circle-name-container" key={name}>
                  <img src="not-joined-circle.svg" alt={name} />
                  <div className="circle-name-title">{name}</div>
                </div>
              ))}
            </CardContent>
          </Card>
          <CTACard />
        </div>
        <div className="dasboard-space-container"></div>
      </div>
      <ReplyDialog
        showErrorMessage={showErrorMessage}
        open={open}
        onClose={handleClose}
        onComment={handleComment}
      ></ReplyDialog>
    </>
  );
}

export default Discussion;
