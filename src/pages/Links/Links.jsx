import './Links.css';
import { Link } from 'react-router-dom';
import gitHubCat from '../../assets/github-mark-white.png';
import gitHubText from '../../assets/GitHub_Logo_White.png';

export default function Links() {
    return (
        <div className="main">
            <h2 className="michaels-links">MICHAEL'S LINKS</h2>
            <div className='contact-container'>
                <Link to ="https://docs.google.com/document/d/1uifDCeuOJIdil6uk4crpELUm7PHOEYl5fJKzP4jSK4w/edit?tab=t.0" className='contact'>🗎 Resume</Link>
                <Link to="https://github.com/mikedaleo" className='contact'>
                    <img src={gitHubCat} alt="GitHub cat logo"className='git-hub-cat'/><img src={gitHubText} alt="GitHub logo text" className='git-hub-text'/>
                </Link>
                <Link to="mailto:mikejdaleo@gmail.com" className='contact'>mikejdaleo@gmail.com</Link>
            </div>
        </div>
    )
}