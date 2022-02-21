import React from 'react';
import './Dashboard.css';
import Header from '../../Layout/Header/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Post from '../../Layout/Post/Post';
import YourCircles from '../../Layout/YourCircles/YourCircles';

function Dashboard() {
    return (
        <>
            <Header />
            <div className="dashboard-container">
                <div className="dasboard-space-container"></div>
                <div className="dashboard-left-section">
                    <YourCircles circlesArray={["Education", "Financial planning / budgeting", "Nutrition", "Childcare", "Elderly Care", "Activities"]}/>

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
                    <div className="dashboard-post-container">
                        <Post 
                            postTopic={"Education"}
                            userName={"Jessica M."}
                            postTimestamp={"Today 11:23 am"}
                            postContent={"Thinking baout holding my son back from Kindergarten this year.Anyone lese doing the same?"}
                        />
                    </div>
                    <div>
                        <Post
                            postTopic={"Nutrition"}
                            userName={"Katie B."}
                            postTimestamp={"Today 6 pm"}
                            postContent={"When did everyone start giving their baby solids?"}
                        />
                    </div>
                </div>
                <div className="dasboard-space-container"></div>
            </div>
        </>
    );
}

export default Dashboard;