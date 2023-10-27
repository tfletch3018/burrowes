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

            {/* <Container>
                <div className=''>
                    <h1 id='booksHeader' className='text-center'>Discover</h1>
                </div>
            </Container> */}

            <Container>
                <div className='centered'>
                    <h1 className='homeSubHeader'>Missionary John Smith: Slavery and Rebellion in the West Indies
                    </h1>
                    <br />
                </div>
            </Container>
            <Container>
                <div>
                    <h2 className='text-center'>
                    <span className="text-center"
                        id="books">by </span>
                    <span id="booksTitle">Reynold Burrowes</span>
                </h2>
                </div>
            </Container>

            <Container>
                <div className='centered'>
                    <Link to="/events">
                        <button id='bookButton'
                            className='homeButton'>
                            More...
                        </button>
                    </Link>
                    <br />
                </div>
            </Container>
        </>
    )
}

export default Home;