import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation(props) {
    return (
        <div className={'linkDiv'}>
            <Link to={'/about'}>About me</Link>
            <Link to={'/portfolio'}>Portfolio</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/resume'}>Resume</Link>
        </div>
    )
}
