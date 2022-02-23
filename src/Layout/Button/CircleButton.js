import React from 'react';
import { Button } from '@mui/material';
import './CircleButton.css';

function CircleButton(props) {
    return (
        <Button {...props} className="circle-button" color="primary" variant="contained" disableElevation size="large">
           {props.buttonText}
        </Button>
    );
}

export default CircleButton;