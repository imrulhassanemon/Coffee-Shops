import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../component/Card";

const Coffees = () => {
  const allCoffees = useLoaderData();

  const [coffees, setCoffees] = React.useState(allCoffees);

  const handleSortbutton = (sortby)=>{
    if(sortby  === 'popularity'){
        const sortedCoffees = [...allCoffees].sort((a, b) => b.popularity - a.popularity)
        setCoffees(sortedCoffees)
    }else if(sortby === 'rating'){
        const sortedCoffees = [...allCoffees].sort((a, b) => b.rating - a.rating)
        setCoffees(sortedCoffees)
    }
  }


  return (
    <>
      <div className="lg:flex text-center justify-between px-6 py-4">
        <div>
          <h1 className="text-3xl font-bold">
            Sort Coffees Popularity and Coffees
          </h1>
        </div>
        <div className="flex gap-4 justify-center mt-4 lg:mt-0">
          <button className="btn btn-warning  text-black" onClick={()=>handleSortbutton('popularity')}>Sort By Popularity</button>
          <button className="btn btn-warning  text-black" onClick={()=>handleSortbutton('rating')}>Sort By Ragints</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-8 lg:grid-cols-3 md:gap-10 p-4">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
