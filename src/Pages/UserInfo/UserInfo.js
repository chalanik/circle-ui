import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import CircleButton from "../../Layout/Button/CircleButton";
import TextField from "@mui/material/TextField";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import "./UserInfo.css";
import "../../styles.css";
import Post from "../../Layout/Post/Post";

function UserInfo() {
  const [zip, setZip] = useState("");

  let userData = localStorage.getItem("userFormData");
  if (userData) {
    userData = JSON.parse(userData);
  }
  if (!userData.name) {
    userData.name = "Katie B.";
  }
  const [userName] = useState(userData.name);

  let user = {};

  function continueClickHandler() {
    user = JSON.parse(localStorage.getItem("userFormData"));
    user = { ...user, zip: zip };
    localStorage.setItem("userFormData", JSON.stringify(user));
  }

  const samplePost = {
    title: "I'm so excited to have joined Circle!",
    createdAt: Date.now(),
    user: userData,
  };

  return (
    <>
      <Header title="Join Circle" user={userData} />
      <div className="user-info-container">
        <img
          src="basic-info.svg"
          alt="edit profile"
          className="edit-profile-pic"
        />
        <h2 className="user-info-title type-h1">
          Let's get some of your basic info
        </h2>
        <div className="user-info-form">
          <div className="user-info-form-items">
            <div className="text-box-container">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={userName}
                disabled
              />
              <div className="tooltip">
                <InfoOutlined className="info-icon"></InfoOutlined>
                <span className="tooltiptext">
                  This is the name we'll use when you post. You'll also have the
                  option to post anonymously if you choose to!
                </span>
              </div>
            </div>
          </div>
          <div className="user-info-form-items">
            <div className="text-box-container">
              <TextField
                id="outlined-basic"
                label="Zip code"
                variant="outlined"
                onChange={(e) => setZip(e.target.value)}
              />
              <div className="tooltip">
                <InfoOutlined className="info-icon"></InfoOutlined>
                <span className="tooltiptext">
                  Your location will help us suggest Circles with members near
                  you.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="posts-container">
          Here is how your posts will appear
        </div>
        
        <div className="sample-post">
          
        <Post post={samplePost} isPost={true} />
        </div>
        <div
          className="continue-button-container"
          onClick={continueClickHandler}
        >
          <Link className="get-started-link" to="/dependents">
            <CircleButton buttontext="Continue"></CircleButton>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
