import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import AppBar from 'material-ui/AppBar';
import './bar.css';
import IconButton from 'material-ui/IconButton';
import DraweIcon from 'react-icons/lib/fa/bars';
import NewUser from 'react-icons/lib/md/open-in-new';
import history from '../history';
import logo from '../image/logo.jpg';
import RollIcon from 'react-icons/lib/md/subject';
import ReportIcon from 'react-icons/lib/md/add-circle-outline';
import SearchIcon from 'react-icons/lib/md/search';
import VehicalIcon from 'react-icons/lib/md/directions-car';

function changeIt() {
  console.log('sdas')
  history.push('./addofficer')
}

function addOff() {
  history.push('./addofficer')
}

function vehicalIncident() {
  history.push('./vehicalreport')
}

function eventReport() {
  console.log('sdsds')
  history.push('./eventreport')
}

function rollCal() {
  history.push('./rollcall')
}


export default class DrawerExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  };

   handleToggle = () => this.setState({ open: !this.state.open });
   eventClose = () => {
     this.setState({ open: false });
     eventReport()
  };
  
  rollClose = () => {
    this.setState({ open: false });
    rollCal()
 };

 vehicalClose = () => {
  this.setState({ open: false });
  vehicalIncident()
};

 

  render() {
    
    const addButton = {
      color: '#005183',
      backgroundColor: 'white',
      padding: '10px 10px',
      cursor: 'pointer',
      borderRadius: 5
    }
    const imgStyle = {
      width: 50,
      height: 40,
      marhinTop: 5,
    }
    const icon = {
      padding : '0px 10px'
    }

    return (
      <div className="child2">
        <AppBar
        style={{backgroundColor : '#005183'}}
          title="Title"
          iconElementRight={
            <img src={logo} alt='logo' style={imgStyle} />
          }
          iconElementLeft={<div > <span><DraweIcon size={40} color="white" onClick={this.handleToggle} /> <span style={addButton} onClick={changeIt}>
            <NewUser size={30} />
            <span>  Add Officer </span>
          </span>
          </span>
          </div>}
        />
        {/*<DraweIcon size={40} color="black" onClick={this.handleToggle} />*/}
        <Drawer open={this.state.open}>
          <MenuItem style={{ backgroundColor : '#005183', padding: '3px 10px', textAlign: 'center'}} onClick={this.handleClose} ><img src={logo} alt='logo' style={{height: 45, backgroundColor: 'lightBlue'}} /></MenuItem>
          <MenuItem onClick={this.eventClose}  > <span style={icon}><ReportIcon size={30}  /> </span> Event Report</MenuItem>
          <MenuItem onClick={this.rollClose}><span style={icon}><RollIcon size={30} /></span>Roll Call</MenuItem>
          <MenuItem onClick={this.vehicalClose}><span style={icon}><VehicalIcon size={30} /></span>Vehical Incident</MenuItem>
          <MenuItem onClick={this.handleClose}><span style={icon}><SearchIcon size={30} /></span>Search</MenuItem>
        </Drawer>
      </div>
    );
  }
}