import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import './YourCircles.css';

function YourCircles(props) {
    const { circles } = props;

    function getIconPath(topic) {
        switch(topic) {
            case 'Education':
                return 'education-icon.svg';
            case 'Nutrition':
                return 'nutrition-icon.svg';
            case 'Financial planning / budgeting':
                return 'finance-budgeting-icon.svg';
            default:
                return 'not-joined-circle.svg';
        }
    }

    return (
        <Card className="your-circles">
            <CardContent>
                <div className="your-circles-heading">
                    <div className="dashboard-heading">Your Circles</div>
                    <div className="circle-manage-title">Manage</div>
                </div>
                {circles.map(circle => (  
                    <div className="circle-name-container">
                    <img src={getIconPath(circle.name)} alt={circle.name}/>
                    <Link className="circle-name-link" to={`/circle/${circle._id}`}>
                        <div className="circle-name-title">{circle.name}</div>
                    </Link>
                </div> 
                ))}  
            </CardContent>
        </Card>
    );
}

export default YourCircles;

