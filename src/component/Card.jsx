import React from "react";
import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  console.log(coffee);
  return (
    <Link className="card-link hover:scale-105  " to={`/coffee/${id}`}>
      <div className="card  bg-base-100 shadow-sm">
        <figure>
          <img
            className=" h-72 rounded-2xl  object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="flex flex-col gap-0"> 
          <p className="text-[20px]">Origin: <span className="text-gray-600">{origin}</span></p>
          <p className="text-[20px]">Type: <span className="text-gray-600">{type}</span></p>
          <p className="text-[20px]">Rating: <span className="text-gray-600">{rating}</span></p>
          <p className="text-[20px]">Popularity: <span className="text-gray-600">{popularity}</span></p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
