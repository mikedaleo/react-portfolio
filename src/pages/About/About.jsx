import mikeImage from '../../assets/mike.jpg'

export default function About() {
    return (
        <div className={'card'}>
            <div className={'title-div'}>
                <h2 className={'page-title'}>ABOUT MICHAEL</h2>
            </div>
            <div className={'about'}>
                <img src={mikeImage} alt="" className='mike_image' />
                <p>A passionate programmer with a strong enthusiasm for problem-solving and continuous learning. Thrives on expanding knowledge and excels in communication. Finds joy in mentoring others and sharing insights to help them grow.
                </p>
            </div>
        </div>
    )
}
