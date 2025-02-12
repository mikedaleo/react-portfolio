import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    const location = useLocation();
    
    // Hide all links if on the home ('/') page
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className={'linkDiv'}>
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
            <Link 
                to={'/contact'} 
                className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}
            >
                Contact
            </Link>
            <Link 
                to={'/resume'} 
                className={`nav-button ${location.pathname === '/resume' ? 'active' : ''}`}
            >
                Resume
            </Link>
        </div>
    );
};

export default Navigation;
