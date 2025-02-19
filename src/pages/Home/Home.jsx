import './Home.css' 
import './Home';
import pressStart from '../../assets/press_start_cropped.gif'
import { Link } from 'react-router-dom'
 
export default function Home() {
    return (
        <div className='home-div'>
           <h1>MICHAEL DALEO</h1>
            <h2>&lt;&gt;WEB DEVELOPER&lt;/&gt;</h2>
            <Link to={'/about'}><img src={pressStart} alt="" /></Link>
        </div>
    )
}
