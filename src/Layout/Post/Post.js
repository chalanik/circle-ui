import React from 'react';
import './Post.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Post({postTopic, userName, postTimestamp, postContent}) {

    function getIconPath(topic) {
        switch(topic) {
            case 'Education':
                return 'education-icon.svg';
            case 'Nutrition':
                return 'nutrition-icon.svg';
            case 'Financial planning / budgeting':
                return 'finance-budgeting-icon';
            default:
                return '';
        }
    }

    return (
        <Card>
            <CardContent>
                <div className="circle-name-container">
                    <img src={getIconPath(postTopic)} alt="education icon"/>
                        <div className="circle-name-title">{postTopic}</div>
                    </div>
                    <div className="circle-post-container">
                        <div className="profile-container">
                            <img className="profile-pic" src="profile.jpg" alt="profile pic" />
                            <div className="post-user-info">
                                <div className="post-username">{userName}</div>
                                <div className="post-time">{postTimestamp}</div>
                            </div>
                        </div>
                        <div className="post-content">
                            {postContent}
                        </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default Post;