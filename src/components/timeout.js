import React, { useEffect, useState } from 'react';
import './timeout.css';
import { useNavigate } from 'react-router-dom';


function Timeout({onClose}) {

    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigate('/');
          onClose();
        }, countdown * 1000); 
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        return () => {clearTimeout(timeout); 
                    clearTimeout(interval);
                    };
      }, [navigate, onClose, countdown]);

    return (
    <div className="timeout-popup">
        <h1>Are you still there? Move the mouse or use the keyboard to continue browsing</h1>
        <p>Returning to home page in: {countdown} seconds</p>
    </div>
    );
}
export default Timeout;
