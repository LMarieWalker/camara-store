import React, { Component } from 'react';
import CartList from './CartList';
import './Cart.css';

class Cart extends Component {
  render () {
    let subtotal = 0.00;
    let tax = 0.00;
    let total = 0.00;

    this.props.cameras.map( camera => {
      if (camera.inCart) {
        subtotal += camera.price;
        tax += subtotal * 0.086;
        total += subtotal + tax;
      }
    });

    return (
      <div className='cartBox'>
        <h4>Your Cart</h4>

        <CartList
          cameras={this.props.cameras}
          removeFromCart={this.props.removeFromCart}
        />

        <div>
          <p>
            Subtotal: $ {subtotal.toFixed(2)}<br />
            Tax: $ {tax.toFixed(2)}<br />
            <span>Total: $ {total.toFixed(2)}</span>
          </p>
        </div>

        <button>CHECKOUT</button>
      </div>
    );
  };
};

export default Cart;
