import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({ title, dashboard, user }) {
  const navigate = useNavigate();
  const handleClick = () => {
    dashboard && navigate("/dashboard-container");
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-items">
          <div className="header-title-container" onClick={handleClick}>
            <img
              className="circle-logo"
              src="circle-logo.svg"
              alt="circle logo"
            />
            <div className="header-company-name-container">
              <span className="header-app-title">Circle</span>
              <span className="header-company-name">by Morgan Stanley</span>
            </div>
          </div>
        </div>
        <div className="header-container-items header-title">{title}</div>
        {/* <div className="header-container-items header-close"></div> */}

        <div className="user-header-container header-container-items">
          {dashboard && (
            <>
              <img
                src="bell-icon.svg"
                className="user-header-container-items"
                alt="notifications icon"
              />
              <img
                src="mail-icon.svg"
                className="user-header-container-items"
                alt="mail icon"
              />
              <img
                className="profile-pic user-header-container-items"
                src={user?.name ? user?.name + ".png" : "profile.jpg"}
                alt="profile pic"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
