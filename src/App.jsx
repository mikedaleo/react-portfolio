import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
