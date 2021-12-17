import React from 'react';
import { useNavigate } from 'react-router-dom';

let yOffset;
let $logo: any
window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    if (!$logo) {
        $logo = document.querySelector('.logo');
    }
    if (yOffset < 120) {
        const ratio1 = 1 - yOffset / 120;
        $logo.style.opacity = ratio1
        const ratio2 = 1 - yOffset / 90;

    } else {
        $logo.style.opacity = 0;

    }
});

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