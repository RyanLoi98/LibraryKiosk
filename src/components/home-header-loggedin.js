import React from "react";
import './home-header-loggedin.css';
import cplLogo from '../assets/calgary-public-library-logo.png';
import stickHead from '../assets/stickHead.png';
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {FaCanadianMapleLeaf} from "react-icons/fa";


function HomeHeaderLoggedIn(){

    
    // rename useNavigate function to navigate
    let navigate = useNavigate();

    // make our navigate home path/function (still logged in)
    const goHome = () => {
        let homePath = '/HomeLoggedIn';
        navigate(homePath);
    }

    // make our navigate to logged out home
    const goHomeLoggedOut = () => {
        let homePath = '/';
        navigate(homePath);
    }

    // make our navigate to account screen
    // make our navigate to logged out home
    const goAccount = () => {
        let accountPath = '/accountScreen';
        navigate(accountPath);
    }






    // Constant for the time, 12 hr format
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour12: true}));
    // Constant for the date
    const [date, setDate] = useState(new Date().toLocaleDateString());

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

            <div className = "date">
                <h1>{date}</h1>
            </div>

            <div className="time">
            <h1>{time}</h1>
            </div>


            <div className="hhl-logout">
                <button className="hhl-logoutButton" onClick={goHomeLoggedOut}> Logout</button>
            </div>

            <h1 className="GreetingMessage" style={{ fontSize: 20 }}>Welcome Ryan!</h1>

            <div className='headerButtons'>
                <button className="hhl-cplButton" onClick={goHome} ><img src={cplLogo}  width={200} height={100} /></button>
                <div className="hhl-dropdown">
                    <button className="hhl-language hhl-dropbtn">Language</button>
                    <div className="hhl-dropdown-content">
                        <a><FaCanadianMapleLeaf style={{ color: 'red' }} /> English</a>
                    </div>
                </div>
                <button className="profile" onClick={goAccount}><img src={stickHead}  width={100} height={100} /></button>
            </div>

        </div>
    )
}

export default HomeHeaderLoggedIn;