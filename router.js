import  React, {Component} from "react";
import {Router, Route, Link, } from "react-router-dom";
import App from './App';
import { connect } from 'react-redux';
import Main from './container/Main';
import history from './history';
import RollContainer from './container/RollContainer';
import VechicalTabs from './container/VechicalTabs';
import UsersList from './component/AllUsers'
import AddOfficer from './component/AddOfficer';
import ReportContainer from './container/EventReportContainer';
import StepperContainer from './component/Stepper'
import AppNav from './component/Appbar';
import Navbar from './component/Nav';


class MyRoutes extends Component {
    render() {
        return(
            <Router history={history}>
            <div>
                {/* {
                    (this.props.adminUid) ? (<div><AppNav /></div>) : <Navbar />
                } */}
                <AppNav />
                    <Route exact path="/" component={App} />
                    <Route path="/main" component={Main} />
                    <Route path="/addofficer" component={AddOfficer} />
                    <Route path="/eventreport" component={ReportContainer} />
                    <Route path="/rollcall" component={RollContainer} />
                    <Route path="/vehicalreport" component={StepperContainer} />
                    <Route path="/allusers" component={UsersList} />
            </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    const {reducer} = state
    return {
        // reducer: state.reducer.studentData,
        adminUid: state.reducer.adminUid
    }
}
export default connect(mapStateToProps, null) (MyRoutes);