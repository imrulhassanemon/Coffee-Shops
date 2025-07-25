import React from 'react';

const Card = ({coffee}) => {
    const {name, image, category, origin, type, id, rating, popularity} = coffee || {};
    console.log(coffee);
    return (
        <div>
            {name}
        </div>
    );
};

export default Card;