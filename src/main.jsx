import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
// import { RouterProvider } from 'react-router-dom'
import { RouterProvider } from "react-router-dom";
import Routes from './router/Routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>,
)
