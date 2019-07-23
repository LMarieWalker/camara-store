import React, { Component } from 'react';

class Search extends Component {
  // state = {
  //   term: '',
  // };
  //
  // onInputChange(e) {
  //   console.log('term: ', e.target.value);
  //   this.setState({ term: e.target.value });
  // };



  render () {
    return (
      <div>
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div>
            <label>Camera Search</label>

            <input
              type='text'
              defaultValue={this.props.searchValue}
              onChange={e => this.props.updateSearch(e)}
              placeholder='Search for camera'
            />

          </div>
        </form>
      </div>
    );
  };
};

export default Search;
