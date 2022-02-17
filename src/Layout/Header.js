import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-container-items">
                    <span className="header-app-title">Circle</span>
                    <span className="header-company-name">by Morgan Stanley</span>
                </div>
                <div className="header-container-items header-title">{props.title}</div>
                <div className="header-container-items header-close"></div>
            </div>
        </header>
    );
}

export default Header;