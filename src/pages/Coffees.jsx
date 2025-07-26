
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../component/Card';

const Coffees = () => {

    const allCoffees = useLoaderData();
    console.log(allCoffees);


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 px-8 lg:grid-cols-3 md:gap-10 p-4'>
            {
                allCoffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>  )
            }
        </div>
    );
};

export default Coffees;