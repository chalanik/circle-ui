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
    
  props = {
    _id: "620e7d3366d8d74efc3b2305",
    description:
      "What worked for me was to remove an item until I didn't crave it anymore instead of going completely cold turkey.",
    title: "Best strategies for kicking a sugar addiction?",
    user: { _id: "620e4979dc557df876cc5842", name: "Nikhil Chalamalla" },
    comments: [
      {
        _id: "620f3f0744d4409b30a648f7",
        content:
          "I know a lot of people on team \"no artificial sweeteners\", but I have no issue with them at all and don't really miss the real stuff anymore. I use monkfruit drops in my tea, Mio in my water, and erythritol for a lot of my baking. Erythritol is a great one because it's mostly just excreted through urine unlike other artificial sweeteners that are fermented in the gut.",
        user: { _id: "620e49e5dc557df876cc5844", name: "Karthikeyan K" },
        createdAt: "2022-02-18T06:39:03.380Z",
        __v: 0,
      },
    ],
    createdAt: "2022-02-17T16:52:03.601Z",
    circle: { _id: "620e4ae4dc557df876cc584c", name: "Nutrition" },
    __v: 0,
  };
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
