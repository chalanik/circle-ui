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
import CTACard from "../../Layout/CTACard/CTACard";
import { CircularProgress, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  getIconPath,
  sortByCreatedAt,
  sortByScore,
  validatePost,
} from "../../Utility/Utils";

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
  const [sort, setSort] = React.useState("latest");

  const handleSort = (event) => {
    // if value is latest sort posts by createdAt
    if (event.target.value === "latest") {
      setSort("latest");
      circle.posts.sort(sortByCreatedAt);
      updateCircle(circle);
    } else {
      // if value is popular sort posts by score
      setSort("popular");
      circle.posts.sort(sortByScore);
      updateCircle(circle);
    }
  };

  user.posts.forEach((post) => {
    totalMembers.add(post.user._id);
    post.comments.forEach((comment) => {
      totalMembers.add(comment._id);
      activeMemebers.add(comment._id);
    });
  });

  useEffect(() => {
    !circle &&
      fetch(`https://ms-circle.azurewebsites.net/api/v1/circle/${id}`)
        .then((res) => res.json())
        .then((data) => {
          data.posts.sort(sortByCreatedAt);
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

  const handlePost = async (post) => {
    setErrorMessageOnPost(false);
    const moderatorData = await validatePost(
      post.title + " " + post.description
    );
    let isInValidPost;
    if (moderatorData?.ok) {
      const moderatorRes = await moderatorData.json();
      isInValidPost = moderatorRes?.Terms && moderatorRes.Terms.length > 0;
    }
    if (isInValidPost) {
      setErrorMessageOnPost(true);
    } else {
      const res = await fetch(
        `https://ms-circle.azurewebsites.net/api/v1/circle/${circle._id}/post`,
        {
          method: "POST",
          body: JSON.stringify({ ...post, user: user._id }),
          headers: { "Content-Type": "application/json" },
        }
      );
      post = await res.json();
      post.user = { _id: user._id, name: user.name };
      post.circle = { _id: circle._id, name: circle.name };
      // TODO: are we mutating the state directly?
      circle.posts.unshift(post);
      updateCircle(circle);
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
      <Header dashboard={"true"} user={user} />
      <div className="your-circle-header-container">
        <div className="your-circle-name-container">
          <img
            src={getIconPath(circle.name)}
            alt="education icon"
            className="education-icon"
          />
          <div className="circle-name-title-container">
            <div className="circle-name-title-header type-h1">
              {circle.name}
            </div>
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
          <Link
            className="dashboard-back-button type-link-xl"
            to={`/dashboard-container`}
          >
            <ArrowBack className="arrow-back" /> Back to Dashboard
          </Link>
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
                value={sort}
                onChange={handleSort}
              >
                <MenuItem value={"popular"}>Popular</MenuItem>
                <MenuItem value={"latest"}>Latest</MenuItem>
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
                  <img src="education-icon.svg" alt={name} />
                  <div className="circle-name-title">{name}</div>
                </div>
              ))}
            </CardContent>
          </Card>
          <CTACard />
          <Card className="your-users">
            <CardContent>
              <div className="your-circles-heading">
                <div className="dashboard-heading">Members</div>
              </div>
              {circle.users.map((user) => (
                <div className="circle-name-container" key={user._id}>
                  <img
                    src={user.name + ".png"}
                    alt={user.name}
                    className="profile-pic"
                  />
                  <div className="user-name-title type-body-bold">
                    {user.name}
                  </div>
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
