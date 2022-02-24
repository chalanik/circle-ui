import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import Header from '../../Layout/Header/Header';
import CircleButton from '../../Layout/Button/CircleButton';

function Welcome() {

    const navigate = useNavigate();

    let isUserRegistered = false;

    const fetchUsers = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        let userId = urlParams.get('id');
        let user = {};

        const response = await fetch(
            `https://express-nikhil.azurewebsites.net/api/v1/user/${userId}`
        );
        const data = {
            "posts": [
                {
                    "anonymous": false,
                    "_id": "620e7d3366d8d74efc3b2305",
                    "description": "What worked for me was to remove an item until I didn't crave it anymore instead of going completely cold turkey.",
                    "title": "Best strategies for kicking a sugar addiction?",
                    "user": {
                        "_id": "620e4979dc557df876cc5842",
                        "name": "Nikhil Chalamalla"
                    },
                    "comments": [
                        {
                            "_id": "620f3f0744d4409b30a648f7",
                            "content": "I know a lot of people on team \"no artificial sweeteners\", but I have no issue with them at all and don't really miss the real stuff anymore. I use monkfruit drops in my tea, Mio in my water, and erythritol for a lot of my baking. Erythritol is a great one because it's mostly just excreted through urine unlike other artificial sweeteners that are fermented in the gut.",
                            "user": {
                                "_id": "620e49e5dc557df876cc5844",
                                "name": "Karthikeyan K"
                            },
                            "createdAt": "2022-02-18T06:39:03.380Z",
                            "__v": 0
                        }
                    ],
                    "createdAt": "2022-02-17T16:52:03.601Z",
                    "circle": {
                        "_id": "620e4ae4dc557df876cc584c",
                        "name": "Nutrition"
                    },
                    "__v": 0
                },
                {
                    "anonymous": false,
                    "_id": "620e866eb4f4e0d8878d3e35",
                    "description": "All else being equal, if I hypothetically just added a couple of tablespoons of olive oil to my day, is that actually healthier?",
                    "title": "\"Olive Oil is healthy,\" alright, but clarification needed: is it intrinsically healthy or only when it replaces unhealthy fats?",
                    "user": {
                        "_id": "620e49e5dc557df876cc5844",
                        "name": "Karthikeyan K"
                    },
                    "comments": [],
                    "createdAt": "2022-02-17T17:31:26.175Z",
                    "circle": {
                        "_id": "620e4ae4dc557df876cc584c",
                        "name": "Nutrition"
                    },
                    "__v": 0
                }
            ],
            "_id": "620e4979dc557df876cc5842",
            "name": "Nikhil Chalamalla",
            "msid": "chalanik",
            "circles": [
                {
                    "_id": "620e4ae4dc557df876cc584c",
                    "name": "Nutrition",
                    "users": [
                        "620e4979dc557df876cc5842",
                        "620e49e5dc557df876cc5844",
                        "620e4a21dc557df876cc5848"
                    ],
                    "posts": [
                        "620e7d3366d8d74efc3b2305",
                        "620e866eb4f4e0d8878d3e35"
                    ],
                    "__v": 0
                },
                {
                    "_id": "620e4b16dc557df876cc5850",
                    "name": "Childcare",
                    "users": [
                        "620e4979dc557df876cc5842",
                        "620e4a21dc557df876cc5848"
                    ],
                    "posts": [],
                    "__v": 0
                },
                {
                    "_id": "620e4b0edc557df876cc584e",
                    "name": "Finance/Budgeting",
                    "users": [
                        "620e4979dc557df876cc5842"
                    ],
                    "posts": [],
                    "__v": 0
                }
            ],
            "__v": 0,
            "zip": 501505
        };
        if(!data || data?.zip == null) {
            user = { ...user, '_id': data?._id };
            localStorage.setItem('userFormData', JSON.stringify(user));
        } else {
            isUserRegistered = true;
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
    };

    const fetchCircles = async () => {
        const circlesResponse = await fetch(
            `https://express-nikhil.azurewebsites.net/api/v1/circles`
        );
        const circles = await circlesResponse.json();
        localStorage.setItem('circles', JSON.stringify(circles));
    };
    
    useEffect( () => {
        localStorage.clear();
        fetchUsers();
        fetchCircles();
    });

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
                        <CircleButton buttontext="Get started" onClick={getStartedClick}></CircleButton>
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
                <CircleButton buttontext="Get started" onClick={getStartedClick}></CircleButton>
            </div>
        </div>
        </div>
        </>
    );
}

export default Welcome;