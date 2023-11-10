import Container from 'react-bootstrap/Container';
import '../index.css';
import { Link } from "react-router-dom";
import homeBook from '../images/homeBook.png';

function Home() {

    return (
        <>
            <Container>
                <div className=''>
                    <h1 id='pageHeaders' className='text-center'>Discover</h1>
                </div>
            </Container>
            
            <Container>
                <div className='centered'>
                    <img src={homeBook}
                        alt="Arm Reaching Out Holding The World"
                        id="placement"
                        className="responsive homePic"
                        width="640"
                        height="411" />
                </div>
            </Container>
            
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
                            id="writtenBy">by </span>
                        <span id="authorName">Reynold Burrowes</span>
                    </h2>
                </div>
            </Container>

            <Container>
                <div className='centered'>
                    <Link to="/events">
                        <button id='homeButton'>
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