import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import { connect } from 'react-redux';
import {rootRef} from '../database';
import history from '../history';
import * as firebase from 'firebase';
import DatePicker from 'material-ui/DatePicker';
import { complaints } from '../store/action';
import './form.css'
class ReportForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'eventReport',
            vehicalOwner: '',
            vehicalOwnerAddress: '',
            vehicalOwnerTagno: '',
            vehicalOwnerColor: '',
            vehicalOwnerMake: '',
            vehicalOwnerModel: '',
            vehicalOwnerState: '',
            vehicalOwnerVtype: '',
            suspectName: '',
            suspectHeight: '',
            suspectWeight: '',
            suspectAddress: '',
            suspectCompl: '',
            suspectRace: '',
            suspectAge: '',
            suspectDOB: '',
            suspectSOC: '',
            suspectPant: '',
            suspectShirt: '',
            suspectNotes: '',
            repDOB: '',
            homePhone: '',
            workPhone: '',
            startDtime: '',
            endDtime: '',
            repPerson: '',
            repPersonAddress: '',
            repPersonCCN: '',
            repPersonNotes: '',
            repPersonPhone: '',
            reportAddress: '',
            reportCompanyName: '',
            reportEvent: '',
            reportNumber: '',
            latitude: '',
            longitude: '',


        }

    }
    changeState(formLabel, ev) {

        let currentState = {}
        currentState[formLabel] = ev.target.value
        this.setState(currentState)
        console.log(currentState)

    }
    _repDOB(event, value) {
        this.setState(
            {repDOB : value}
        );
    }
    _startDtime(event, value) {
        this.setState(
            {startDtime : value}
        );
    }
    _endDtime(event, value) {
        this.setState(
            {endDtime : value}
        );
    }
    _suspectDOB(event, value) {
        this.setState(
            {suspectDOB : value}
        );
    }
    componentDidMount() {
        // this.getMyLocation()
    }

    getMyLocation = () => {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        }

    }

    submitIt = () => {
        //     const {vehicalOwner, vehicalOwnerAddress, vehicalOwnerMake, vehicalOwnerColor, vehicalOwnerTagno, vehicalOwnerState, vehicalOwnerVtype, vehicalOwnerModel,
        //     suspectAddress, suspectAge, suspectCompl, suspectDOB, suspectHeight, suspectName, suspectNotes, suspectPant, suspectRace, suspectShirt, suspectSOC, suspectWeight,
        //     repDOB, reportAddress, reportCompanyName, reportEvent, reportNumber, repPerson, repPersonAddress, repPersonCCN, repPersonNotes, repPersonPhone, endDtime, startDtime, key, homePhone, workPhone,     
        // } = this.state
        // if (vehicalOwner === '' || vehicalOwnerAddress === '' || vehicalOwnerColor === '' || vehicalOwnerMake === '' || vehicalOwnerState === '' || vehicalOwnerTagno === '' || vehicalOwnerVtype === '' || vehicalOwnerModel === '' || 
        // suspectAddress === '' || suspectAge === '' || suspectCompl === '' || suspectDOB === '' || suspectHeight === '' || suspectName === '' || suspectNotes === '' || suspectPant === '' || suspectShirt === '' || suspectSOC === '' || suspectRace === '' || suspectWeight === '' ||
        // repDOB === '' || reportAddress === '' || reportCompanyName === '' || reportEvent === '' || reportNumber === '' || repPerson === '' || repPersonAddress === '' || repPersonCCN === '' || repPersonNotes === '' || repPersonPhone === '') {
        //     alert('Please Enter Complete Details' );
        // } 
        // else {
            rootRef.ref('/complaints').push(this.state);
            this.props.complaints(this.state)
        // }
    }

    render() {
        const pap = {
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        const styles = {
            display: 'inline-block',
            widthSize: {
                width: '300px',
            },
        };
        const { latitude, longitude } = this.state
        return (
            <div >
                {/* <Paper className="form" style={styles.form} zDepth={1} > */}
                <div className='form' >
                    <h3 className='headings'> Event Information</h3>
                    <TextField
                        floatingLabelText="Vehical Owner"
                        value={this.state.vehicalOwner}
                        onChange={this.changeState.bind(this, 'vehicalOwner')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Vehical Owner Address"
                        value={this.state.vehicalOwnerAddress}
                        onChange={this.changeState.bind(this, 'vehicalOwnerAddress')}
                        multiLine={true}
                        rows={2}
                        style={{textAlign: 'left', width: '300px',}}
                    /><br />
                    <TextField
                        floatingLabelText="Tag No"
                        floatingLabelFixed={true}
                        type='Number'
                        style={styles.widthSize}
                        value={this.state.vehicalOwnerTagno}
                        onChange={this.changeState.bind(this, 'vehicalOwnerTagno')}
                    /><br />
                    <TextField
                        floatingLabelText="State"
                        value={this.state.vehicalOwnerState}
                        onChange={this.changeState.bind(this, 'vehicalOwnerState')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Make"
                        value={this.state.vehicalOwnerMake}
                        onChange={this.changeState.bind(this, 'vehicalOwnerMake')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Model"
                        value={this.state.vehicalOwnerModel}
                        onChange={this.changeState.bind(this, 'vehicalOwnerModel')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Color"
                        value={this.state.vehicalOwnerColor}
                        onChange={this.changeState.bind(this, 'vehicalOwnerColor')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="V Type"
                        value={this.state.vehicalOwnerVtype}
                        onChange={this.changeState.bind(this, 'vehicalOwnerVtype')}
                        style={styles.widthSize}
                    />
                    <br />
                    <br />

                    <label style={{ textAlign: 'left' }} className='headings'> Suspect </label>
                    <TextField
                        floatingLabelText="Height"
                        value={this.state.suspectHeight}
                        onChange={this.changeState.bind(this, 'suspectHeight')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Weight"
                        value={this.state.suspectWeight}
                        onChange={this.changeState.bind(this, 'suspectWeight')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Name"
                        value={this.state.suspectName}
                        onChange={this.changeState.bind(this, 'suspectName')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        value={this.state.suspectAddress}
                        onChange={this.changeState.bind(this, 'suspectAddress')}
                        style={{textAlign: 'left', width: '300px',}}
                        multiLine={true}
                        rows={3}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Compl"
                        value={this.state.suspectCompl}
                        onChange={this.changeState.bind(this, 'suspectCompl')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Race"
                        value={this.state.suspectRace}
                        onChange={this.changeState.bind(this, 'suspectRace')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Age"
                        type='Number'
                        value={this.state.suspectAge}
                        onChange={this.changeState.bind(this, 'suspectAge')}
                        style={styles.widthSize}
                    /><br />
                    <DatePicker hintText="Suspect Date of Birth" formatDate={(date) => moment(date).format('DD-MM-YYYY')}  textFieldStyle={{width:'300px', padding: '10px 5px'}} value={this.state.suspectDOB} onChange={this._suspectDOB.bind(this)} />
                    <br />
                    <TextField
                        floatingLabelText="SOC"
                        value={this.state.suspectSOC}
                        onChange={this.changeState.bind(this, 'suspectSOC')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Shirt"
                        value={this.state.suspectShirt}
                        onChange={this.changeState.bind(this, 'suspectShirt')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Pant"
                        value={this.state.suspectPant}
                        onChange={this.changeState.bind(this, 'suspectPant')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Notes"
                        value={this.state.suspectNotes}
                        onChange={this.changeState.bind(this, 'suspectNotes')}
                        style={{textAlign: 'left', width: '300px',}}
                        multiLine={true}
                        rows={2}
                    />
                    <br />
                    <label className='headings'> Report# </label>
                    <TextField
                        floatingLabelText="Report Number"
                        type='Number'
                        value={this.state.reportNumber}
                        onChange={this.changeState.bind(this, 'reportNumber')}
                        style={styles.widthSize}
                    /><br />
                    <DatePicker hintText="Start Time" formatDate={(date) => moment(date).format('DD-MM-YYYY')} textFieldStyle={{width:'300px', padding: '10px 5px'}} value={this.state.startDtime} onChange={this._startDtime.bind(this)} />
                    <br />
                    <DatePicker hintText="End Time" formatDate={(date) => moment(date).format('DD-MM-YYYY')} textFieldStyle={{width:'300px', padding: '10px 5px'}} value={this.state.endDtime} onChange={this._endDtime.bind(this)} />
                    <br />
                    <TextField
                        floatingLabelText="Company Name"
                        value={this.state.reportCompanyName}
                        onChange={this.changeState.bind(this, 'reportCompanyName')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        value={this.state.reportAddress}
                        onChange={this.changeState.bind(this, 'reportAddress')}
                        style={styles.widthSize}
                    />
                    <br />
                    <DatePicker hintText="Reported Person Date of Birth" formatDate={(date) => moment(date).format('DD-MM-YYYY')} textFieldStyle={{width:'300px', padding: '10px 5px'}}  value={this.state.repDOB} onChange={this._repDOB.bind(this)} />
                    <br />
                    <TextField
                        floatingLabelText="Home Phone"
                        type='Number'
                        value={this.state.homePhone}
                        onChange={this.changeState.bind(this, 'homePhone')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Work Phone"
                        type='Number'
                        value={this.state.workPhone}
                        onChange={this.changeState.bind(this, 'workPhone')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Event"
                        value={this.state.reportEvent}
                        onChange={this.changeState.bind(this, 'reportEvent')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Rep. Person"
                        value={this.state.repPerson}
                        onChange={this.changeState.bind(this, 'repPerson')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Report Person Address"
                        value={this.state.repPersonAddress}
                        onChange={this.changeState.bind(this, 'repPersonAddress')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Phone"
                        type='Number'
                        value={this.state.repPersonPhone}
                        onChange={this.changeState.bind(this, 'repPersonPhone')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Notes"
                        value={this.state.repPersonNotes}
                        onChange={this.changeState.bind(this, 'repPersonNotes')}
                        style={{textAlign: 'left', width: '300px',}}
                        multiLine={true}
                        rows={2}
                    />
                    <TextField
                        floatingLabelText="CCN"
                        value={this.state.repPersonCCN}
                        onChange={this.changeState.bind(this, 'repPersonCCN')}
                        style={styles.widthSize}
                    />
                    <br />
                    <br />
                   <RaisedButton label="Submit" primary={true} onClick={this.submitIt} />
                    <h3>{this.state.error} </h3>
                {/* </Paper>
                 */}
                 </div>
            </div>
        )
    }
}

export default connect(null, { complaints })(ReportForm);