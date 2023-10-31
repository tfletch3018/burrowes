import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import book1 from '../images/book1.jpg';
import { Dropdown1 } from '../components/Dropdown';
import "../index.css";

function Book1() {

    return (
        <div>
            <Container fluid>

                <Container>
                    <Row>
                        <div className="centered">
                            <Link to="/books">
                                <button id="backButton">Go Back</button>
                            </Link>
                        </div>
                    </Row>
                </Container>

                <Container className='bigBookPic'>
                    <Row id="author">
                        <Col><img id="bookPics" src={book1} alt="" /></Col>
                        <Col id="bookText">
                            <h1 id="bookTitle">I Never Said Goodbye</h1>
                            <br />
                            <p>
                                <i className="fa fa-quote-left"></i>
                                &nbsp;This is the story of one man's return to Guyana, the land of his youth. His return was 35 years in the making,
                                back to the country he never expected to leave. Reynold Burrowes travelled to Guyana with others who,
                                like him, were Guyanese expats hoping to reconnect with family members and old friends. The visit exceeded all
                                expectations and was both eye-opening and overwhelming. This memoir tells a familiar tale of those who dream of
                                returning 'home' someday, but whose nostalgic voyage of discovery isn't always what they hoped it would be.&nbsp;
                                <i className="fa fa-quote-right"></i>
                            </p>

                            <Container>
                                <Row>
                                    <div className="centered">
                                        <Dropdown1 />
                                    </div>
                                </Row>
                            </Container>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Book1;