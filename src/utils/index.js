// get all coffee from local storage 

import toast from "react-hot-toast";

const getCoffee = ()=>{
    const coffee = localStorage.getItem('fovoriteCoffee');
    return coffee ? JSON.parse(coffee) : [];
}



// add a coffee to the local storage 
const addCoffee = (coffee)=>{
    console.log(coffee)
    const coffees = getCoffee();

    // check if coffee already exist in local storage 

    const isExist = coffees.find(item => item.id == coffee.id)
    if(isExist){
        toast.error('Coffee already exist in your favorite list')
        return;
    }

    coffees.push(coffee)

    localStorage.setItem('fovoriteCoffee', JSON.stringify(coffees));
    toast.success('Coffee added to your favorite list')
}





// remove coffee from loacl storage 


const removeItem = (id)=>{
    const coffees = getCoffee()
    const remainignCoffees = coffees.filter(coffee => coffee.id !=id)
    localStorage.setItem("fovoriteCoffee", JSON.stringify(remainignCoffees))
    toast.success('Coffee removed from your favorite list')
}




export  {addCoffee, getCoffee, removeItem}
