import Container from 'react-bootstrap/Container';
import { Card1, Card2, Card3, Card4, Card5 } from '../Card/index';
import './style.css';

function BooksTable() {
  return (

    <Container>
    <div id="bookContainer" className="container">
      <div className="row">
        <div className="col">
          <Card1 />
        </div>
        <div className="col">
          <Card2 />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card3 />
        </div>
        <div className="col">
          <Card4 />
        </div>
      </div>

      <div className='container'>
        <div className="row">
          <h1 className='text-center'
            id="editedBy">
            Edited
          </h1>
          <h2 className='text-center'>
            <span className="text-center"
              id="writtenBy">by </span>
            <span id="authorName">Reynold Burrowes</span>
          </h2>
        </div>
        <div className="centered">
          <div className="">
            <Card5 />
          </div>
        </div>
      </div>
     </div>

     </Container>

  )
}

export default BooksTable;