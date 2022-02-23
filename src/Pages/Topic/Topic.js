import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import { Checkbox } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import CircleButton from '../../Layout/Button/CircleButton';
import './Topic.css';

function Topics() {

    return (
        <>
            <Header title="Join Circle"/>
            <div className="topic-selection-container">
                <img src="interested-topics-icon.svg" alt="intrested topic" className="pick-topic-avatar" />
                <h2 className="topic-selection-title type-h1">What types of topics interest you ?</h2>
                <h3 className="topic-selection-desc">We call these topics "Circles" and we'll add you to the ones you're interested in. You can always add more later!</h3>
                <FormGroup className="topic-selection-pool">
                    <div className="topic-selection-checkbox-container">
                        <FormControlLabel className="topic-selection-checkbox" control={<Checkbox />} label="Education" />
                    </div>
                    <div className="topic-selection-checkbox-container">
                        <FormControlLabel className="topic-selection-checkbox" control={<Checkbox />} label="Finance/Budgeting" />
                    </div>
                    <div className="topic-selection-checkbox-container">
                        <FormControlLabel className="topic-selection-checkbox" control={<Checkbox />} label="Nutrition" />
                    </div>
                    <div className="topic-selection-checkbox-container">
                        <FormControlLabel className="topic-selection-checkbox" control={<Checkbox />} label="Childcare" />
                    </div>
                    <div className="topic-selection-checkbox-container">
                        <FormControlLabel className="topic-selection-checkbox" control={<Checkbox />} label="Activities" />
                    </div>
                </FormGroup>
                <div className="navigation-container">
                    <div className="dependent-back-link">
                        <Link className="back-link" to="/dependents">Back</Link>
                    </div>
                    <div className="continue-button-container" >
                        <Link className="get-started-link" to="/dashboard">
                            <CircleButton buttonText="Continue"></CircleButton>
                        </Link>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Topics;