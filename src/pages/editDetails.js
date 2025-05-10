import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import HomeHeaderLoggedIn from  "../components/home-header-loggedin";
import HomeFooterLoggedIn from  "../components/back-footer";

import "./editdetails.css";
    
function EditDetails(){

    // Initialize state for user details
    const [name, setName] = useState(''); // You can set the initial value if available
    const [dob, setDOB] = useState('');
    const [email, setEmail] = useState('');
    const [mainBranch, setMainBranch] = useState('');
    const [formError, setFormError] = useState(null);

    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSubmit = (e) => {
        e.preventDefault();


        // Check if any input field is empty
        if (!name || !dob || !email || !mainBranch) {
            setFormError('Please fill in all fields');
            return;
        }
        // Format the date to "dd-mm-yyyy"
        const formattedDOB = new Date(dob).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

      const userDetails = { name, dob:formattedDOB, email, mainBranch };
      navigate('/accountscreenupdated', { state: { userDetails } }); // Use navigate to move to the next page
    };

    return(
        <div>
            <HomeHeaderLoggedIn />


            
                <div className="edit-details-container">
                    <h2>Edit Details</h2>
                    <form onSubmit={handleSubmit}>
                        {formError && <p style={{ color: 'red' }}>{formError}</p>}
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>

                    <label>
                        Date of Birth:
                        <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} />
                    </label>

                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <label>
                        Main Branch:
                        <input type="text" value={mainBranch} onChange={(e) => setMainBranch(e.target.value)} />
                    </label>

                    <button className="button-editdetails" type="submit">Save Changes</button>
                    </form>

                    <p>To change your pin and payment information, please visit the <a href="/help-desk">Help Desk</a>.</p>
                </div>


            <HomeFooterLoggedIn />
        </div>
    )
}

export default EditDetails;
