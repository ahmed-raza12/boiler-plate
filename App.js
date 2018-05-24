import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import AppBarExampleIconButton from './component/Appbar'
import Navbar from './component/Nav';
import AdminForm from './component/adminForm';
import DrawerExample from './component/Drawer';




class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <AdminForm />
               {/*<DrawerExample />*/}

      </div>
    );
  }
}

export default App;
