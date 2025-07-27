import React, { useEffect } from 'react';
import Heading from '../component/Heading';
import { getCoffee, removeItem } from '../utils';
import Card from '../component/Card';
import CoffeeCards from '../component/CoffeeCards';

const Dashboard = () => {

    const [coffees, setCoffees] = React.useState([]);
    

    useEffect(()=>{
        const favorites = getCoffee();
        setCoffees(favorites);
    }, [])

    const handleRemoveItem = id => {
        removeItem(id);
        const favorites = getCoffee();
        setCoffees(favorites);
    }    
    return (
        <>
        <Heading title={'Welcome to Dashboard'} subtitle={'Your one-stop solution for all coffee needs'}></Heading>

        <div className='grid grid-cols-1 mt-12 md:grid-cols-2 px-8 lg:grid-cols-3 md:gap-10 p-4'>
            {
                coffees.map(coffee => <Card handleRemoveItem={handleRemoveItem} key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        </>
    );
};

export default Dashboard;