import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Launch.css';

function Launch() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/welcome");
    }

    return (
        <div>
            <img className="launch-container" src="launch.png" alt="launch" onClick={handleClick}/>
        </div>
    );
}

export default Launch;