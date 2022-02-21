import React from 'react';
import { Button } from '@material-ui/core';
import './CircleButton.css';

function CircleButton({buttonText}) {
    return (
        <Button className="circle-button" color="primary" variant="contained" disableElevation size="large">
            {buttonText}
        </Button>
    );
}

export default CircleButton;