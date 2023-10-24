import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HeaderPage from './components/Fragments/Header'
// import App from './components/testing/App'
import App2 from './components/testing/App2'
import Navbar from './components/Fragments/Navbar/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />
  },
  {
    path: '/test',
    element: <App2 />
  },
  {
    path: '/1',
    element: <HeaderPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
