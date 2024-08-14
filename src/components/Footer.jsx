import reactImage from '../assets/react.svg'

export default function Footer() {
    return (
        <>
            <footer>
                <p>Created by Michael Daleo</p>
                <p>Powered by React <img src={reactImage} alt="" /></p>
            </footer>
        </>
    )
}

