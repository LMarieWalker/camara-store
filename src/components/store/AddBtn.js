import React, { Component } from 'react';
import './Cam.css';

class AddBtn extends Component {
  render () {
    return (
      <div>

        <button
          className='addBtn'
          onClick={e => this.props.addToCart(this.props.id, e)}
        >
        
          ADD TO CART
        </button>

      </div>
    );
  };
};

export default AddBtn;
