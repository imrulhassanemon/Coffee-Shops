import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div calassName= 'text-center'>
            {/* Heading */}
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-lg font-medium text-gray-600'>{subtitle}</p>   
        </div>
    );
};

export default Heading;