import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className='name-div'>
                    <Link to={'/'}><h1 className={'name'}>Michael Daleo</h1></Link>
                </div>
                <Navigation />
            </header>
        </>
    )
}

