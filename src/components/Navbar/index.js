import { Outlet, Link } from 'react-router-dom';
import './style.css';

function Navbar() {

    return (

        <div>
            <nav className=''>

                <Link to="/">Reynold Burrowes</Link> {" "}
                <Link to="/books">Books</Link>
                <Link to="/bio">Bio</Link>
                <Link to="/events">Events</Link>
            </nav>
            <Outlet />

        </div>
    );
}

export default Navbar;