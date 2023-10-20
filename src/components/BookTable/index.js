import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function BooksTable() {
    return (

        <Container className="grid-container">
            <Row>
                <Col size='sm-4'>
                    <div class="text-center">1</div>
                </Col>
                <Col size='sm-4'>
                    <div class="text-center">2</div>
                </Col>
                <Col size='sm-4'>
                    <div class="text-center">3</div>
                </Col>
            </Row>
            <br />
            <Row class="">
                <Col size='sm-6'>
                    <div class="text-center">4</div>
                </Col>
                <Col size='sm-6'>
                    <div class="text-center">5</div>
                </Col>
            </Row>
        </Container>
    )
}

export default BooksTable;