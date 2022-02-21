import React from 'react';
import './Dashboard.css';
import Header from '../../Layout/Header/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Post from '../../Layout/Post/Post';

function Dashboard() {
    return (
        <>
            <Header />
            <div className="dashboard-container">
                <div className="dasboard-space-container"></div>
                <div className="dashboard-left-section">
                    <Card className="your-circles">
                        <CardContent>
                            <div className="your-circles-heading">
                                <div className="dashboard-heading">Your Circles</div>
                                <div className="circle-manage-title">Manage</div>
                            </div>
                            <div className="circle-name-container">
                                <img src="education-icon.svg" alt="education icon"/>
                                <div className="circle-name-title">Education</div>
                            </div>
                            <div className="circle-name-container">
                                <img src="finance-budgeting-icon.svg" alt="financial budgeting icon"/>
                                <div className="circle-name-title">Financial planning / budgeting</div>
                            </div>
                            <div className="circle-name-container">
                                <img src="nutrition-icon.svg" alt="nutrition icon"/>
                                <div className="circle-name-title">Nutrition</div>
                            </div>
                            <div className="circle-name-container">
                                <img src="circle-name-icon.png" alt="circle placeholder icon"/>
                                <div className="circle-name-title">Childcare</div>
                            </div>
                            <div className="circle-name-container">
                                <img src="circle-name-icon.png" alt="circle placeholder icon"/>
                                <div className="circle-name-title">Elderly Care</div>
                            </div>
                            <div className="circle-name-container">
                                <img src="circle-name-icon.png" alt="circle placeholder icon"/>
                                <div className="circle-name-title">Activities</div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="your-circles">
                        <CardContent>
                            <div className="dashboard-heading circle-trending-topic-header">Trending Topics</div>
                            <div className="dashboard-trending-topics-subheading">Discover what's trending with your colleagues</div>
                            <div className="circle-name-title circle-topics">Work life balance</div>
                            <div className="circle-name-title circle-topics">Topic</div>
                            <div className="circle-name-title circle-topics">Topic</div>
                            <div className="circle-name-title circle-topics">Topic</div>
                            <div className="circle-name-title circle-topics">Topic</div>
                        </CardContent>
                    </Card>

                </div>
                <div className="dashboard-right-section">
                    <div className="dashboard-heading circles-conversation-heading">Conversations in your Circle</div>
                    <div className="dashboard-post-container"><Post /></div>
                    <div><Post /></div>
                </div>
                <div className="dasboard-space-container"></div>
            </div>
        </>
    );
}

export default Dashboard;