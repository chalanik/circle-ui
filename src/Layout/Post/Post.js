import React from 'react';
import './Post.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Post() {
    return (
        <Card>
            <CardContent>
                <div className="circle-name-container">
                    <img src="education-icon.png" alt="education icon"/>
                        <div className="circle-name-title">Education</div>
                    </div>
                    <div className="circle-post-container">
                        <div className="profile-container">
                            <img className="profile-pic" src="profile.jpg" alt="profile pic" />
                            <div className="post-user-info">
                                <div className="post-username">Jessica M.</div>
                                <div className="post-time">Today 11:23 am</div>
                            </div>
                        </div>
                        <div className="post-content">
                            Thinking baout holding my son back from Kindergarten this year.
                            Anyone lese doing the same?
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default Post;