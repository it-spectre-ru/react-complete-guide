import React, {Component} from 'react';

import Aux from '../../../hoc/Ax/Ax';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  // this could be a functional component
  componentWillUpdate() {
    console.log('[oreder summary] Will update');
  }

  render () {

    const ingredienstSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
          <li key={igKey}>
          <span
              style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>);
    });


    return (
        <Aux>
          <h3>Your order</h3>
          <p>A delicious burger with following ingredients: </p>
          <ul>
            {ingredienstSummary}
          </ul>
          <strong><p>Total price: {this.props.price.toFixed(2)}</p></strong>
          <p>Continue to checkout?</p>
          <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
          <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
    );
  }
}

export default OrderSummary;
