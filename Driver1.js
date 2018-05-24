import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import moment from 'moment';
import { rootRef } from '../database';
import history from '../history';
import * as firebase from 'firebase';
import DatePicker from 'material-ui/DatePicker';
import { complaints } from '../store/action';
import './form.css';


class DriverForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'vehicalReport',
            CCN: '',
            VINno: '',
            color: '',
            driverAddress: '',
            driverName: '',
            ins: '',
            make: '',
            model: '',
            ownerAddress: '',
            ownerName: '',
            ownerPhone: '',
            pass1Name: '',
            pass1Name2: '',
            pass1age: '',
            pass1age2: '',
            pass1phone: '',
            pass1phone2: '',
            pass1Address: '',
            pass1Address2: '',
            date: '',
            permitNo: '',
            policyNo: '',
            state: '',
            tagNo: '',
            year: '',
            error: ''


        }

    }
    changeState(formLabel, ev) {

        let currentState = {}
        currentState[formLabel] = ev.target.value
        this.setState(currentState)
        console.log(currentState)

    }
    _handleStartInput(lab, event, value) {
        let dateState = {};
        dateState[lab] = value
        this.setState(
            dateState
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
        //     const {CCN, VINno, color, driverAddress, driverName, ins, make, date,
        //     model, ownerAddress, ownerName, ownerPhone, pass1Address, pass1Address2, pass1age, pass1age2, pass1Name, pass1Name2, pass1phone, pass1phone2,
        //     permitNo, policyNo, state, tagNo, year,       
        //   } = this.state
        // if (CCN === '' || VINno === '' || color === '' || driverName === '' || driverAddress === '' || ins === '' || make === '' || model === '' || 
        // ownerAddress === '' || ownerName === '' || ownerPhone === '' || pass1Address === '' || pass1Address2 === '' || pass1age === '' || pass1age2 === '' || pass1Name === '' || pass1Name2 === '' || pass1phone === '' || pass1phone2 === '' || permitNo === '' ||
        // policyNo === '' || state === '' || tagNo === '' || year === '' ) {
        //     alert('Please Enter Complete Details');
        // } 
        // else {
            this.props.complaints(this.state)
            this.props.funPass()
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
                        floatingLabelText="Driver Name"
                        value={this.state.driverName}
                        onChange={this.changeState.bind(this, 'driverName')}
                        style={styles.widthSize}
                    /><br />
                    <DatePicker hintText="Driver Date" formatDate={(date) => moment(date).format('DD-MM-YYYY')} textFieldStyle={{ width: '300px', padding: '10px 5px' }} value={this.state.date} onChange={this._handleStartInput.bind(this, 'date')} />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        value={this.state.driverAddress}
                        onChange={this.changeState.bind(this, 'driverAddress')}
                        style={styles.widthSize}
                        multiLine={true}
                        rows={3}
                    /><br />
                    <TextField
                        floatingLabelText="Tag No"
                        floatingLabelFixed={true}
                        type='Number'
                        style={styles.widthSize}
                        value={this.state.tagNo}
                        onChange={this.changeState.bind(this, 'tagNo')}
                    /><br />
                    <TextField
                        floatingLabelText="Permit No"
                        floatingLabelFixed={true}
                        type='Number'
                        style={styles.widthSize}
                        value={this.state.permitNo}
                        onChange={this.changeState.bind(this, 'permitNo')}
                    /><br />
                    <TextField
                        floatingLabelText="State"
                        value={this.state.state}
                        onChange={this.changeState.bind(this, 'state')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Make"
                        value={this.state.make}
                        onChange={this.changeState.bind(this, 'make')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Model"
                        value={this.state.model}
                        onChange={this.changeState.bind(this, 'model')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Year"
                        value={this.state.year}
                        onChange={this.changeState.bind(this, 'year')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="VIN No"
                        type="Number"
                        value={this.state.VINno}
                        onChange={this.changeState.bind(this, 'VINno')}
                        style={styles.widthSize}
                    />
                    <br />
                    <br />
                    <TextField
                        floatingLabelText="Color"
                        value={this.state.color}
                        onChange={this.changeState.bind(this, 'color')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="INS"
                        value={this.state.ins}
                        onChange={this.changeState.bind(this, 'ins')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Policy No"
                        value={this.state.policyNo}
                        onChange={this.changeState.bind(this, 'policyNo')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="CCN"
                        type="Number"
                        value={this.state.CCN}
                        onChange={this.changeState.bind(this, 'CCN')}
                        style={styles.widthSize}
                    />
                    <br />
                    <br />
                    <label className='headings'> Owner #1 </label>
                    <TextField
                        floatingLabelText="Name"
                        value={this.state.ownerName}
                        onChange={this.changeState.bind(this, 'ownerName')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Phone"
                        type="Number"
                        value={this.state.ownerPhone}
                        onChange={this.changeState.bind(this, 'ownerPhone')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        type='Number'
                        value={this.state.ownerAddress}
                        onChange={this.changeState.bind(this, 'ownerAddress')}
                        style={styles.widthSize}
                        multiLine={true}
                        rows={3}
                    /><br />
                    <br />
                    <label className='headings'> Pass #1 </label>
                    <TextField
                        floatingLabelText="Name"
                        value={this.state.pass1Name}
                        onChange={this.changeState.bind(this, 'pass1Name')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Age"
                        type="Number"
                        value={this.state.pass1age}
                        onChange={this.changeState.bind(this, 'pass1age')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Phone"
                        type="Number"
                        value={this.state.pass1phone}
                        onChange={this.changeState.bind(this, 'pass1phone')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        value={this.state.pass1Address}
                        onChange={this.changeState.bind(this, 'pass1Address')}
                        style={{ textAlign: 'left', width: '300px', }}
                        multiLine={true}
                        rows={3}
                    />
                    <br />
                    <label className='headings'> Pass #2 </label>
                    <TextField
                        floatingLabelText="Name"
                        value={this.state.pass1Name2}
                        onChange={this.changeState.bind(this, 'pass1Name2')}
                        style={styles.widthSize}
                    /><br />

                    <TextField
                        floatingLabelText="Age"
                        type="Number"
                        value={this.state.pass1age2}
                        onChange={this.changeState.bind(this, 'pass1age2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Phone"
                        type="Number"
                        value={this.state.pass1phone2}
                        onChange={this.changeState.bind(this, 'pass1phone2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        value={this.state.pass1Address2}
                        onChange={this.changeState.bind(this, 'pass1Address2')}
                        style={styles.widthSize}
                    />

                    <br />
                    <br />
                    <RaisedButton label="Next" primary={true} onClick={this.submitIt} />
                    {/* </Paper>
                 */}
                </div>
            </div>
        )
    }
}

export default connect(null, { complaints })(DriverForm1);