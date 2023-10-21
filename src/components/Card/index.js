import Container from 'react-bootstrap/Container';
import './style.css';
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
                <button id="bookButton" className='center'>
                    Button
                </button>
            </div>
        </Container>
    )
}

const Card2 = () => {
    return (
        <Container>
            <div className='card'>
                <img id="book" src={book2} alt="Travels Near and Far" />
                <button id="bookButton" className='center'>
                    Button
                </button>
            </div>
        </Container>
    )
}

const Card3 = () => {
    return (
        <Container>
            <div className='card'>
                <img id="book" src={book3} alt="" />
                <button id="bookButton" className='center'>
                    Button
                </button>
            </div>
        </Container>
    )
}

const Card4 = () => {
    return (
        <Container>
            <div className='card'>
                <img id="book" src={book4} alt="" />
                <button id="bookButton" className='center'>
                    Button
                </button>
            </div>
        </Container>
    )
}

const Card5 = () => {
    return (
        <Container>
            <div className='card'>
                <img id="book" src={book5} alt="A Destiny to Mould" />
                <button id="bookButton" className='center'>
                    Button
                </button>
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