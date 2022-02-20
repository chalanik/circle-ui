import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import Header from '../../Layout/Header/Header';
import CircleButton from '../../Layout/Button/CircleButton';

function Welcome() {
    return (
        <>
        <Header />
        <div className="welcome-container-wrapper">
        <div className="welcome-container">
            <div className="welcome-image-container">
                <img src="./welcome.png" alt="Welcome to Circle" className="welcome-image" />
                <div className="welcome-image-div">
                    <div className="welcome-text">Welcome to Circle</div>
                    <div className="welcome-text-content">
                        jkhdjsfh slkjfskdlfj kljfklsjflrk kfljkler frjrlej ffrejklarg eark
                        gjefgjsr jkhfskj hkfjhej kjf gffgfg jgjhj jhjkkj jhjgyff fdghjhjgj
                    </div>
                    <div>
                        <Link className="get-started-link" to="/user-info">
                            <CircleButton buttonText="Get started"></CircleButton>
                        </Link>
                     </div>
                </div>
            </div>
            <div className="welcome-title">How Circle works</div>
            <div className="about-container">
                <div className="about-container-items">
                    <img src="personal-details.png" alt="personal details" className="personal-details-image"/>
                    <div className="about-items">Tell us about you</div>
                    <p>Confirm a couple details about yourself</p>
                </div>
                <div className="about-container-items">
                    <img src="hobbies.png" alt="hobbies" className="personal-details-image"/>
                   <div className="about-items"> Tell us about your interests </div>
                   <p>Based on your interests, we will add you to Circles that align with them.
                       You can add and remove Circles at anytime.
                   </p>
                </div>
                <div className="about-container-items">
                    <img src="colleagues.jpg" alt="colleagues" className="personal-details-image"/>
                    <div className="about-items"> Connect with colleagues </div>
                    <p>Connect with colleagues</p>
                </div>
            </div>

            <div className="welcome-button-container">
                <Link className="get-started-link" to="/user-info">
                    <CircleButton buttonText="Get started"></CircleButton>
                </Link>
            </div>
        </div>
        </div>
        </>
    );
}

export default Welcome;