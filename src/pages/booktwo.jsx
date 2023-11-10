import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import book2 from '../images/book2.jpg';
import { Dropdown2 } from '../components/Dropdown';
import "../index.css";

function Book2() {

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
                        <h1 className="text-center" id="bookTitle">Travels Near and Far</h1>
                    </Container>
                        <Container className='flexing'>
                        <Col>
                        <img src={book2} 
                        alt="Travels Near and Far"
                        id="placement" 
                        className="responsive bookStyle" 
                        width="400" 
                        height="600" />
                        </Col>
                        <Col id="bookText">
                            <p>
                                <i className="fa fa-quote-left"></i>
                                &nbsp;The four travel essays brought together in this volume represent the trips taken by one family living in the
                                huge metropolis of New York. Two of the trips were planned vacations, and two were impromptu weekend visits to get
                                away from the confinements of city life, and its reminder of the pressures work. In these essays, we get an insight
                                into their motivation for travel, its impact, and the reaction of one member of the family. Reynold Burrowes ably
                                chronicles these events with a wit and subtlety which draws his reader in. His wonderful prose gives his readers
                                a sense of presence, whether he takes them along with him to a coal mine or a field of flowers.&nbsp;
                                <i className="fa fa-quote-right"></i>
                            </p>
                            <Container>
                                <Row>
                                    <div className="centered">
                                        <Dropdown2 />
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
export default Book2;