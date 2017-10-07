import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
		<div className="App">
            <Navbar />
            {/* Jumbotron */}
		        <div className="jumbotron text-center">
		          <h1> <em> Win New Products </em> </h1>
              <h5> Meet Dash, tell your friends and you all get products for free! It's really as simple as that. </h5>
		        </div>
			<Body />
            <Footer />
          </div>
    );
  }
}



export default App;
