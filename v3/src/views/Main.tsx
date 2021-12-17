import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

const Main = () => {
    let navigate = useNavigate();
    return (
        <div className="view-main">
            <Header />
            {/* <button onClick={() => {
                setTimeout(() => {
                    navigate(`/plays`)
                }, 2000);
            }}>plays</button> */}
            <Menu />
            {/* <Footer /> */}
        </div>
    );
};

export default Main;