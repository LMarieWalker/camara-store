import React, { Component } from 'react';
import './Cam.css';

class OnSale extends Component {
  render () {
    let camIsOnSale = this.props.camera.onSale ? 'ON SALE' : null;

    return (
      <div className='onsale'>
        {camIsOnSale}
      </div>
    );
  };
};

export default OnSale;
