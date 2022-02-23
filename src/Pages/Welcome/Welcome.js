import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Welcome.css';
import Header from '../../Layout/Header/Header';
import CircleButton from '../../Layout/Button/CircleButton';

function Welcome() {

    const navigate = useNavigate();

    let isUserRegistered = false;

    const fetchUsers = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        let userId = urlParams.get('id');
        userId = userId || 'siha';
        let user = { 'msid': userId };

        const response = await fetch(
            `https://express-nikhil.azurewebsites.net/api/v1/user/${userId}`
          );
         const data = await response.json();
         if(data) {
            isUserRegistered = true;
            localStorage.setItem('userInfo', JSON.stringify(data));
         } else {
            localStorage.setItem('userFormData', JSON.stringify(user));
         }
        };
    
    useEffect( () => {
        fetchUsers();
    }, []);

    function getStartedClick() {
        if(isUserRegistered) {
            navigate("/dashboard");
        } else {
            navigate("/user-info");
        }
    }

    return (
        <>
        <Header />
        <div className="welcome-container-wrapper">
        <div className="welcome-container">
            <div className="welcome-image-container">
                <img src="welcome.svg" alt="Welcome to Circle" className="welcome-image" />
                <div className="welcome-image-div">
                    <div className="welcome-text">Welcome to Circle</div>
                    <div className="welcome-text-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.
                    </div>
                    <div>
                        <CircleButton buttonText="Get started" onClick={getStartedClick}></CircleButton>
                     </div>
                </div>
            </div>
            <div className="about-container">
                <div className="about-container-items">
                    <img src="basic-info.svg" alt="personal details" className="personal-details-image"/>
                    <div className="about-items about-text-content">Tell us about you</div>
                    <p className="about-text-content about-items-desc">Confirm a couple details about yourself</p>
                </div>
                <div className="about-container-items">
                    <img src="interested-topics-icon.svg" alt="hobbies" className="personal-details-image"/>
                   <div className="about-items about-text-content"> Tell us about your interests </div>
                   <p className="about-text-content about-items-desc">Based on your interests, we will add you to Circles that align with them.
                       You can add and remove Circles at anytime.
                   </p>
                </div>
                <div className="about-container-items">
                    <img src="dependent-icon.svg" alt="colleagues" className="personal-details-image"/>
                    <div className="about-items about-text-content"> Connect with colleagues </div>
                    <p className="about-text-content about-items-desc">Connect with colleagues</p>
                </div>
            </div>

            <div className="welcome-button-container">
                <CircleButton buttonText="Get started" onClick={getStartedClick}></CircleButton>
            </div>
        </div>
        </div>
        </>
    );
}

export default Welcome;