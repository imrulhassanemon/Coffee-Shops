import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* This is navbar  */}
           <div className='h-12'>
             <Navbar></Navbar>
           </div>
            {/* This is the main content area */}
            <div className='min-h-[calc(100vh-229px)] py-12 container  mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;