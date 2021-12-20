import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();
    return (
        <div className="view-menu">
            <div>
                <button className="btn" onClick={() => {
                    navigate(`/play`);
                }}>PLAYGROUND</button>
                <button className="btn" onClick={() => {
                    navigate(`/experience`);
                }}>EXPERIENCE</button>
                <button className="btn" onClick={() => {
                    navigate(`/about`);
                }}>ABOUT</button>
            </div>
        </div>
    );
};

export default Menu;