import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import book4 from '../images/book4.jpg';
import { Dropdown4 } from '../components/Dropdown';
import "../index.css";

function Book4() {
    return (
        <div>
            <Container>

                <Container>
                    <Row>
                        <div className="centered">
                            <Link to="/books">
                                <button id="backButton">Go Back</button>
                            </Link>
                        </div>
                    </Row>
                </Container>

                <Container className='descriptions'>

                    <Container>
                        <h1 className="text-center" id="bookTitle">Revolution and Rescue in Grenada</h1>
                        <h2 className="text-center">An Account of the U.S.-Carribean Invasion</h2>
                    </Container>

                    <Container className='flexing'>
                        <Col>
                            <img src={book4}
                                alt="Revolution and Rescue in Grenada"
                                id="placement"
                                className="responsive bookStyle"
                                width="364"
                                height="600" />
                        </Col>
                        <Col className='balance' id="bookText">
                            <p>
                                <i className="fa fa-quote-left"></i>
                                &nbsp;The Burrowes book is well written and provides a balanced if familiar assessment of events. He finds
                                fault in the East-West perspective of U.S. foreign policy in the Third World, but his call for greater
                                assertiveness by regional groupings to control their own affairs is wishful thinking, given the divisions
                                exhibited in this case. Choice Why were so many of America's staunch allies as well as many Congressmen and
                                opinion leaders opposed to the joint invasion of Grenada by the United States and the Caribbean neighbors of
                                that tiny island-nation? What led to the Grenadian government crisis of 1983, and--above all--was the threat
                                perceived by the Reagan administration real? These and related issues are explored in Reynold Burrowes' comprehensive
                                account of the Grenada affair, a chapter in modern diplomacy and warfare that remains an enigma to many observers.&nbsp;
                                <i className="fa fa-quote-right"></i>
                            </p>
                            <Container>
                                <Row>
                                    <div className="centered">
                                        <Dropdown4 />
                                    </div>
                                </Row>
                                <br />
                            </Container>
                        </Col>
                    </Container>

                </Container>
            </Container>
        </div>
    )
}
export default Book4;