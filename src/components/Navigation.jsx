import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation(props) {
    return (
        <div className={'linkDiv'}>
            <Link to={'/about'} className={'links'}>About me</Link>
            <Link to={'/portfolio'} className={'links'}>Portfolio</Link>
            <Link to={'/contact'} className={'links'}>Contact</Link>
            <Link to={'/resume'} className={'links'}>Resume</Link>
        </div>
    )
}
