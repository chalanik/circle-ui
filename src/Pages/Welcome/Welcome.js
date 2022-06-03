import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import Header from "../../Layout/Header/Header";
import CircleButton from "../../Layout/Button/CircleButton";
import { CircularProgress, Box } from "@mui/material";
import userMock from "../../Mocks/user-mock";

function Welcome() {
  // set loaded state
  const [loaded, setLoaded] = React.useState(false);
  const navigate = useNavigate();

  let isUserRegistered = false;

  const fetchUsers = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let userId = urlParams.get("id");
    userId = [
      "nikhil",
      "neha",
      "rupinder",
      "mona",
      "deniz",
      "lori",
      "katie",
      "karthik",
      "dhinesh",
      "harry",
      "uwe",
    ].includes(userId)
      ? userId
      : "katie";
    let user = {};

    const response = await fetch(
      `https://ms-circle.azurewebsites.net/api/v1/user/${userId}`
    );
    if (response.ok) {
      const data = await response.json();
      if (data && data?.zip && data?.circles?.length) {
        isUserRegistered = true;
        // navigate("/dashboard-container");
      } else {
        user = { ...user, _id: data?._id, name: data?.name };
        localStorage.setItem("userFormData", JSON.stringify(user));
      }
      localStorage.setItem("userInfo", JSON.stringify(data));
    } else {
      localStorage.setItem("userInfo", JSON.stringify(userMock));
    }
  };

  const fetchCircles = async () => {
    const response = await fetch(
      `https://ms-circle.azurewebsites.net/api/v1/circles`
    );
    const data = await response.json();
    localStorage.setItem("circles", JSON.stringify(data));
  };

  useEffect(() => {
    Promise.all([fetchUsers(), fetchCircles()])
      .then(() => {
        setLoaded(true);
      })
      .catch(() => {
        setLoaded(true);
      });
  });

  const handleClick = () => {
    // if (isUserRegistered) {
    //   navigate("/dashboard-container");
    // } else {
    //   navigate("/user-info");
    // }
    navigate("/user-info");
  };
  if (!loaded)
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
      <Header />
      <div className="welcome-container-wrapper">
        <div className="welcome-container">
          <div className="welcome-image-container">
            <img
              src="welcome.png"
              alt="Welcome to Circle"
              className="welcome-image"
            />
            <div className="welcome-image-div">
              <h1 className="welcome-text">Welcome to Circle</h1>
              <p className="welcome-text-content">
                Circle is an exclusive employee only social networking platform
                where users can seek advice and develop deeper social
                connections with their colleagues by sharing tips and
                experiences on life such as parenting, care giving and so much
                more.
              </p>
              <div>
                <CircleButton
                  buttontext="Get started"
                  onClick={handleClick}
                ></CircleButton>
              </div>
            </div>
          </div>
          <div className="about-container">
            <div className="about-container-items">
              <img
                src="basic-info.svg"
                alt="personal details"
                className="personal-details-image"
              />
              <div className="about-items about-text-content">
                Tell us about you
              </div>
              <p className="about-text-content about-items-desc">
                Confirm a couple details about yourself
              </p>
            </div>
            <div className="about-container-items">
              <img
                src="interested-topics-icon.svg"
                alt="hobbies"
                className="personal-details-image"
              />
              <div className="about-items about-text-content">
                {" "}
                Tell us about your interests{" "}
              </div>
              <p className="about-text-content about-items-desc">
                Based on your interests, we will add you to Circles that align
                with them. You can add and remove Circles at anytime.
              </p>
            </div>
            <div className="about-container-items">
              <img
                src="dependent-icon.svg"
                alt="colleagues"
                className="personal-details-image"
              />
              <div className="about-items about-text-content">
                {" "}
                Connect with colleagues{" "}
              </div>
              <p className="about-text-content about-items-desc">
                Connect with colleagues
              </p>
            </div>
          </div>

          <div className="welcome-button-container">
            <CircleButton
              buttontext="Get started"
              onClick={handleClick}
            ></CircleButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
