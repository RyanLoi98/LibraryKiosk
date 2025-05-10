import React from "react";
import "./stevenRecList.css"
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";
import SearchBar from "../components/searchbar";
import {Col, Container, Row} from "react-bootstrap";

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
import HomeHeaderLoggedin from "../components/home-header-loggedin";

function stevenRecList(){

    const allImages = [
        {path: ballad, sum: 'The Ballad of Song Birds and Snakes' },
        {path: catchingFire, sum: 'Catching Fire' },
        {path: divergent, sum: 'Divergent' },
        {path: endersGame, sum: 'Ender\'s Game' },
        {path: hungerGames, sum: 'The Hunger Games', link:"./information" },
        {path: mockingjay, sum: 'Mockingjay' },
        {path: mazeRunner, sum: 'The Maze Runner' },
        {path: neuromancer, sum: 'Neuromancer' },
        {path: snowcrash, sum: 'Snowcrash' },
        {path: androids , sum: 'Androids' },
        {path: leviathan, sum: 'Leviathan Wakes' },
        {path: memory, sum: 'Memory\'s Legion' }
    ]

    return(
        <div className="steven-rec-list-page">
            <div className="stevenListHomeHeaderLoggedIn"> <HomeHeaderLoggedin /></div>
            <SearchBar />
            <Container fluid className="steven-rec-list-container">
                <Row className="steven-rec-list-header">
                    <h1>Steven YA Books </h1>
                    <p className="list-summary">
                        These YA novels are sure to keep you on your seat all day long.
                        After all there is nothing like a good dystopian novel.
                        Whether the characters need to escape death like The Hunger Games or Mazerunner or
                        you're looking for a good cyberpunk novel with cybernetic limbs and
                        terrible living conditions, my list has everything for you.
                    </p>
                </Row>
                <Row>
                    <p className="steven-rec-total">
                        List Total: 12/50
                    </p>
                </Row>
                <Row>
                {allImages.map((data) => (
                    // Medium screen shows 4 books per line, small 2, extra-small 1
                    <Col md={2} sm={6} xs={12}>
                        <div className="steven-rec-books">
                            {data.link ? (
                                <a href={data.link}>
                                    <img src={data.path} alt={data.title} className="img-fluid" />
                                </a>
                            ) : (
                                <img src={data.path} alt={data.title} className="img-fluid" />
                            )}
                            <p className="steven-rec-books-sum">{data.sum}</p>
                        </div>
                    </Col>
                ))}
                </Row>
            </Container>
            <BackFooter />
        </div>
    )
}


export default stevenRecList;