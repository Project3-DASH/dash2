import React, { Component } from "react";
import './Navbar.css';
import logo from './logo.svg';
// import LogoImg from 'img/logo.png';

// const NavbarStyle = {
//   marginBottom: '10px',
//   color: 'white',
// };


class Navbar extends Component {
	render() {
		return(

        <nav brand='React-Bootstrap' inverse toggleNavKey={0}> 
            <nav right eventKey={0}>
                   <img src={logo} className="App-logo" alt="logo" />     
                <form className='navbar-form' action="">
            
                    <input type='text' placeholder='email' />{' '}
                    <input type='text' placeholder='password' />{' '}
                    <button bsStyle='success' type='submit'>Sign in</button>
                </form>
                </nav>
            </nav>
        // </nav>
		)
	}

}

export default Navbar;

// nav style={ NavbarStyle } className="navbar navbar-default navbar-fixed-top">
//<form className='navbar-form' action="">
//<Input type='text' placeholder='email' />{' '}
//<Input type='text' placeholder='password' />{' '}
//<Button bsStyle='success' type='submit'>Sign in</Button>
//</form>
//</nav>