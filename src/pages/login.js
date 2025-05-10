import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../components/home-header";

import "./login.css";

function Login(){
    // rename useNavigate function to navigate
    let navigate = useNavigate();

    const handleCancel = () => {
        let homePath = '/';
        navigate(homePath);
    }
    const [inputValue, setInputValue] = useState('');

    const handleNumberClick = (number) => {
        setInputValue(inputValue + number);
    };

    const handleDelete = () => {
        setInputValue(inputValue.slice(0, -1));
    };

    const handleEnter = () => {
        let enterPin = '/login/enterpin';
        navigate(enterPin);
    };
    return(
        <div>
            <HomeHeader />
             <div class="library-card-input">
                    <p>Please scan your library card or enter your library card number:</p>
                    {/* <div class="search-barLogin">
                        <input type="text" value="1234567890" readOnly/>
                    </div> */}
                    <div className="search-barLogin">
                        <input type="text" value={inputValue}  />
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
                    {/* <div class="buttonsLogin">
                        <button class="button-login">1</button>
                        <button class="button-login">2</button>
                        <button class="button-login">3</button>
                        <button class="delete-button-login">Delete</button>
                        <button class="button-login">4</button>
                        <button class="button-login">5</button>
                        <button class="button-login">6</button>
                        <button class="enter-button-login">Enter</button>
                        <button class="button-login">7</button>
                        <button class="button-login">8</button>
                        <button class="button-login">9</button>
                        <button class="cancel-button-login">Cancel</button>
                        <button class="button-0-login">0</button>
                    </div> */}
                    <div class="login-scan-card-below-container">
                        <div class="scan-text">Scan your library </div>
                        <div class="scan-text-2">card below</div>
                        <div class="arrow">&darr;</div>
                    </div>
                    <button className="assistancebutton-login">Request Assistance</button>
                </div> 
        </div>
    )
}

export default Login;