import React from "react";

// Import components needed for page
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";
import {Col, Nav, Row, Tab} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import floor images
import level0 from "../assets/level0.png"
import level1 from "../assets/level1.png"
import level1m from "../assets/level1m.png"
import level2 from "../assets/level2.png"
import level3 from "../assets/level3nopin.png"
import level4 from "../assets/level4.png"

// import css file
import ".//viewMap.css";
import HomeHeaderLoggedin from "../components/home-header-loggedin";

function viewMap() {
  return (
    <div className="map-pages">
        <div className="viewMapHomeHeaderLoggedIn"> <HomeHeaderLoggedin /></div>

        <Tab.Container id="floor-map-indicator" defaultActiveKey="L0">
            <Row>
                <Col sm={1} className="floor-nav">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="L0" className="floor-select">L0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="L1" className="floor-select">L1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="L1M" className="floor-select">L1M</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="L2" className="floor-select">L2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="L3" className="floor-select">L3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="L4" className="floor-select">L4</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={10}>
                    <Tab.Content>
                        <Tab.Pane eventKey="L0">
                            <img src={level0} alt="L0" className="floor-image"/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="L1">
                            <img src={level1} alt="L1" className="floor-image"/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="L1M">
                            <img src={level1m} alt="L1M" className="floor-image"/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="L2">
                            <img src={level2} alt="L2" className="floor-image"/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="L3">
                            <img src={level3} alt="L3" className="floor-image"/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="L4">
                            <img src={level4} alt="L4" className="floor-image"/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

      <BackFooter />
    </div>
  );
}

// export your function, remember to keep name consistent
export default viewMap;
