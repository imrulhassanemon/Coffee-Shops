import React from 'react';
import Banner from '../component/Banner';
import Heading from '../component/Heading';

const Home = () => {
    return (
        <div className='text-center'>
            {/* Heading */}
            <Banner></Banner>
            {/* Category Tab Section  */}
            <Heading title='Welcome to Our Coffee Shop' subtitle='Explore our wide range of coffees'></Heading>
            {/* Dynamic Nested Component  */}
        </div>
    );
};

export default Home;