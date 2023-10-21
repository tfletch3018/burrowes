import { Card1, Card2, Card3, Card4, Card5 } from '../Card/index';
import './style.css';

function BooksTable() {
    return (
<div id="bookContainer"className="container">
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
    <div className="col">
      <Card5 />
    </div>
  </div>
</div>
    )
}

export default BooksTable;