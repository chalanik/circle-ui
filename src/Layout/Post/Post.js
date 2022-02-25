import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../../styles.css";
import CommentIcon from "@mui/icons-material/Comment";
import "./Post.css";
import { useNavigate } from "react-router-dom";

//given Date timestamp, return the date in the form "Year-Month-Day, 12:00 PM"
function getTimeString(timestamp) {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  if (date.getDate() === today.getDate()) {
    return `Today, ${date.toLocaleTimeString(undefined, timeOptions)}`;
  } else if (date.getDate() === yesterday.getDate()) {
    return `Yesterday, ${date.toLocaleTimeString(undefined, timeOptions)}`;
  } else {
    return `${date.toLocaleDateString(
      undefined,
      dateOptions
    )}, ${date.toLocaleTimeString(undefined, timeOptions)}`;
  }
}

function Post(props) {
  const { post, isComment, isPost, isPostWithCircle } = props;
  const navigate = new useNavigate();
  const handleClick = () => {
    navigate(`/post/${post._id}`);
  };

  const author = (
    <div className="author-card">
      <img
        className="author-img"
        src={
          !post.anonymous && post.user?.image ? post.user.image : "profile.jpg"
        }
        alt=""
      />
      <div className="author-details ">
        <p className="author-name type-body-xs">
          {post.anonymous ? "Anonymous" : post?.user.name}
        </p>
        <p className="author-time type-body-xs color-secondary-grey">
          {getTimeString(post?.createdAt)}
        </p>
        <div />
      </div>
    </div>
  );

  const responses = (
    <div className="responses-container" onClick={handleClick}>
      <CommentIcon fontSize="small" className="responses-icon" />
      <p className="type-body color-secondary-grey">
        <span className="type-body-bold color-secondary-grey">
          {post?.comments?.length}
        </span>{" "}
        responses
      </p>
    </div>
  );

  const circle = (
    <div className="circle-container">
      <img
        className="circle-img"
        src={post?.circle?.image ? post.circle.image : "nutrition-icon.svg"}
        alt=""
      />
      <p className="circle-name type-body-bold-xl">{post?.circle?.name}</p>
    </div>
  );

  const postCard = (
    <div className="post">
      {author}
      <h2 className="post-title type-h2">{post?.title}</h2>
      <p className="post-description type-body">{post?.description}</p>
      {responses}
    </div>
  );

  const comment = (
    <div className="post">
      {author}
      <p className="post-description type-body">{post?.content}</p>
    </div>
  );

  const postWithCircle = (
    <div>
      {circle}
      {postCard}
    </div>
  );

  return (
    <Card>
        <CardContent>
          {isPostWithCircle && postWithCircle}
          {isPost && postCard}
          {isComment && comment}
        </CardContent>{" "}
    </Card>
  );
}

export default Post;
