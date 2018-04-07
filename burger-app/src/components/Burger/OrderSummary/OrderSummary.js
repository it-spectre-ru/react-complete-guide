import React from 'react';

import Aux from '../../../hoc/Ax';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredienstSummary = Object.keys(props.ingredients).map(igKey => {
    return (
        <li key={igKey}>
          <span
              style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>);
  });

  return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with following ingredients: </p>
        <ul>
          {ingredienstSummary}
        </ul>
        <strong><p>Total price: {props.price.toFixed(2)}</p></strong>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
      </Aux>
  );
};

export default orderSummary;
