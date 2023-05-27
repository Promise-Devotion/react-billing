import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import './global.scss'

// import './index.css'

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
