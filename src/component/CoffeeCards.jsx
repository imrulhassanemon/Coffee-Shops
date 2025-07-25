import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
const CoffeeCards = () => {
  const {category}  = useParams();
  const data = useLoaderData();

  const [coffees, setCoffees] = React.useState([]);//category
  useEffect(() => {
    const filteredByCategory = [...data].filter(coffee => coffee.category === category);
    setCoffees(filteredByCategory);
  }, [data, category]);

  console.log(coffees)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
  );
};

export default CoffeeCards;
