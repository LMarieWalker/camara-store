import React, { Component } from 'react';
import CartItem from './CartItem';
import './Cart.css';

class CartList extends Component {
  render () {
    let cameraList = this.props.cameras.map( camera => {
      if (camera.inCart) {
        return (
          <div key={camera.id} className='cartItem'>

            <CartItem
              camera={camera}
              removeFromCart={this.props.removeFromCart}
            />

          </div>
        )
      }

    })
    return (
      <div>
        {cameraList}
      </div>
    );
  };
};

export default CartList;
