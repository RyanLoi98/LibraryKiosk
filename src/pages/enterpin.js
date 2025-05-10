import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../components/home-header";

import "./login.css";

function Enterpin(){

    const [inputValue, setInputValue] = useState('');

    const handleNumberClick = (number) => {
        setInputValue(inputValue + number);
    };

    const handleDelete = () => {
        setInputValue(inputValue.slice(0, -1));
    };

    // rename useNavigate function to navigate
    let navigate = useNavigate();

    const handleCancel = () => {
        let loginPath = '/login';
        navigate(loginPath);
    }
    const handleEnter = () => {
        let loginPath = '/HomeLoggedIn';
        navigate(loginPath);
    };
    return(
        <div>
            <HomeHeader />
                <div class="library-card-input">
                    <p>Hello Ryan! Please Enter Your Pin Number</p>
                    <div className="search-barLogin">
                        <input type="password" value={inputValue}  />
                    </div>
                    <div className="buttonsLogin">
                        <button className="button-login" onClick={() => handleNumberClick('1')}>1</button>
                        <button className="button-login" onClick={() => handleNumberClick('2')}>2</button>
                        <button className="button-login" onClick={() => handleNumberClick('3')}>3</button>
                        <button className="delete-button-login" onClick={handleDelete}>Delete</button>
                        <button className="button-login" onClick={() => handleNumberClick('4')}>4</button>
                        <button className="button-login" onClick={() => handleNumberClick('5')}>5</button>
                        <button className="button-login" onClick={() => handleNumberClick('6')}>6</button>
                        <button className="enter-button-login" onClick={handleEnter}>Enter</button>
                        <button className="button-login" onClick={() => handleNumberClick('7')}>7</button>
                        <button className="button-login" onClick={() => handleNumberClick('8')}>8</button>
                        <button className="button-login" onClick={() => handleNumberClick('9')}>9</button>
                        <button className="cancel-button-login" onClick={handleCancel}>Cancel</button>
                        <button className="button-0-login" onClick={() => handleNumberClick('0')}>0</button>
                    </div>
                    <button className="assistancebutton-login">Request Assistance</button>
                </div>
            
        </div>
    )
}

export default Enterpin;