import React from "react";
import "./moreRecommendations.css"
import HomeHeader from "../components/home-header";
import BackFooter from "../components/back-footer";
import SearchBar from "../components/searchbar";

import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import ballad from "../assets/ballad.jpg";
import catchingFire from "../assets/catchingfire.jpg";
import divergent from "../assets/divergent.avif";
import endersGame from "../assets/endersgame.avif";
import hungerGames from "../assets/hunger.jpg";
import mockingjay from "../assets/mockingjay.jpg";
import mazeRunner from "../assets/mazerunner.avif";
import neuromancer from "../assets/neuromancer.avif";
import Button from "react-bootstrap/Button";
import HomeHeaderLoggedin from "../components/home-header-loggedin";

function moreRecommendations(){
    return(
        <div className="more-recommendations-page">
            <div className="moreRecommendationsHomeHeaderLoggedIn"> <HomeHeaderLoggedin /></div>
            <SearchBar />
            <Container fluid className="more-recommendations-container">
                <Row className="more-recommendations-title">
                    <h1> If You Liked The Hunger Games </h1>
                </Row>

                <Row className="more-recommendations-body">
                    <Col className="more-recommendations-book" sm={2}>
                        <img
                            className="main-book"
                            src={hungerGames}
                            alt="Hunger Games book Cover"
                        />

                    </Col>
                    <Col className="more-recommendations-recs" sm={10}>
                        <Row className="rec-book">
                            <Col className="rec-book-image" sm={3}>
                                <img
                                    className="more-recommendations-image"
                                    src={catchingFire}
                                    alt="Catching Fire book Cover"
                                />
                            </Col>
                            <Col className="rec-book-information" sm ={7}>
                                <Row>
                                    <h3>Catching Fire</h3>
                                    <p>
                                        The second book in Suzanne Collins's phenomenal and worldwide bestselling
                                        Hunger Games trilogy is now available in trade paperback.
                                        Against all odds, Katniss Everdeen has won the annual Hunger Games with fellow
                                        district tribute Peeta Mellark. Katniss and Peeta should be happy.
                                        After all, they have just earned for themselves and their families a life
                                        of safety and plenty. But it was a victory won by defiance of the Capitol and their
                                        harsh rules, and now there are rumors of rebellion in the districts.
                                        Katniss and Peeta, to their horror, are the faces of that rebellion.
                                        The Capitol is angry. The Capitol wants revenge.
                                    </p>
                                </Row>
                                <Row>
                                    <p className="user-Rec">
                                        Recommended by Ryan123, Alan987
                                    </p>
                                </Row>
                                <Row className="more-rec-but-row">
                                    <Col className="more-rec-but-col">
                                        <Button className="more-rec-placehold-button"> Place on Hold</Button>
                                    </Col>
                                    <Col className={"more-rec-but-col"}>
                                        <Button className="more-rec-viewmap-button"> View on Map </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="rec-book">
                            <Col className="rec-book-image" sm={3}>
                                <img
                                    className="more-recommendations-image"
                                    src={mockingjay}
                                    alt="Mockingjay book Cover"
                                />
                            </Col>
                            <Col className="rec-book-information" sm ={7}>
                                <Row>
                                    <h3>Mockingjay</h3>
                                    <p>

                                        The third book in Suzanne Collins's phenomenal and worldwide
                                        bestselling Hunger Games trilogy.
                                        The final book in Suzanne Collins's worldwide bestselling
                                        Hunger Games trilogy is now available in paperback."My name is Katniss Everdeen.
                                        Why am I not dead? I should be dead."Katniss Everdeen, girl on fire,
                                        has survived, even though her home has been destroyed. There are rebels. There
                                        are new leaders. A revolution is unfolding.District 13 has come out of the shadows
                                        and is plotting to overthrow the Capitol. Though she's long been a part of
                                        the revolution, Katniss hasn't known it. Now it seems that everyone has had
                                        a hand in the carefully laid plans but her.The success of the rebellion
                                        hinges on Katniss's willingness to be a pawn, to accept responsibility
                                        for countless lives, and to change the course of the future of Panem.
                                        To do this, she must put aside her feelings of anger and distrust.
                                        She must become the rebels' Mockingjay - no matter what the cost.
                                    </p>
                                </Row>

                                <Row>
                                    <p className="user-Rec">
                                        Recommended by Michelle567
                                    </p>
                                </Row>

                                <Row className="more-rec-but-row">
                                    <Col className="more-rec-but-col">
                                        <Button className="more-rec-placehold-button"> Place on Hold</Button>
                                    </Col>
                                    <Col className={"more-rec-but-col"}>
                                        <Button className="more-rec-viewmap-button"> View on Map </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="rec-book">
                            <Col className="rec-book-image" sm={3}>
                                <img
                                    className="more-recommendations-image"
                                    src={ballad}
                                    alt="Ballad book Cover"
                                />
                            </Col>
                            <Col className="rec-book-information" sm ={7}>
                                <Row>
                                    <h3>The Ballad of Songbirds and Snakes</h3>
                                    <p>
                                        Ambition will fuel him.
                                        Competition will drive him.
                                        But power has its price.
                                        It is the morning of the reaping that will kick off
                                        the tenth annual Hunger Games. In the Capitol,
                                        eighteen-year-old Coriolanus Snow is preparing
                                        for his one shot at glory as a mentor in the Games.
                                        The once-mighty house of Snow has fallen on hard times, its fate hanging
                                        on the slender chance that Coriolanus will be able to outcharm, outwit,
                                        and outmaneuver his fellow students to mentor the winning tribute.
                                        The odds are against him. He's been given the humiliating assignment
                                        of mentoring the female tribute from District 12,
                                        the lowest of the low. Their fates are now completely
                                        intertwined -- every choice Coriolanus makes could lead
                                        to favor or failure, triumph or ruin. Inside the arena,
                                        it will be a fight to the death. Outside the arena,
                                        Coriolanus starts to feel for his doomed tribute...
                                        and must weigh his need to follow the rules against
                                        his desire to survive no matter what it takes.
                                    </p>
                                </Row>
                                <Row>
                                    <p className="user-Rec">
                                        Recommended by Jaron30847, Steven23097
                                    </p>
                                </Row>
                                <Row className="more-rec-but-row">
                                    <Col className="more-rec-but-col">
                                        <Button className="more-rec-placehold-button"> Place on Hold</Button>
                                    </Col>
                                    <Col className={"more-rec-but-col"}>
                                        <Button className="more-rec-viewmap-button"> View on Map </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className="rec-book">
                            <Col className="rec-book-image" sm={3}>
                                <img
                                    className="more-recommendations-image"
                                    src={mazeRunner}
                                    alt="Mazerunner book Cover"
                                />
                            </Col>
                            <Col className="rec-book-information" sm ={7}>
                                <Row>
                                    <h3>The Mazerunner</h3>
                                    <p>
                                        Book one in the blockbuster Maze Runner series that spawned
                                        a movie franchise and ushered in a worldwide phenomenon!
                                        And don’t miss The Fever Code, the highly-anticipated series
                                        conclusion that finally reveals the story of how the maze was built!
                                        When Thomas wakes up in the lift, the only thing he can remember is his name.
                                        He’s surrounded by strangers—boys whose memories are also gone.
                                        Outside the towering stone walls that surround them is a limitless,
                                        ever-changing maze. It’s the only way out—and no one’s ever made it through alive.
                                        Then a girl arrives. The first girl ever. And the message she
                                        delivers is terrifying: Remember. Survive. Run.
                                    </p>
                                </Row>
                                <Row>
                                    <p className="user-Rec">
                                        Recommended by Rohan223094
                                    </p>
                                </Row>
                                <Row className="more-rec-but-row">
                                    <Col className="more-rec-but-col">
                                        <Button className="more-rec-placehold-button"> Place on Hold</Button>
                                    </Col>
                                    <Col className={"more-rec-but-col"}>
                                        <Button className="more-rec-viewmap-button"> View on Map </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="rec-book">
                            <Col className="rec-book-image" sm={3}>
                                <img
                                    className="more-recommendations-image"
                                    src={divergent}
                                    alt="Divergent book Cover"
                                />
                            </Col>
                            <Col className="rec-book-information" sm ={7}>
                                <Row>
                                    <h3>Divergent</h3>
                                    <p>
                                        This first book in Veronica Roth's #1 New York Times
                                        bestselling Divergent series of books is the novel the inspired
                                        the major motion picture starring Shailene Woodley, Theo James,
                                        and Kate Winslet. This dystopian series set in a futuristic Chicago
                                        has captured the hearts of millions of teen and adult readers.
                                        Perfect for fans of the Hunger Games and Maze Runner series,
                                        Divergent and its sequels, Insurgent and Allegiant,
                                        are the gripping story of a dystopian world transformed by courage,
                                        self-sacrifice, and love. Fans of the Divergent movie will find
                                        the book packed with just as much emotional depth and exhilarating
                                        action as the film, all told in beautiful, rich language.
                                        One choice can transform you. Beatrice Prior's
                                        society is divided into five factions--Candor (the honest),
                                        Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful),
                                        and Erudite (the intelligent). Beatrice must choose between staying with her
                                        Abnegation family and transferring factions.
                                        Her choice will shock her community and herself.
                                        But the newly christened Tris also has a secret, one she's determined to
                                        keep hidden, because in this world, what makes you different makes you dangerous.
                                    </p>
                                </Row>
                                <Row>
                                    <p className="user-Rec">
                                        Recommended by Alice029
                                    </p>
                                </Row>
                                <Row className="more-rec-but-row">
                                    <Col className="more-rec-but-col">
                                        <Button className="more-rec-placehold-button"> Place on Hold</Button>
                                    </Col>
                                    <Col className={"more-rec-but-col"}>
                                        <Button className="more-rec-viewmap-button"> View on Map </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="rec-book">
                            <Col className="rec-book-image" sm={3}>
                                <img
                                    className="more-recommendations-image"
                                    src={endersGame}
                                    alt="Enders Game book Cover"
                                />
                            </Col>
                            <Col className="rec-book-information" sm ={7}>
                                <Row>
                                    <h3>Ender's Game</h3>
                                    <p>
                                        In order to develop a secure defense against
                                        a hostile alien race's next attack, government agencies breed child geniuses
                                        and train them as soldiers. A brilliant young boy, Andrew "Ender"
                                        Wiggin lives with his kind but distant parents, his sadistic brother Peter,
                                        and the person he loves more than anyone else, his sister Valentine. Peter and
                                        Valentine were candidates for the soldier-training program but didn't make
                                        cut--young Ender is the Wiggin drafted to the orbiting Battle School for
                                        rigorous military training.
                                        Ender's skills make him a leader in school
                                        and respected in the Battle Room, where children play
                                        at mock battles in zero gravity. Yet growing up in an artificial
                                        community of young soldiers Ender suffers greatly from isolation,
                                        rivalry from his peers, pressure from the adult teachers, and an
                                        unsettling fear of the alien invaders. His psychological battles include
                                        loneliness, fear that he is becoming like the cruel brother he remembers,
                                        and fanning the flames of devotion to his beloved sister.
                                        Is Ender the general Earth needs? But Ender is not the only
                                        result of the genetic experiments. The war with the Buggers has
                                        been raging for a hundred years, and the quest for the perfect
                                        general has been underway for almost as long. Ender's two older siblings
                                        are every bit as unusual as he is, but in very different ways. Between the
                                        three of them lie the abilities to remake a world. If, that is, the world survives.
                                    </p>
                                </Row>
                                <Row>
                                    <p className="user-Rec">
                                        Recommended by ChristyCCCCC
                                    </p>
                                </Row>
                                <Row className="more-rec-but-row">
                                    <Col className="more-rec-but-col">
                                        <Button className="more-rec-placehold-button"> Place on Hold</Button>
                                    </Col>
                                    <Col className={"more-rec-but-col"}>
                                        <Button className="more-rec-viewmap-button"> View on Map </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="rec-book">
                            <Col className="rec-book-image" sm={3}>
                                <img
                                    className="more-recommendations-image"
                                    src={neuromancer}
                                    alt="Neuromancer book Cover"
                                />
                            </Col>
                            <Col className="rec-book-information" sm ={7}>
                                <Row>
                                    <h3>Neuromancer</h3>
                                    <p>
                                        Before the Internet was commonplace, William Gibson
                                        showed us the Matrix--a world within the world, the representation
                                        of every byte of data in cyberspace. Henry Dorsett Case was
                                        the sharpest data-thief in the Matrix, until an ex-employer crippled
                                        his nervous system. Now a new employer has recruited him for a last-chance
                                        run against an unthinkably powerful artificial intelligence. With a mirror-eyed
                                        girl street-samurai riding shotgun, he's ready for the silicon-quick, bleakly
                                        prophetic adventure that upped the ante on an entire genre of fiction.
                                    </p>
                                </Row>
                                <Row>
                                    <p className="user-Rec">
                                        Recommended by BobTheBuilder
                                    </p>
                                </Row>
                                <Row className="more-rec-but-row">
                                    <Col className="more-rec-but-col">
                                        <Button className="more-rec-placehold-button"> Place on Hold</Button>
                                    </Col>
                                    <Col className={"more-rec-but-col"}>
                                        <Button className="more-rec-viewmap-button"> View on Map </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="more-rec-view-more-row">
                    <Button className="view-more-rec-button"> View more recommendations </Button>
                </Row>

            </Container>
            <BackFooter />
        </div>
    )
}

export default moreRecommendations;