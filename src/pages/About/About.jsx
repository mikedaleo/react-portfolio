import mikeImage from '../../assets/blackandwhitemike.jpg';
import './About.css';


export default function About() {
    return (
        <>
            <div className={'title-div'}>
                <h2 className={'about-michael'}>ABOUT MICHAEL</h2>
            </div>
            <div className={'card'}>
                <div className={'about'}>
                    <img src={mikeImage} alt="A picture of Michael." className='mike_image' />
                    <p className={'about-p'}>A passionate programmer with a strong enthusiasm for problem-solving and continuous learning. <hr />Thrives on expanding knowledge and excels in communication. <hr />Finds joy in mentoring others and sharing insights to help them grow.
                    </p>
                </div>
            </div>
        </>
    )
}
