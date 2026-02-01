import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    const location = useLocation();
    
    // Hide all links if on the home ('/') page
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className={'link-div'}>
                <Link 
                to={'/about'} 
                className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}
            >
                About Me
            </Link>
            <Link 
                to={'/portfolio'} 
                className={`nav-button ${location.pathname === '/portfolio' ? 'active' : ''}`}
            >
                Portfolio
            </Link>
            <div className="dropdown">
            <Link
                className={`nav-button ${location.pathname === '/links' ? 'active' : ''}`}
            >
                Links
            </Link>
            <div className="dropdown-menu">
                <a href="https://docs.google.com/document/d/1uifDCeuOJIdil6uk4crpELUm7PHOEYl5fJKzP4jSK4w/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className='link'>Resume</a>
                <a href="https://github.com/mikedaleo" target="_blank" rel="noopener noreferrer" className='link'>GitHub</a>
                <a href="https://www.linkedin.com/in/michaeljdaleo/" target="_blank" rel="noopener noreferrer" className='link'>LinkedIn</a>
                <a href="mailto:mikejdaleo@gmail.com" target="_blank" rel="noopener noreferrer" className='link'>Send E-mail</a>
            </div>
            </div>
        </div>
    );
};

export default Navigation;
