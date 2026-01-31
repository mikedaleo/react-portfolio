import './Home.css' 
import './Home';
import pressStart from '../../assets/press_start_cropped.gif'
import { Link } from 'react-router-dom'
 
export default function Home() {
    return (
        <div className='home-div'>
           <h1 id='typewriter'></h1>
            <h2 id='typewriter2'></h2>
            <Link to={'/about'}><img src={pressStart} alt="Blinking press start text" className='press-start'/></Link>
        </div>
    )
}
