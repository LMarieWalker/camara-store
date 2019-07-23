import React, { Component } from 'react';
import Cam from './Cam';

class CamList extends Component {
  render () {
    let list = this.props.sortList();

    let theCameras = list.map( camera => {
      if (!camera.inCart) {
        return (
          <div key={camera.id}>

            <Cam
              camera={camera}
              addToCart={this.props.addToCart}
              />

          </div>
        )
      }

      return null;
    });

    return (
      <div>
        {theCameras}
      </div>
    );
  };
};

export default CamList;
