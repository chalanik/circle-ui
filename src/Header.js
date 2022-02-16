import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-container-items">
                    <b>Circle</b>
                    <span class="header-company-name">by Morgan Stanley</span>
                </div>
                <div className="header-container-items header-title">{props.title}</div>
                <div className="header-container-items">X</div>
            </div>
        </header>
    );
}

export default Header;