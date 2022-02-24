import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import { Checkbox } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import CircleButton from '../../Layout/Button/CircleButton';
import './Topic.css';
import circleMock from './circle-mock';

function Topics() {

    const [circleIdList, addCircleIds] = useState([]);
    let user = {};

    let circlesResponse = localStorage.getItem('circles');
    if(circlesResponse == null) {
        circlesResponse = circleMock;
    } else {
        circlesResponse = JSON.parse(circlesResponse);
    }

    const [circleList] = useState([...circlesResponse]);

    function continueClickHandler() {
        user = JSON.parse(localStorage.getItem('userFormData'));
        user = { ...user, 'circles': circleIdList };
        localStorage.setItem('userFormData', JSON.stringify(user));
        fetch(
            `https://express-nikhil.azurewebsites.net/api/v1/user/${user._id}`, {
                method: "POST",
                body: JSON.stringify({ zip: user.zip, circles: circleIdList }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }
        )
        .then(response => response.json())
        .then(json => console.log(json));
    }

    function manageCircles(event, circleId) {
        let isSelected = event.target.checked;
        if(isSelected) {
            addCircleIds([...circleIdList, circleId]);
        } else {
            let filteredIdArray = circleIdList.filter(element => element !== circleId );
            addCircleIds([...filteredIdArray]);
        }
    }

    return (
        <>
            <Header title="Join Circle"/>
            <div className="topic-selection-container">
                <img src="interested-topics-icon.svg" alt="intrested topic" className="pick-topic-avatar" />
                <h2 className="topic-selection-title type-h1">What types of topics interest you ?</h2>
                <h3 className="topic-selection-desc">We call these topics "Circles" and we'll add you to the ones you're interested in. You can always add more later!</h3>
                <FormGroup className="topic-selection-pool">
                    { circleList.map((c) => (
                         <div className="topic-selection-checkbox-container">
                            <FormControlLabel className="topic-selection-checkbox"
                                control={<Checkbox  onChange={(event) => manageCircles(event, c._id)} />}
                                label={c.name}
                            />
                        </div>
                    ))}
                </FormGroup>
                <div className="navigation-container">
                    <div className="dependent-back-link">
                        <Link className="back-link" to="/dependents">Back</Link>
                    </div>
                    <div className="continue-button-container" onClick={continueClickHandler}>
                        <Link className="get-started-link" to="/dashboard">
                            <CircleButton buttontext="Continue"></CircleButton>
                        </Link>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Topics;