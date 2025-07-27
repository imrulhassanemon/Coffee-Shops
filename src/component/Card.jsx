import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const Card = ({ coffee, handleRemoveItem }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};

    const {pathname} = useLocation();

  return (
     <div className='flex relative'>
      <Link
        to={`/coffee/${id}`}
        className='transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden'
      >
        <figure className='w-full h-48 overflow-hidden'>
          <img className='' src={image} alt='' />
        </figure>
        <div className='p-4'>
          <h1 className='text-xl'>Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>
      {
        pathname === '/dashboard' && <p onClick={()=>handleRemoveItem(id)} className="absolute bg-warning p-3 rounded-full -top-5 -right-5"><MdDeleteForever size={30} /></p>
      }
    </div>
  );
};

export default Card;
