import Container from 'react-bootstrap/Container';
import '../index.css';
import { Link } from "react-router-dom";
import newbook from '../images/newbook.jpg';

function Home() {

    return (

        <>
            <Container>
                <div className=''>
                    <h1 id='booksHeader' className='text-center'>Discover</h1>
                </div>
            </Container>

            <Container>
                <div className='centered'>
                    <img id="homePic" src={newbook} alt="" />
                </div>
            </Container>

            <Container>
                <div className='centered'>
                    <Link to="/events">
                        <button id='bookButton'>
                            Discover
                        </button>
                    </Link>

                    <br />
                    
                </div>
            </Container>
        </>
    )
}

export default Home;