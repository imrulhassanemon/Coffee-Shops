import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Coffees from '../pages/Coffees';
import Dashboard from '../pages/Dashboard';
import CoffeeCards from '../component/CoffeeCards';
import CoffeeDetails from '../pages/CoffeeDetails';

const Routes = createBrowserRouter  ([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
     errorElement: <div>Page not found. ভাই কাউরে খুইজা পাইতাসি না</div>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../../public/categories.json'),
        children:[
          {
            path: '/category/:category',
            element: <CoffeeCards></CoffeeCards>,
            loader: ()=> fetch('../../public/coffees.json')
          },
          {
            path: '/',
            element: <CoffeeCards></CoffeeCards>,
            loader: ()=> fetch('../../public/coffees.json')
          
          }
        ]
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>,
        loader: ()=> fetch('../../public/coffees.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
       {
        path: '/coffee/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ()=> fetch('../../public/coffees.json')
      }
    ]
  },
]);

export default Routes;