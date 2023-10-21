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
<Container id="author">
<Row>
                        <Col><img id="profilePic" src={profile} alt="" /></Col>
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
                                Quisque molestie dictum ex quis egestas. leo cursus. Curabitur et elit eget ligula scelerisque rhoncus.
                            </p>
                        </Col>
                    </Row>

</Container>

        </>
    )
}

export default Bio;