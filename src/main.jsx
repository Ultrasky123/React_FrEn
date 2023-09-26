import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HeaderPage from './components/Fragments/Header'
import App from './components/testing/App'
import Navbar from './components/Fragments/Navbar/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderPage />
  },
  {
    path: '/test',
    element: <App />
  },
  {
    path: '/1',
    element: <Navbar />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
