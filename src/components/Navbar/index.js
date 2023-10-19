import { Outlet, Link } from 'react-router-dom';
import './style.css';

function Navbar() {

    return (

        <div>
            <nav className='myNav'>

                <Link to="/" className="navHeader">Reynold Burrowes</Link> {" "}
                <Link to="/events" className="navLinks">Events</Link>
                <Link to="/bio" className="navLinks">Bio</Link>
                <Link to="/books" className="navLinks">Books</Link>

            </nav>

            <Outlet />

        </div>
    );
}

export default Navbar;