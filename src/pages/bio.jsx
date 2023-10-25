import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import profile from '../images/profile.jpg';

function Bio() {

    return (

        <>
        <Container>
            <div className=''>
                <h1 className='text-center'
                    id="booksHeader">
                    About the Author
                </h1>
                <h2 className='text-center'>
                    <span className="text-center"
                        id="books">meet </span>
                    <span id="booksTitle">
                        Reynold Burrowes
                    </span>
                </h2>
            </div>
        </Container>
<Container id="authorBio">
<Row>
                        <Col><img id="profilePic" src={profile} alt="" /></Col>
                        <Col id="authorText">
                            <h1>Some Text Here</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida porttitor quam 
                                ac eleifend. Nam et libero id lacus mollis blandit eu vel urna. Nulla turpis sapien, malesuada 
                                a blandit nec, tincidunt nec quam. Praesent dictum ullamcorper augue vitae dapibus. Maecenas gravida 
                                quam nec iaculis mattis. Nam iaculis semper quam a iaculis. Aenean in tincidunt nisi. Phasellus a venenatis 
                                enim. Fusce semper tincidunt tristique. Phasellus cursus, magna in aliquam ornare, turpis turpis maximus nunc, 
                                at blandit velit dolor vel elit. Cras sed mi ipsum. Etiam lacus leo, euismod vel erat nec, eleifend sollicitudin arcu. 
                                Curabitur sit amet sollicitudin velit, sit amet pulvinar neque. Praesent congue mattis vestibulum. Nullam nisi neque, 
                            </p>
                        </Col>
                    </Row>

</Container>

        </>
    )
}

export default Bio;