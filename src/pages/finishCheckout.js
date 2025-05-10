import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


// Import components needed for page
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";

// Import the css file (stylesheet)
import "./finishCheckout.css";

// rename function to the page name
function FinishCheckout() {

  const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigate('/');
        }, countdown * 1000); 
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        return () => {clearTimeout(timeout); 
                    clearTimeout(interval);
                    };
      }, [navigate, countdown]);

  return (
    <div>
      <HomeHeader />
      <div class="section-finish-checkout">
        <div class="finish-checkout-container">
          <div class="finish-checkout-title">
            <h1 class="finish-checkout-message">Checkout Complete!</h1>
          </div>
          <div class="finish-checkout-options">
            <button class="reciept-option">
              <a href="/">Print Receipt</a>
            </button>
            <button class="reciept-option">
              <a href="/">Email Receipt</a>
            </button>
            <button class="reciept-option">
              <a href="/">No Receipt</a>
            </button>
          </div>
          <div class="finish-checkout-timeout">
            <p class="finish-checkout-timeout-message">
              Returning to home page in: {countdown} seconds
            </p>
          </div>
        </div>
      </div>
      <BackFooter />
    </div>
  );
}

// export your function, remember to keep name consistent
export default FinishCheckout;
