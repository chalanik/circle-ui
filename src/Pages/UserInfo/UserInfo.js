import React from 'react';
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
                        <div className="user-info-form-label"><label>Your name</label></div>
                        <input type="text" className="user-info-form-text" />
                    </div>
                    <div className="user-info-form-items">
                        <div className="user-info-form-label"><label>Your zip code</label></div>
                        <input type="text" className="user-info-form-text" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserInfo;