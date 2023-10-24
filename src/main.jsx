import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Layouts/1st-home'
import Student from './components/Layouts/team-student'
import Instructor from './components/Layouts/team-instructor'
import App from './components/testing/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/test',
    element: <App />
  },
  {
    path: '/student',
    element: <Student />
  },
  {
    path: '/instructor',
    element: <Instructor />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
