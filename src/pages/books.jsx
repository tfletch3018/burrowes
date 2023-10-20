import Container from 'react-bootstrap/Container';
import BooksTable from '../components/BookTable/index';
import '../index.css';

function Books() {

    return (

        <>
            <Container>
                <div className='booksContainer'>
                    <h1 className='text-center' id="booksHeader">Discover Books
                        <span id="books"> by</span>
                        <span id="booksTitle"> Reynold Burrowes</span>
                    </h1>
                </div>
            </Container>

            <Container>
                <BooksTable />
            </Container>
        </>
    )
}

export default Books;