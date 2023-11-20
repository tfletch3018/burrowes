import Container from 'react-bootstrap/Container';
import '../index.css';

function Contact() {

    return (
        <>
            <Container className='contactPage'>
                <div>
                    <h1 className='text-center'
                        id="pageHeaders">
                        Contact
                    </h1>
                </div>
            </Container>

            <Container id="contact">
                <div>
                    <h2>
                        <span className='centered'
                            id="authorName">
                            Reynold Burrowes
                        </span>
                    </h2>
                </div>

                <div className='centered'>
                    <p id='contactInfo'
                        className='centered'>
                        <i className='fas fa-envelope-open'>
                        </i>&nbsp;reynoldburrowes@hotmail.com
                    </p>
                </div>
                <div>
                    <p id='contactInfo'
                        className='centered'>
                        <i className='fas fa-phone-square-alt'>
                        </i>&nbsp;(203) 637-0892
                    </p>
                </div>
            </Container>
        </>
    )
}
export default Contact;