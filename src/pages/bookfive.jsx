import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import book5 from '../images/book5.jpg';
import { Dropdown5 } from '../components/Dropdown';
import "../index.css";

function Book5() {

    return (
        <div>
            <Container fluid style={{ marginTop: 20 }}>

                <Container>
                    <Row>
                        <div className="centered">
                            <Link to="/books">
                                <button id="backButton">Go Back</button>
                            </Link>
                        </div>
                    </Row>
                </Container>

                <Container>
                    <Row id="author">
                        <Col><img id="bookPics4" src={book5} alt="" /></Col>
                        <Col id="bookText5">
                            <h1 id="bookTitle">A Destiny To Mould</h1>
                            <br />
                            <p>
                                <i className="fa fa-quote-left"></i>
                                &nbsp;A Destiny to Mould is a selection of Mr. Burnham’s speeches and public statements from 1955 to 1969. Beginning with
                                his break away from Dr. Cheddi Jagan and the People’s Progressive party, the speeches cover Forbes Burnham’s years in
                                the opposition as leader of the People’s National Congress, his victory at the polls in 1964, his period as leader of a
                                coalition government, the attainment of independence in 1966, and finally, his leadership of the new Republic of Guyana into
                                the 1970’s. These speeches provide a contemporary comment on all the most significant points in the recent history of Guyana.
                                They also reveal Forbes Burnham’s own personality and philosophy: a radical, a leader and a statesman, idealist yet pragmatist,
                                and above all a champion of the small man.</p>
                            <p>
                                The Speeches have been arranged according to theme, rather than chronologically. Kit Nascimento and Reynold Burrowes - the editors
                                of the book - have contributed both a full introduction which narrates the sequence of Guyana’s history, and also where necessary,
                                short prefaces to the speeches placing them in context.&nbsp;
                                <i className="fa fa-quote-right"></i>
                            </p>

                            <Container>
                                <Row>
                                    <div className="centered">
                                        <Dropdown5 />
                                    </div>
                                </Row>
                                <br />
                            </Container>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Book5;