import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          option: [
            {
              value: 'fastest',
              displayValue: 'Fastest'
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest'
            }
          ]
        },
        value: ''
      },
    },
    loading: false
  }

  orderHandler = (event) => {
    //console.log(this.props.ingredients);
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
    }
    axios.post('/orders.json', order)
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({loading: false})
    });
  }

  render () {
    let form = (
        <form>
          <Input
            elementType=""
            elementConfig=""
            value=""/>
          <Input inputtype="input" type="email" name="email" placeholder="Your email" />
          <Input inputtype="input" type="text" name="street" placeholder="Your street" />
          <Input inputtype="input" type="text" name="postal" placeholder="Your postal code" />
          <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
        <div className={classes.ContactData}>
          <h4>Enter you Contact Data</h4>
          {form}
        </div>
    );
  }
}

export default ContactData;