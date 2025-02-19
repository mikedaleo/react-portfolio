import './Contact.css';
import { Link } from 'react-router-dom';
import gitHubCat from '../../assets/github-mark-white.png';
import gitHubText from '../../assets/GitHub_Logo_White.png';

export default function Contact() {
    return (
        <>
            <h2 className="page-title">CONTACT MICHAEL</h2>
            <div className='contact-container'>
            <Link to="https://github.com/mikedaleo" className='contact'>
            <img src={gitHubCat} alt="" height="100" /><img src={gitHubText} alt="" height="100"/>
            </Link>
            <Link to="mailto:mikejdaleo@gmail.com" className='contact'>📧 mikejdaleo@gmail.com</Link>
            </div>
        </>
    )
}