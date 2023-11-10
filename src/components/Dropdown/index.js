import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './style.css';

const Dropdown1 = () => {
    return (
        <DropdownButton id='bookButton' title='Get the Book' className='getIt'>
            <Dropdown.Item href='https://a.co/d/1sblmSo'>Amazon</Dropdown.Item>
            <Dropdown.Item href='https://www.waterstones.com/book/i-never-said-goodbye/reynold-burrowes/9781910553404'>Waterstones</Dropdown.Item>
            <Dropdown.Item href='https://www.hansibpublications.com/I-NEVER-SAID-GOODBYE'>Hansib Publications</Dropdown.Item>
        </DropdownButton>
    );
}
const Dropdown2 = () => {
    return (
        <DropdownButton id='bookButton' title='Get the Book' className='getIt'>
            <Dropdown.Item href='https://a.co/d/eFCME5A'>Amazon</Dropdown.Item>
            <Dropdown.Item href='https://www.waterstones.com/book/travels-near-and-far/reynold-burrowes/9780595369225'>Waterstones</Dropdown.Item>
            <Dropdown.Item href='https://www.barnesandnoble.com/w/travels-near-and-far-reynold-burrowes/1007575225'>Barnes & Noble</Dropdown.Item>
        </DropdownButton>
    );
}
const Dropdown3 = () => {
    return (
        <DropdownButton id='bookButton' title='Get the Book' className='getIt'>
            <Dropdown.Item href='https://a.co/d/ijQnoRR'>Amazon</Dropdown.Item>
            <Dropdown.Item href='https://www.abebooks.co.uk/9780870730375/Wild-Coast-Account-Politics-Guyana-0870730371/plp'>AbeBooks</Dropdown.Item>
        </DropdownButton>
    );
}
const Dropdown4 = () => {
    return (
        <DropdownButton id='bookButton' title='Get the Book' className='getIt'>
            <Dropdown.Item href='https://a.co/d/iyNvwNp'>Amazon</Dropdown.Item>
            <Dropdown.Item href='https://www.barnesandnoble.com/w/revolution-and-rescue-in-grenada-reynold-a-burrowes/1130773203'>Barnes & Noble</Dropdown.Item>
            <Dropdown.Item href='https://www.abebooks.com/Revolution-Rescue-Grenada-Account-U.S.-Caribbean-Invasion/30288400846/bd'>AbeBooks</Dropdown.Item>
        </DropdownButton>
    );
}
const Dropdown5 = () => {
    return (
        <DropdownButton id='bookButton' title='Get the Book' className='getIt'>
            <Dropdown.Item href='https://www.abebooks.com/9780841900424/Destiny-Mould-Speeches-Prime-Minister-0841900426/plp'>AbeBooks</Dropdown.Item>
            <Dropdown.Item href='https://www.thriftbooks.com/w/a-destiny-to-mould-selected-discourses-by-the-prime-minister-of-guyana-forbes-burnham_forbes-burnham/3272201/#edition=7923604'>Thrift Books</Dropdown.Item>
        </DropdownButton>
    );
}
export {
    Dropdown1,
    Dropdown2,
    Dropdown3,
    Dropdown4,
    Dropdown5
}