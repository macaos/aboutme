import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <h1 className="logo" onClick={() => {
                navigate('/')
            }}>
                <div className="item">MACA</div>
                {/* <div className="item">PLAY</div> */}
            </h1>
            {/* <h2 className="sub-tit">
                <div>PLAYGROUND</div>
            </h2> */}
        </header>
    );
};

export default Header;