import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import logo from '../image/logo.jpg';
import ArrowDown from 'react-icons/lib/md/expand-more';
import NewUser from 'react-icons/lib/md/open-in-new';
import history from '../history';
import RollIcon from 'react-icons/lib/md/subject';
import ReportIcon from 'react-icons/lib/md/add-circle-outline';
import SearchIcon from 'react-icons/lib/md/search';
import VehicalIcon from 'react-icons/lib/md/directions-car';
import DrawerExample from './Drawer';
import   './bar.css';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const arrowStyle = {
  color: 'white',
  // marginLeft: -200,
  // marginTop: -30,
  cursor : 'pointer'
}

const button = {
  container: {
    display: 'flex',
  },
  child: {
    selfAlign: 'center'
  }
}
const Logged = (props) => (
  <Menu >
    <IconMenu
    style={{marginRight : 20}}
      iconButtonElement={<div style={{marginTop: -8.5}}><FlatButton label="Search" style={buttonStyle} labelPosition='before' icon={<ArrowDown size={30} style={arrowStyle} color="aliceblue" />} /></div>}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >

      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help &amp; feedback" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </Menu>
);

function addOff() {
  history.push('./addofficer')
}

function eventReport() {
  console.log('sdsds')
  history.push('./eventreport')
}

function vehicalIncident() {
  history.push('./vehicalreport')
}

function rollCal() {
  history.push('./rollcall')
}

const styles = {
  title: {
    selfAlign: 'center',
    cursor: 'pointer',
  },
};

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
};

const imgStyle = {
  width: 40,
  height: 40,
  marginRight : 30
}



const addButton = {
  color: '#005183',
  backgroundColor: 'white',
  padding: '0px 10px',
  margin : '5px 0px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  borderRadius: 5
}

const AppNav = () => (
  <div>
  <AppBar
  style={{backgroundColor : '#005183'}}
  className='child1'
    iconElementRight={
      <div style={button.container}>
        {/* <Logged  /> <br /> */}
        <img src={logo} alt='logo' style={imgStyle} />
      </div>
    }
    iconElementLeft={
      <div style={button.container} >
        <span style={addButton} onClick={addOff}>
          <NewUser size={35} />
          <span>  Add Officer </span>
        </span>
        <FlatButton label="Event Report" style={buttonStyle} onClick={eventReport} icon={<ReportIcon sizw={20} color='white' />} />
        <FlatButton label="Roll Call" style={buttonStyle} onClick={rollCal} icon={ <RollIcon sizw={20} color='white'/>}/>
        <FlatButton label="Vehical Incident" style={buttonStyle} onClick={vehicalIncident} icon={ <VehicalIcon sizw={20} color='white' />} />
        <FlatButton label="Search" style={buttonStyle} icon={<SearchIcon sizw={20} color='white' />} />
      </div>
    }
  />
  <DrawerExample zDepth />
  </div>
)
export default AppNav;