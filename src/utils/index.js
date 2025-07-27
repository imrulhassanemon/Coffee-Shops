// get all coffee from local storage 

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
        alert('Coffee already exist in your favorite list')
        return;
    }

    coffees.push(coffee)

    localStorage.setItem('fovoriteCoffee', JSON.stringify(coffees));

}





// remove coffee from loacl storage 

export  {addCoffee}
