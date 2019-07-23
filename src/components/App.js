import React from 'react';
import axios from 'axios';
import Header from './header/Header';
import Store from './store/Store';
import Cart from './cart/Cart';
import './App.css';

class App extends React.Component {

  state = {
    cameras: [],
    search: '',
  };

  componentDidMount = async () => {
    try {
      const res = await fetch('http://localhost:8000/cameras');
      if (!res.ok) throw new Error();
      const camerasJson = await res.json();
      this.setState({ cameras: camerasJson });
    } catch (e) {
      alert(e);
    };
  };

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
    this.sortList();
  };

  sortList = () => {
    let term = this.state.search.toLowerCase();

    let cameraList = this.state.cameras.filter( camera => {
      return camera.name.toLowerCase().includes(term);
    });

    if (this.state.search.length === 0) {
      return this.state.cameras;
    }

    return cameraList;
  }



  addToCart = (id) => {
    let cameraToUpdate = this.state.cameras.filter( camera => camera.id === id);

    axios.patch(`http://localhost:8000/cameras/${id}`, {
      ...cameraToUpdate[0],
      inCart: true
    })
    .then( (e) => {
      this.setState(prevState => {
        return {
          cameras: prevState.cameras.map( camera => {
            if (camera.id === id) {
              return {
                ...camera,
                inCart: true,
              }
            } else {
              return camera
            }
          })
        }
      })
    })
  };

  removeFromCart = (id) => {
    let cameraToUpdate = this.state.cameras.filter( camera => camera.id === id);

    axios.patch(`http://localhost:8000/cameras/${id}`, {
      ...cameraToUpdate[0],
      inCart: false
    })
    .then( (e) => {
      this.setState(prevState => {
        return {
          cameras: prevState.cameras.map( camera => {
            if (camera.id === id) {
              return {
                ...camera,
                inCart: false,
              }
            } else {
              return camera
            }
          })
        }
      })
    })
  };


  render() {

    return (
      <div>
        <Header />

        <div className='page'>

          <Store
            updateSearch={this.updateSearch}
            cameras={this.state.cameras}
            sortList={this.sortList}
            addToCart={this.addToCart}
          />

          <Cart
            cameras={this.state.cameras}
            removeFromCart={this.removeFromCart}
          />

        </div>

      </div>
    );
  }
}

export default App;
