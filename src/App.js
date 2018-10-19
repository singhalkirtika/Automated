import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Main from './components/MainComponent';
import Register from './components/RegisterComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          < Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
