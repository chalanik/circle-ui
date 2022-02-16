import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Welcome.css';
import Header from './Header';

function Welcome() {
    return (
        <>
        <Header />
        <div className="welcome-container">
            <h1 className="welcome-title">How Circle works</h1>
            <div className="about-container">
                <div className="about-container-items">
                    <div className="about-items">Tell us about you</div>
                    <p>Conform a couple details about yourself</p>
                </div>
                <div className="about-container-items">
                   <div className="about-items"> Tell us about your interests </div>
                   <p>Based on your interests, we will add you to Circles that align with them.
                       You can add and remove Circles at anytime.
                   </p>
                </div>
                <div className="about-container-items">
                    <div className="about-items"> Connect with colleagues </div>
                    <p>Connect with colleagues</p>
                </div>
            </div>

            <div className="welcome-button-container">
                <Link className="get-started-link" to="/user-info">
                    <Button color="primary" variant="contained">Get started</Button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Welcome;