import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCoffee } from "../utils";

const CoffeeDetails = () => {
  const { id } = useParams();

  const data = useLoaderData();
  const [singleCoffee, setSingleCoffee] = React.useState({});

  const {
    image,
    name,
    description,
    ingredients,
    type,
    rating,
    popularity,
    origin,
    nutrition_info,
  } = singleCoffee || {};


  const handelAddCoffee = (coffee)=>{
    addCoffee(coffee)
  }


  useEffect(() => {
    const singleData = [...data].find((coffee) => coffee.id === parseInt(id));
    setSingleCoffee(singleData);
  }, [data, id]);

  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p>
              <span className="font-bold text-gray-600">Description:</span>{" "}
              {description}
            </p>

            <div>
              <p>
                <span className="font-bold text-gray-600">Ingredients</span>
              </p>
              <ul className="list-disc pl-5">
                {ingredients &&
                  ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
              </ul>
            </div>
            <p>
              <span className="font-bold text-gray-600">Type:</span> {type}
            </p>
            <p>
              <span className="font-bold text-gray-600">Rating:</span> {rating}
            </p>
            <p>
              <span className="font-bold text-gray-600">Popularity:</span>{" "}
              {popularity}
            </p>
            <p>
              <span className="font-bold text-gray-600">Origin:</span> {origin}
            </p>
            <div>
              <p>
                <span className="font-bold text-gray-600">Nutrition Info:</span>
              </p>

              <ul>
                {nutrition_info &&
                  Object.entries(nutrition_info).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-bold">{key}:</span> {value}
                    </li>
                  ))}
              </ul>
            </div>

            <button className="btn btn-warning text-black" onClick={()=> handelAddCoffee(singleCoffee)}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
