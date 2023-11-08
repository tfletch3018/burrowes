import Container from 'react-bootstrap/Container';
import social from "../social";
import eventsBook from '../images/eventsBook.jpg';
import logo from '../images/logo.png';
import '../index.css';

function Events() {

    return (
        <>
            <Container>
                <div className=''>
                    <h1 className='text-center'
                        id="booksHeader">
                        Coming Soon...
                    </h1>
                    <h2 className='text-center'>
                        <span className="text-center"
                            id="books">from </span>
                        <span id="booksTitle">
                            Reynold Burrowes
                        </span>
                    </h2>
                </div>
            </Container>

            <Container id="eventsContainer">
                <h1 id="eventsTitle"
                    className='text-center'>
                    Missionary John Smith: Slavery and Rebellion in the West Indies
                </h1>
                <div className='centered'>
                    <img className="centered" id='eventsPic' src={eventsBook} alt="" />
                </div>
                <br />

                <div className='centered'>
                    {
                        social.intentletter &&
                        <a title="A Note to Publishers"
                            href={social.intentletter} download>
                            <button id='bookButton'>
                                A Note to Publishers
                            </button>
                        </a>
                    }
                </div>
                <br />
                <p id="eventsText">
                    <i className="fa fa-quote-left"></i>
                    &nbsp;My historical novel is titled: Missionary John Smith: Slavery and Rebellion in the West Indies. I chose to write an historical novel
                    because the format allows me to deal with the subject of slavery in a more straightforward way, just as Hilary Mantel used the life
                    of Cromwell to show the inner workings of Henry VIII's court.
                </p>
                <p id="eventText">
                    Slavery in the British West Indies was quite unique with differences that would intrigue and may even astonish my readers. Most
                    remarkable was the way Caribbean slaves were each given a plot of land to grow their own food and were free to sell their surplus.
                    Their money could be used to buy other items, and even in some cases to purchase their freedom-known as manumission-or that of family
                    members. The Demerara slaves in particular were given access to a government official, The Fiscal, who heard their complaints and was
                    empowered to mediate between the slave and his owner. Telling the story through the life of a young British missionary has allowed me
                    to show how the system worked from the inside. I show the difficulties he had in establishing his chapel, and the opposition he
                    encountered from many plantation owners who feared the church and its missionaries would push for the abolition of slavery, marking
                    the destruction of the local economy and the enormous wealth it drew on the backs of slaves. I also show how the slaves lived, worked,
                    were fed and punished, and how that differed in the case of British West Indian Slavery.
                </p>
                <p id="eventText">
                    In John Smith's sixth year in Demerara, now Guyana, a rebellion broke out on several plantations in the area. Despite having no
                    involvement whatsoever in the uprisings, Smith was arrested along with several of the insurrection leaders. He was tried by a military court,
                    found guilty, and sentenced to death. He died however at the age of 34, before his sentence could be carried out.                        </p>
                <p id="eventText">
                    I detail the rebellion, Smith's misgivings about it and, ultimately, his trial. While some of the rebels received punishment of 400-1000 lashes
                    others were executed and had their heads paraded on poles for all to see. Lastly, I present the reaction of British citizens, particularly the
                    abolitionists, to these events in one of their colonies.
                </p>
                <p id="eventText">
                    I hope that you will find my story stimulating, informative and compelling. I have been interested in John Smith's story ever since I was
                    a child..
                    <i className="fa fa-quote-right"></i> &nbsp;&nbsp;
                    <a id="Bio" href="#Bio">(See Author Bio)
                    </a>
                </p>
                <br />
                <br />
            </Container>

            <Container>
                <br />
                <br />
                <div className='centered'>
                <img className='centered' id='copyright' src={logo} alt='' />
                </div>
                <p id="copy" className="text-center">2023 © Copyright <strong id="name">{social.copyright} </strong>All Rights Reserved</p>
            </Container>
        </>
    )
}

export default Events;