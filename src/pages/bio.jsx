import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import profile from '../images/profile.jpg';

function Bio() {

    return (

        <>
            <Container>
                <div id='Bio'>
                    <h1 className='text-center'
                        id="pageHeaders">
                        About the Author
                    </h1>
                    <h2 className='text-center'>
                        <span className="text-center"
                            id="writtenBy">meet </span>
                        <span id="authorName">
                            Reynold Burrowes
                        </span>
                    </h2>
                </div>
            </Container>


{/* <Container> */}
            <Container className='authorFlex' id="authorBio">
                {/* <Row> */}
                {/* <Col><img id="profilePic" src={profile} alt="" /></Col> */}
                {/* <Col id=''> */}
                <div>
                    <img src={profile}
                        alt="Reynold Burrowes"
                        id="authorPlacement"
                        className="responsive profilePic"
                        width="600"
                        height="600" />
                </div>
                {/* </Col> */}
                <Col id="authorText">
                <div>
                    <p>
                        <i className="fa fa-quote-left"></i>
                        &nbsp;My journey as a writer began soon after I got my first job. I went to work in the office of the Prime Minister.
                        There I discovered a number of his speeches and, along with a colleague, I edited and submitted them to a
                        London Publisher. They were published by Longman Green in 1970. In 1971, I came to the USA on a Fulbright scholarship
                        to study International Relations at the Fletcher School of Law and Diplomacy, Tufts University, Medford Massachusetts.
                        I completed my MA, NALD, and PhD, there interrupted by a return home to fulfill the terms of my scholarship.
                    </p>
                    <p>
                        In 1980 I joined JP Morgan on Wall street and began my career as a banker in the USA. Over the years I worked for Dean Witter,
                        Morgan Stanley and Calyon Financial. During this time, I maintained an interest in Caribbean politics and culture while working
                        in banking. I have published two academic books on politics and, more recently, two books of travel essays.&nbsp;
                        <i className="fa fa-quote-right"></i>
                    </p>
                </div>
                </Col>
                {/* </Row> */}
            </Container>
            {/* </Container> */}
        </>
    )
}

export default Bio;