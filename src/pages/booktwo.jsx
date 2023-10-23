import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import book2 from '../images/book2.jpg';
import "../index.css";

function Book2() {

    return (
        <div>
            <Container fluid style={{ marginTop: 20 }}>

                <Container>
                    <Row>
                        <div className="centered">
                            <Link to="/books">
                                <button id="bookButton">Go Back</button>
                            </Link>
                        </div>
                    </Row>
                </Container>

                <Container>
                    <Row id="author">
                        <Col><img id="bookPics" src={book2} alt="" /></Col>
                        <Col id="bookText">
                            <h1>Some Text Here</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida porttitor quam
                                ac eleifend. Nam et libero id lacus mollis blandit eu vel urna. Nulla turpis sapien, malesuada
                                a blandit nec, tincidunt nec quam. Praesent dictum ullamcorper augue vitae dapibus. Maecenas gravida
                                quam nec iaculis mattis. Nam iaculis semper quam a iaculis. Aenean in tincidunt nisi. Phasellus a venenatis
                                enim. Fusce semper tincidunt tristique. Phasellus cursus, magna in aliquam ornare, turpis turpis maximus nunc,
                                at blandit velit dolor vel elit. Cras sed mi ipsum. Etiam lacus leo, euismod vel erat nec, eleifend sollicitudin arcu.
                                Curabitur sit amet sollicitudin velit, sit amet pulvinar neque. Praesent congue mattis vestibulum. Nullam nisi neque,
                                bibendum a aliquam vitae, eleifend egestas tellus. Sed vitae libero massa. Nunc nec ante efficitur,
                                lacinia arcu ac, porta ex. Curabitur et elit eget ligula scelerisque rhoncus.
                            </p>                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div className="centered">
                            <Link to="/books">
                                <button id="bookButton" className='getIt'>Get the Book! <i className='fas fa-credit-card'></i></button>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Book2;