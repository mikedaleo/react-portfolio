import reactImage from '../../assets/react.svg';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <p>© CREATED BY MICHAEL DALEO</p>
                <p>Powered by React <img src={reactImage} alt="" className='react-image'/></p>
            </footer>
        </>
    )
}

