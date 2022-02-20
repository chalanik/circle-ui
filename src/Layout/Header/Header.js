import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-container-items">
                    <div className="header-title-container">
                        <img className="circle-logo" src="circle-logo.png" alt="circle logo" />
                        <div className="header-company-name-container">
                            <span className="header-app-title">Circle</span>
                            <span className="header-company-name">by Morgan Stanley</span>
                        </div>
                    </div>
                </div>
                <div className="header-container-items header-title">{props.title}</div>
                {/* <div className="header-container-items header-close"></div> */}
            </div>
        </header>
    );
}

export default Header;