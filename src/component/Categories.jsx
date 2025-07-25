import React from 'react';
import { Link, } from 'react-router-dom';

const Categories = ({categories}) => {

 

    return (
        <div role="tablist" className="tabs tabs-lift w-full my-9 flex justify-around">
       {
        categories.map(category => (<Link key={category.category} className='tab ' role='tab' to={`/category/${category.category}`}>{category.category}</Link>))
       }
      </div>
    );
};

export default Categories;