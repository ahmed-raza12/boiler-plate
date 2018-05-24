import React, { Component } from 'react';
import AppNav from '../component/Appbar';
import RollCallFrom from '../component/RollCallFrom'
import DrawerExample from '../component/Drawer';



class RollContainer extends Component {
  render() {
    return (
      <div className="App">
        <RollCallFrom />
      </div>
    );
  }
}

export default RollContainer;