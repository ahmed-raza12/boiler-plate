import React from 'react';
import AppBar from 'material-ui/AppBar';
import logo from '../image/logo.jpg';


const imgStyle = {
    marginLeft: 100,
  width: 60,
  height: 50
}


const NavBar = () => (
  <AppBar
    style={{backgroundColor : '#005183'}}
    iconElementLeft={<img src={logo} alt='logo' style={imgStyle} />}
  />
);

export default NavBar;