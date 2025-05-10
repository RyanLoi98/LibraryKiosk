import React, { useState } from "react";
import './back-footer.css';
import { useNavigate} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function HomeFooter(){

    // implementing the back function via the useNavigate feature of the router.
    let navigate = useNavigate();

    const [modalShow, setModalShow] = React.useState(false);
    const [assistanceButtonText, setAssistanceButtonText] = useState('Request Assistance');
    const [isFlashing, setFlashing] = useState(false);

    const assistanceClicked = () => {
        setAssistanceButtonText(assistanceButtonText === 'Request Assistance' ? 'Assistance Coming' : 'Request Assistance');
        setModalShow(true);
        startFlashing();
    };

    const startFlashing = () => {
        const flashingInterval = setInterval (() => {
            setFlashing((prevFlashing) => !prevFlashing);
        }, 500);

        const stopFlashingTimeout = setTimeout(() => {
            clearInterval(flashingInterval);
            setFlashing(false); 
            setAssistanceButtonText('Request Assistance');
        }, 10000);
    }

    return(
        <div className="back-footer">
            <div className='back-footerButtons'>
                <button className="backbutton" onClick={() => navigate(-1)}>Back</button>
                <button className={`assistancebutton ${isFlashing ? "flash" : ""}`} onClick={assistanceClicked}>
                    {assistanceButtonText}
                </button>
                <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Assistance Requested!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        A librarian will be with you shortly.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setModalShow(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default HomeFooter;