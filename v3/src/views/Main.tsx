import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    let navigate = useNavigate();
    return (
        <div>
            Main
            <button onClick={() => {
                setTimeout(() => {
                    navigate(`/plays`)
                }, 2000);
            }}>plays</button>
        </div>
    );
};

export default Main;