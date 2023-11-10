import Container from 'react-bootstrap/Container';
import BooksTable from '../components/BookTable/index';
import '../index.css';

function Books() {

    return (

        <>
            <Container>
                <div className='booksContainer'>
                    <h1 className='text-center' 
                    id="pageHeaders">
                        Discover More Books
                    </h1>
                    <h2 className='text-center'>
                    <span className="text-center"
                        id="writtenBy">by </span>
                    <span id="authorName">Reynold Burrowes</span>
                </h2>
                </div>
            </Container>

            <Container>
                <BooksTable />
            </Container>
        </>
    )
}

export default Books;