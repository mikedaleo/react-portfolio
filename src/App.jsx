import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation/Navigation';

function App() {
  
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
