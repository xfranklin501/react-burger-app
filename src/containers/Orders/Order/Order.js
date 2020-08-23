import React from 'react';

import classes from './Order.module.css';

const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({ name: ingredientName, amount: props.ingredients[ingredientName] })
    }

    const ingredientOutput = ingredients.map(ig => (
        <span
            style={{
                textTransform: 'capitalize',
                displayL: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} : ({ig.amount})</span>
    ))
    return (
        <div className={classes.Order}>
            <p><strong>Ingredients :</strong> {ingredientOutput}</p>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;