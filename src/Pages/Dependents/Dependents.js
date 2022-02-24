import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import { Checkbox } from '@mui/material';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircleButton from '../../Layout/Button/CircleButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './Dependents.css';

function Dependents() {

    return (
        <>
            <Header title="Join Circle"/>
            <div className="user-info-container">
                <img src="dependent-icon.svg" alt="dependent icon" className="edit-profile-pic" />
                <FormGroup>
                    <div className="dependents-checkbox-container">
                        <FormControlLabel className="dependents-checkbox" control={<Checkbox checked/>} label="Children" />
                    </div>
                    <div className="dependents-checkbox-container">
                        <FormControlLabel className="dependents-checkbox" control={<Checkbox />} label="Spouse" />
                    </div>
                    <div className="dependents-checkbox-container">
                        <FormControlLabel className="dependents-checkbox" control={<Checkbox />} label="Parent" />
                    </div>
                    <div className="dependents-checkbox-container">
                        <FormControlLabel className="dependents-checkbox" control={<Checkbox />} label="Other" />
                    </div>
                </FormGroup>
                <div className="posts-container">
                    Great! We need a little information about your dependent(s)
                </div>
                <div className="dependents-info-container">
                    <div className="dependents-age-dropdown">
                        <span className="dependent-age-text">Your child's age</span>
                        <Select className="dependent-age-select"
                            value=""
                        >
                            <MenuItem value={""}></MenuItem>
                            <MenuItem value={""}></MenuItem>
                        </Select>
                    </div>
                    <div className="dependents-age-dropdown">
                        <span className="dependent-age-text">Your child's gender</span>
                        <Select className="dependent-age-select"
                            value=""
                        >
                            <MenuItem value={""}></MenuItem>
                            <MenuItem value={""}></MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="add-another-dependent">
                    <AddCircleOutlineIcon className="add-dependent-icon"/>
                    Add another child
                </div>
                <div className="navigation-container">
                    <div className="dependent-back-link">
                        <Link className="back-link" to="/user-info">Back</Link>
                    </div>
                    <div className="continue-button-container" >
                        <Link className="get-started-link" to="/pick-topic">
                            <CircleButton buttontext="Continue"></CircleButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dependents;