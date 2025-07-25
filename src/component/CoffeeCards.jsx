import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {

     const obj =  useParams()
  console.log(obj);

  const coffees = useLoaderData();
  console.log(coffees)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
            {
                coffees.map(coffee => <Card key={coffee.category} coffee={coffee}></Card>)
            }
        </div>
    );
};

export default CoffeeCards;