import React, { Component } from 'react';
import './Cart.css';

class CartOnSale extends Component {
  render () {
    let camIsOnSale = this.props.camera.onSale ? 'ON SALE' : null;

    return (
      <div className='onsale'>
        {camIsOnSale}
      </div>
    );
  };
};

export default CartOnSale;
