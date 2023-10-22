import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import book4 from '../images/book4.jpg';
import "../index.css";

function Book4() {

    return (
        <div>
            <Container fluid style={{ marginTop: 50 }}>

                <Container>
                    <Row>
                        <h1 className="text-center">Project One</h1>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <div className="center">
                            <Link to="/books">
                                <button id="">Go Back</button>
                            </Link>
                        </div>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col><img id="" src={book4} alt="" /></Col>
                        <Col>
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
                                lacinia arcu ac, porta ex. Curabitur arcu neque, mattis ultricies orci id, aliquam ultrices enim. 
                                Aliquam vel feugiat tellus, ut consectetur lectus. Vestibulum commodo vulputate nisi quis pretium. 
                                Nullam posuere dui id urna consequat, at lobortis elit finibus. Morbi quis elit ac lacus aliquam pretium. 
                                Sed dolor metus, rhoncus in risus ultrices, dignissim maximus eros. Phasellus at laoreet sem, nec suscipit lectus. 
                                Quisque molestie dictum ex quis egestas. Integer feugiat blandit sem, id cursus libero congue a.
                                Phasellus venenatis feugiat mauris nec mattis. Proin interdum suscipit lectus, in accumsan lectus vulputate ac. 
                                Sed lacinia nisi in odio consectetur, non tincidunt tortor commodo. Cras lorem libero, bibendum sed varius in, 
                                tincidunt sit amet mauris. Aliquam ultricies felis in nunc mollis sagittis. Fusce non posuere diam. Etiam finibus 
                                libero id mauris dapibus, at malesuada leo cursus. Curabitur et elit eget ligula scelerisque rhoncus.
                            </p>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </div>
    )
}

export default Book4;