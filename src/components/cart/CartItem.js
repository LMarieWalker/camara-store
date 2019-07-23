import React, { Component } from 'react';
import CartOnSale from './CartOnSale';
import RemoveBtn from './RemoveBtn';

class CartItem extends Component {
  render () {
    return (
      <div className='item'>
        <div>
          {this.props.camera.name}<br />
          $ {this.props.camera.price}
          <CartOnSale camera={this.props.camera} />
        </div>
        <div>

          <RemoveBtn
            removeFromCart={this.props.removeFromCart}
            id={this.props.camera.id}
          />

        </div>
      </div>
    );
  };
};

export default CartItem;
