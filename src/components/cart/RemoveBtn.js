import React, { Component } from 'react';

class RemoveBtn extends Component {
  render () {
    return (
      <div>
        <button
          onClick={e => this.props.removeFromCart(this.props.id, e)}
        >
          Remove From Cart
        </button>
      </div>
    );
  };
};

export default RemoveBtn;
