import React from "react";
import './home-header.css';
import cplLogo from '../assets/calgary-public-library-logo.png';
import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { FaCanadianMapleLeaf } from "react-icons/fa";



function HomeHeader(){
    // Constant for the time, 12 hr format
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour12: true}));
    // Constant for the date
    const [date, setDate] = useState(new Date().toLocaleDateString());

    // rename useNavigate function to navigate
    let navigate = useNavigate();
    // make our navigate home path/function
    const goHome = () => {
        let homePath = '/';
        navigate(homePath);
    }

    // make navigate to the
    const goLogin = () => {
        let loginPath = '/login';
        navigate(loginPath);
    }


    // use effect to continually update the date and the time every 1000 ms = 1 second
    useEffect(() => {
        const intervalId = setInterval(() => {
            // temp string for the date that will be used to reassign the date
            const tempDate = new Date().toLocaleDateString();
            setDate(tempDate);

            // temp string for the time that will be used to reassign the time
            const tempTime = new Date().toLocaleTimeString([], { hour12: true});
            setTime(tempTime);
        }, 1000)

        return () => {clearInterval(intervalId);}
    }, []);


    return(
        <div className="header">

        <div className= "cplHome">
            <button className="hh-cplButton" onClick={goHome} ><img src={cplLogo}  width={200} height={100} /></button>
        </div>

            <div className = "date">
                <h1>{date}</h1>
            </div>

            <div className="time">
                <h1>{time}</h1>
            </div>

            <div className='headerButtons'>
                <div className="dropdown">
                    <button className="language">Language</button>
                    <div className="dropdown-content">
                        <a><FaCanadianMapleLeaf style={{ color: 'red' }} /> English</a>
                    </div>
                </div>
                <button className="login" onClick={goLogin}>Login</button>
            </div>
        </div>
    )
}

export default HomeHeader;