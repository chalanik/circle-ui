import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import Header from '../../Layout/Header/Header';
import CircleButton from '../../Layout/Button/CircleButton';

function Welcome() {

    const fetchUsers = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('id');
        let user = { 'msid': userId };
        localStorage.setItem('userFormData', JSON.stringify(user));
        console.log(user);

        const response = await fetch(
            "https://express-nikhil.azurewebsites.net/api/v1/user/siha"
          );
         const data = await response.json();
         console.log(data);
        };
    
    useEffect( () => {
        fetchUsers();
    }, []);

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
                        <Link className="get-started-link" to="/user-info">
                            <CircleButton buttonText="Get started"></CircleButton>
                        </Link>
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