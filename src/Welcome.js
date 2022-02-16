import React from 'react';
import { Button } from '@material-ui/core';
import './Welcome.css';

function Welcome() {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">How Circle works</h1>
            <div className="about-container">
                <div className="about-container-items">
                    <h2>Tell us about you</h2>
                    <p>Conform a couple details about yourself</p>
                </div>
                <div className="about-container-items">
                   <h2> Tell us about your interests </h2>
                   <p>Based on your interests, we will add you to Circles that align with them.
                       You can add and remove Circles at anytime.
                   </p>
                </div>
                <div className="about-container-items">
                    <h2> Connect with colleagues </h2>
                    <p>Connect with colleagues</p>
                </div>
            </div>

            <div className="welcome-button-container">
                <Button color="primary" variant="contained">Get started</Button>
            </div>
        </div>
    );
}

export default Welcome;