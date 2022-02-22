import React from 'react';
import './Circle.css';
import Header from '../../Layout/Header/Header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Post from '../../Layout/Post/Post';
import CircleButton from '../../Layout/Button/CircleButton';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

function Circle() {

    const similarCirclesArray = ["College admissions", "Universal Pre-K", "Tutors", "SAT/ACT Prep"]

    return (
        <>
            <Header dashboard={"true"}/>
            <div className="your-circle-header-container">
                <div className="your-circle-name-container">
                    <img src="education-icon.svg" alt="education icon" className="education-icon"/>
                    <div className="circle-name-title-container">
                        <div className="circle-name-title-header">Education</div>
                        <div className="circle-member-info-container">
                            <div className="circle-member-info">
                                <PeopleOutlineIcon />
                                <span className="circle-member-info-text">135 members </span>
                            </div>
                            <div className="circle-member-info">
                                <RecordVoiceOverIcon />
                                <span className="circle-member-info-text">20 active now </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leave-circle-button"><CircleButton buttonText="Leave circle"></CircleButton></div>
            </div>
            <div className="dashboard-container">
                <div className="dasboard-space-container"></div>
                <div className="circle-left-section">
                    <div className="dashboard-heading-container">
                        <div className="dashboard-heading circles-conversation-heading">
                            <div>
                                <CircleButton buttonText="Start a new topic"></CircleButton>
                            </div>
                        </div>
                        <div className="circle-sort-container">
                            <span className="sort-by-text">Sort by</span>
                            <Select className="circle-sort-select"
                                value="Popular"
                                // onChange={handleChange}
                            >
                                <MenuItem value={"Popular"}>Popular</MenuItem>
                                <MenuItem value={"Latest"}>Latest</MenuItem>
                            </Select>
                        </div>
                    </div>
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
                <div className="circle-right-section">
                    
                <Card className="your-circles">
                    <CardContent>
                        <div className="your-circles-heading">
                            <div className="dashboard-heading">Similar Circles</div>
                        </div>
                        {similarCirclesArray.map(name => (  
                            <div className="circle-name-container">
                            <img src="not-joined-circle.svg" alt={name}/>
                            <div className="circle-name-title">{name}</div>
                        </div> 
                        ))}  
                    </CardContent>
                </Card>
                </div>
                <div className="dasboard-space-container"></div>
            </div>
        </>
    );
}

export default Circle;