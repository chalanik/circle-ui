import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import './UserInfo.css';

function UserInfo() {
    return (
        <>
            <Header title="Join Circle"/>
            <div className="user-info-container">
                <h2 className="user-info-title">Let's get some of your basic info</h2>
                <div className="user-info-form">
                    <div className="user-info-form-items">
                        <div><label className="user-info-form-label">Your name</label></div>
                        <input type="text" className="user-info-form-text" />
                    </div>
                    <div className="user-info-form-items">
                        <div><label className="user-info-form-label">Your zip code</label></div>
                        <input type="text" className="user-info-form-text" />
                    </div>
                </div>
                <div className="posts-container">
                    Here is how your posts will appear
                </div>
                <div className="sample-post">
                    <div className="post-user-info">
                        <div className="post-username">Name</div>
                        <div className="post-time">Today 7 pm</div>
                    </div>
                    <div className="post-content">
                        I'm so excited to join circle
                    </div>
                </div>
                <div className="continue-button-container">
                    <Link className="get-started-link" to="/">
                        <Button color="primary" variant="contained">continue</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default UserInfo;