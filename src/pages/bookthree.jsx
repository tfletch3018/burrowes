import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import book3 from '../images/book3.jpg';
import { Dropdown3 } from '../components/Dropdown';
import "../index.css";

function Book3() {

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
                        <h1 className="text-center" id="bookTitle">The Wild Coast: An Account of Politics in Guyana</h1>
                    </Container>

                    {/* <Row id="author">
                        <Col><img id="bookPics" src={book3} alt="" /></Col> */}

<Container className='flexing'>
                        <Col>
                        <img src={book3} 
                        alt="I Never Said Goodbye"
                        id="placement" 
                        className="responsive bookStyle" 
                        width="400" 
                        height="600" />
                        </Col>


                        <Col id="bookText">

                            {/* <h1 id="bookTitle">The Wild Coast: An Account of Politics in Guyana</h1>
                            <br /> */}

                            <p>
                            <i className="fa fa-quote-left"></i>
                            &nbsp;An examination of a Third World nation's struggle for independence and national identity. Describes the 
                            emergence of the People's Progressive Party and traces the internal dynamics and political impact of the 
                            groups and individuals that comprise the party.&nbsp;
                            <i className="fa fa-quote-right"></i>
                            </p>

                            <Container>
                                <Row>
                                    <div className="centered">
                                        <Dropdown3 />
                                    </div>
                                </Row>
                            </Container>

                        </Col>
                    {/* </Row> */}
                </Container>
            </Container>
            </Container>
        </div>
    )
}

export default Book3;