import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../../styles.css";
import CommentIcon from "@mui/icons-material/Comment";
import "./Discussion.css";

//given Date timestamp, return the date in the form "Year-Month-Day, 12:00 PM"
function getTimeString(timestamp) {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
  };

  if (date.getDate() === today.getDate()) {
    return `Today, ${date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else if (date.getDate() === yesterday.getDate()) {
    return `Yesterday, ${date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  } else {
    return `${date.toLocaleDateString(
      undefined,
      options
    )}, ${date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }
}

function Post(props, type) {
  const author = (
    <div className="author-card">
      <img
        className="author-img"
        src={props.user?.image ? props.user.image : "profile.jpg"}
      />
      <div className="author-details ">
        <p className="author-name type-body-xs">{props.user.name}</p>
        <p className="author-time type-body-xs color-secondary-grey">
          {getTimeString(props.createdAt)}
        </p>
        <div />
      </div>
    </div>
  );

  const responses = (
    <div className="responses-container">
      <CommentIcon fontSize="small" className="responses-icon" />
      <p className="type-body color-secondary-grey">
        <span className="type-body-bold color-secondary-grey">
          {props.comments.length}
        </span>{" "}
        responses
      </p>
    </div>
  );

  const circle = (
    <div className="circle-container">
      <img
        className="circle-img"
        src={props.circle?.image ? props.circle.image : "nutrition-icon.svg"}
      />
      <p className="circle-name type-body-bold-xl">{props.circle.name}</p>
    </div>
  );

  const post = (
    <div className="post">
      {author}
      <h2 className="post-title type-h2">{props.title}</h2>
      <p className="post-description type-body">{props?.description}</p>
      {responses}
    </div>
  );

  return (
    <Card>
      <CardContent>
        {type == "circle" && circle}
        {post}
      </CardContent>
    </Card>
  );
}

export default Post;
