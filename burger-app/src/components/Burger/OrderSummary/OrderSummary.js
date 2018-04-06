import React from 'react';

import Aux from '../../../hoc/Ax';

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
        <p>Continue to checkout?</p>
        <button>Cancel</button>
        <button>Continue</button>
      </Aux>
  );
};

export default orderSummary;
