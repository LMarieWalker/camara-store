import React, { Component } from 'react';
import Search from '../search/Search';
import CamList from './CamList';

class Store extends Component {
  render () {
    return (
      <div>

        <Search
          updateSearch={this.props.updateSearch}
        />

        <CamList
          cameras={this.props.cameras}
          sortList={this.props.sortList}
          addToCart={this.props.addToCart}
        />

      </div>
    );
  };
};

export default Store;
