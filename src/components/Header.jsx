import { useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
    return (
        <>
            <header className='title'>
                <h1 className='name'>Michael Daleo</h1>
                <Navigation />
            </header>
        </>
    )
}

