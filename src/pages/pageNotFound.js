import React from "react";
import "./pageNotFound.css"
import {useNavigate} from "react-router-dom";
import HomeHeaderLoggedin from "../components/home-header-loggedin";
import HomeFooter from "../components/back-footer";

const PageNotFound = () => {

    // implementing the back function via the useNavigate feature of the router.
    let navigate = useNavigate();


    return(
        <div className="Error404">
            <h1 className="ErrorHeader">Error 404: Page Not Found</h1>
            <button className="ErrorBack" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default PageNotFound