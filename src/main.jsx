import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import the pages
import About from './pages/About/About.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
