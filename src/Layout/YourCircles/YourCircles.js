import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import './YourCircles.css';

function YourCircles({circlesArray}) {

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
                {circlesArray.map(name => (  
                    <div className="circle-name-container">
                    <img src={getIconPath(name)} alt={name}/>
                    <Link className="circle-name-link" to="/circle">
                        <div className="circle-name-title">{name}</div>
                    </Link>
                </div> 
                ))}  
            </CardContent>
        </Card>
    );
}

export default YourCircles;

