import React from 'react';

import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope you like the burger</h1>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button clicked={props.checkoutCancelled} btnType="Danger">Cancel</Button>
            <Button clicked={props.checkoutContinued} btnType="Success">Continue</Button>
        </div>
    )
}

export default checkoutSummary;