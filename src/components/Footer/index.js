import social from '../../social';
import './style.css';

function Footer() {

    return (

        // <nav id="footer" className="navbar fixed-bottom bg-body-tertiary">
        <nav id="footer" className="footNav">

        
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank" href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                </li>
                <li className="nav-item">
                    {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                </li>
                <li className="nav-item">
                    {social.twitter && <a title="Visit Twitter profile" rel="noopener noreferrer" target="_blank" href={social.twitter}><i className="fab fa-twitter"></i></a>}
                </li>
                <li className="nav-item">
                    {social.pinterest && <a title="Visit Pinterest profile" rel="noopener noreferrer" target="_blank" href={social.pinterest}><i className="fab fa-pinterest"></i></a>}
                </li>
            </ul>
        </nav>
    )
}

export default Footer;