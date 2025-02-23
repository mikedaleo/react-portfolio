import { Link } from 'react-router-dom'
import wordPlay from '../../assets/WordPlay.jpg'
import minigameMasters from '../../assets/minigame_masters_logo.png'
import weatherDashboard from '../../assets/weatherDashboard.png'
import techBlog from '../../assets/techBlog.png'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <>
            <h2 className='michaels-websites'>MICHAEL'S WEBSITES</h2>
            <div className='page-container'>
                <Link to='https://jlvstrasse.github.io/word_play/' className='page-link'>
                    <div className='page-div'>
                        <h3 className='page-title'>WordPlay</h3>
                        <img src={wordPlay} alt="A screenshot of the WordPlay homepage." className='page-img'/>
                        <p className='page-para'>A collaborative project with 2 other developers that uses the Giphy API and wordsAPI to find definitions and GIFs of words you search. This can be helpful for people who are more visual learners and it makes learning the definitions of words more fun! This project uses the Bulma CSS framework. </p>
                    </div>
                </Link>
                <Link to='https://minigame-masters.onrender.com/' className='page-link'>
                    <div className='page-div'>
                        <h3 className='page-title'>Minigame Masters</h3>
                        <img src={minigameMasters} alt="Minigame Masters logo, a hooded figure." className='page-img'/>
                        <p className='page-para'>A collaborative project with 4 other developers in which we created a website that is used to play different minigames, including a multiplayer tic-tac-toe using socket.io. This site uses GraphQL along with Mongoose and Apollo Server to store user information so that users can create accounts and accumulate coins!</p>
                    </div>
                </Link>
                <Link to='https://mikedaleo.github.io/Weather-Dashboard/' className='page-link'>
                    <div className='page-div'>
                        <h3 className='page-title'>Weather Dashboard</h3>
                        <img src={weatherDashboard} alt="A screenshot of the Weather Dashboard page." className='page-img'/>
                        <p className='page-para'>A personal project that uses the OpenWeather API to search and display the current weather of the searched location along with the 5-day forecast. Includes the temperature, wind speed, and humidity.</p>
                    </div>
                </Link>
                <Link to='https://minigame-masters.onrender.com/' className='page-link'>
                    <div className='page-div'>
                        <h3 className='page-title'>Tech Blog</h3>
                        <img src={techBlog} alt="A screenshot of the Tech Blog page." className='page-img'/>
                        <p className='page-para'>A personal project that uses the Sequelize package to create a database and allows users to create accounts to post, edit, delete, and comment on blogs. This project also uses the Bootstrap CSS framework.</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
