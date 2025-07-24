import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Coffees from '../pages/Coffees';
import Dashboard from '../pages/Dashboard';

const Routes = createBrowserRouter  ([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
     errorElement: <div>Page not found. ভাই কাউরে খুইজা পাইতাসি না</div>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        children:[
          
        ]
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

export default Routes;