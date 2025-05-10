import React from "react";
import "./viewMoreLists.css"
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";
import SearchBar from "../components/searchbar";
import ballad from "../assets/ballad.jpg";
import catchingFire from "../assets/catchingfire.jpg";
import divergent from "../assets/divergent.avif";
import endersGame from "../assets/endersgame.avif";
import hungerGames from "../assets/hunger.jpg";
import mockingjay from "../assets/mockingjay.jpg";
import mazeRunner from "../assets/mazerunner.avif";
import neuromancer from "../assets/neuromancer.avif";
import snowcrash from "../assets/snowcrash.avif"
import androids from "../assets/androids.jpg"
import leviathan from "../assets/leviathan.jpg"
import memory from "../assets/memory.jpg"
import count from "../assets/countzero.jpeg"

import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import HomeHeaderLoggedin from "../components/home-header-loggedin";

function viewMoreLists(){
    return(
        <div className="view-more-lists-page">
            <div className="viewMoreListsHomeHeaderLoggedIn"> <HomeHeaderLoggedin /></div>
            <SearchBar />
            <Container fluid className="view-more-lists-container">
                <h5 className="trend">Trending Lists</h5>
                <Row className="large-trend">
                    <Col className="large-covers">
                        <img
                            className="more-list-image-trend-large"
                            src={hungerGames}
                            alt="Hunger Games book Cover"
                        />
                        <img
                            className="more-list-image-trend-large"
                            src={divergent}
                            alt="Divergent book Cover"
                        />
                        <img
                            className="more-list-image-trend-large"
                            src={mazeRunner}
                            alt="Mazerunner book Cover"
                        />
                    </Col>
                    <Col className="large-trend-descrip">
                        <h4>The Ultimate Guide To YA</h4>
                        <h5>Created by: Steven_282</h5>
                        <p>
                            This list has got all the best YA novels out there. From the past to the present
                            you won't miss out on anything.
                        </p>
                    </Col>
                </Row>
                <Row className="trend=small">
                    <Col className="trend-small">
                        <Col className="trend-small-covers">
                            <img
                                className="more-list-image-trend-small"
                                src={androids}
                                alt="Androids Book Cover"
                            />
                            <img
                                className="more-list-image-trend-small"
                                src={mockingjay}
                                alt="Mockingjay Book Cover"
                            />
                            <img
                                className="more-list-image-trend-small"
                                src={leviathan}
                                alt="Leviathan Book Cover"
                            />
                        </Col>
                        <h6 className="trend-small-list-name">Dystopia is fun fun fun</h6>
                        <h7 className="trend-small-list-creator">By: Charlotte34278</h7>
                    </Col>

                    <Col className="trend-small-1">
                        <Col className="trend-small-covers">
                            <img
                                className="more-list-image-trend-small"
                                src={snowcrash}
                                alt="Snowcrash Book Cover"
                            />
                            <img
                                className="more-list-image-trend-small"
                                src={ballad}
                                alt="Ballad Book Cover"
                            />
                            <img
                                className="more-list-image-trend-small"
                                src={catchingFire}
                                alt="Catching Fire Book Cover"
                            />
                        </Col>
                        <h6 className="trend-small-list-name">YA Overflow come git itttt</h6>
                        <h7 className="trend-small-list-creator">By: Grant3452</h7>
                    </Col>

                    <Col className="trend-small-2">
                        <Col className="trend-small-covers">
                            <img
                                className="more-list-image-trend-small"
                                src={neuromancer}
                                alt="Neuromancer Book Cover"
                            />
                            <img
                                className="more-list-image-trend-small"
                                src={hungerGames}
                                alt="Hunger Games book Cover"
                            />
                            <img
                                className="more-list-image-trend-small"
                                src={memory}
                                alt="Memory Book Cover"
                            />
                        </Col>
                        <h6 className="trend-small-list-name">Did sOmEoNe Say YAAAAAAAAAAAAAAA</h6>
                        <h7 className="trend-small-list-creator">By: Connor11242</h7>
                    </Col>

                </Row>

                <h5 className="recent">Recent Lists</h5>

                <Row className="recent-1">
                    <Col md={2}>
                        <a href="/stevenList">
                            <img
                                className="more-list-image-recent"
                                src={hungerGames}
                                alt="Hunger Games book Cover"
                            />
                        </a>
                    </Col>
                    <Col md={10}>
                        <a href="/stevenList">
                            <h6 className="trend-small-list-name">Steven YA Books</h6>
                        </a>
                        <h7 className="trend-small-list-creator">By: Steven_282</h7>
                        <p className="trend-small-list-descrip">
                            These YA novels are sure to keep you on your seat all day long.
                            After all there is nothing like a good dystopian novel.
                            Whether the characters need to escape death like The Hunger Games
                            or Mazerunner or you're looking for a good cyberpunk novel with
                            cybernetic limbs and terrible living conditions, my list has everything for you.
                        </p>
                    </Col>
                </Row>

                <Row className="recent-2 mt-3">
                    <Col md={2}>

                        <img
                            className="more-list-image-recent"
                            src={endersGame}
                            alt="Enders Game Book Cover"
                        />

                    </Col>
                    <Col md={10}>
                        <h6 className="trend-small-list-name">I got that dystopia for you guys</h6>
                        <h7 className="trend-small-list-creator">By: Jane_282</h7>
                        <p className="trend-small-list-descrip">
                            All the YA in the world you might want right here and right now. LETS GOOOOOOOO!!!!!!
                        </p>
                    </Col>
                </Row>

                <Row className="recent-3 mt-3">
                    <Col md={2}>

                        <img
                            className="more-list-image-recent"
                            src={count}
                            alt="Count Zero Book Cover"
                        />

                    </Col>
                    <Col md={10}>
                        <h6 className="trend-small-list-name">Sci-fi</h6>
                        <h7 className="trend-small-list-creator">By: Sci-fi Freak</h7>
                        <p className="trend-small-list-descrip">
                            Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi
                            Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi
                            Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi
                            Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi
                            Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi
                            Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi
                            Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi
                            Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi
                            Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi Sci-fi
                        </p>
                    </Col>

                </Row>
                <Row className="more-list-more-row">
                    <Button className="more-list-more-but"> View More Lists </Button>
                </Row>
            </Container>
            <BackFooter />
        </div>
    )
}

export default viewMoreLists;