import React, { Component } from 'react';
import AppNav from '../component/Appbar';
import ReportForm from '../component/EventReport'
import DrawerExample from '../component/Drawer';



class ReportContainer extends Component {
  render() {
    return (
      <div className="App">
        <ReportForm />
      </div>
    );
  }
}

export default ReportContainer;