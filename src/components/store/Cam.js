import React, { Component } from 'react';
import OnSale from './OnSale';
import AddBtn from './AddBtn';

class Cam extends Component {
  render () {
    let cam = this.props.camera;

    return (
      <div className='container'>
        <h3>{cam.name}</h3>
        <img src={cam.picture} alt={cam.name} />
        <p>
          Price: $ {cam.price.toFixed(2)}<br />
          Rating: {cam.rating}<br />
          <OnSale camera={this.props.camera} />
        </p>

        <AddBtn
          addToCart={this.props.addToCart}
          id={cam.id}
        />

      </div>
    );
  };
};

export default Cam;
