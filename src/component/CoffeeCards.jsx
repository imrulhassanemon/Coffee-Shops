import React, { useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
const CoffeeCards = () => {
  const {category}  = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

  const [coffees, setCoffees] = React.useState([]);//category
  useEffect(() => {
    if(category){
      const filteredByCategory = [...data].filter(coffee => coffee.category === category);
    setCoffees(filteredByCategory);
    }else{
      setCoffees(data.slice(0, 6));
    }
  }, [data, category]);

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 px-8 lg:grid-cols-3 md:gap-10 p-4">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
    <button className="btn btn-warning text-black mx-8 " onClick={()=> navigate('/coffees')}>View All</button>
    </>
  );
};

export default CoffeeCards;
