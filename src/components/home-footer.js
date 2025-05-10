import React, { useState } from "react";
import "./home-footer.css";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function HomeFooter() {
    // rename useNavigate function to navigate
    let navigate = useNavigate();

    // make our navigate to viewMap page function
    const goMap = () => {
        let mapPath = '/viewMap';
        navigate(mapPath);
    }

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

  return (
    <div className="footer">
      <div className="footerButtons">
        <button className="mapbutton" onClick={goMap}>Map</button>
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
            <button onClick={() => setModalShow(false)}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default HomeFooter;
