import Container from 'react-bootstrap/Container';
import './style.css';
import { Link } from "react-router-dom";
import book1 from './images/book1.jpg';
import book2 from './images/book2.jpg';
import book3 from './images/book3.jpg';
import book4 from './images/book4.jpg';
import book5 from './images/book5.jpg';


const Card1 = () => {
    return (
        <Container>
            <div className='card'>
                <img id="book" src={book1} alt="I Never Said Goodbye" />
                <Link to="/books/bookone">
                    <button id="bookButton" className='center'>
                        <i className='fas fa-book-open'></i>
                    </button>
                </Link>
            </div>
        </Container>
    )
}
const Card2 = () => {
    return (
        <Container>
            <div className='card'>
                <img id="book" src={book2} alt="Travels Near and Far" />
                <Link to="/books/booktwo">
                    <button id="bookButton" className='center'>
                        <i className='fas fa-book-open'></i>
                    </button>
                </Link>
            </div>
        </Container>
    )
}
const Card3 = () => {
    return (
        <Container>
            <div className='card'>
                <img id="book" src={book3} alt="The Wild Coast: An Account of Politics in Guyana" />
                <Link to="/books/bookthree">
                    <button id="bookButton" className='center'>
                        <i className='fas fa-book-open'></i>
                    </button>
                </Link>
            </div>
        </Container>
    )
}
const Card4 = () => {
    return (
        <Container>
            <div className='card'>
                <img id="book" src={book4} alt="Revolution and Rescue in Grenada An Account of the U.S.-Carribean Invasion" />
                <Link to="/books/bookfour">
                    <button id="bookButton" className='center'>
                        <i className='fas fa-book-open'></i>
                    </button>
                </Link>
            </div>
        </Container>
    )
}
const Card5 = () => {
    return (
        <Container>
            <div className='card'>
                <img id="book" src={book5} alt="A Destiny to Mould" />
                <Link to="/books/bookfive">
                    <button id="bookButton" className='center'>
                        <i className='fas fa-book-open'></i>
                    </button>
                </Link>
            </div>
        </Container>
    )
}
export {
    Card1,
    Card2,
    Card3,
    Card4,
    Card5
}