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


class DriverForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CCN2: '',
            VINno2: '',
            color2: '',
            driverAddress2: '',
            driverName2: '',
            ins2: '',
            make2: '',
            model2: '',
            ownerAddress2: '',
            ownerName2: '',
            ownerPhone2: '',
            pass2name: '',
            pass2name2: '',
            pass2age: '',
            pass2age2: '',
            pass2phone: '',
            pass2phone2: '',
            pass2Address: '',
            pass2Address2: '',
            dateDriver2: '',
            permitNo2: '',
            policyNo2: '',
            state2: '',
            tagNo2: '',
            year2: '',


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
            dateState = value
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
        const { CCN2, VINno2, color2, driverAddress2, driverName2, ins2, make2, dateDriver2,
            model2, ownerAddress2, ownerName2, ownerPhone2, pass2Address, pass2Address2, pass2age, pass2age2, pass2name, pass2name2, pass2phone, pass2phone2,
            permitNo2, policyNo2, state2, tagNo2, year2,
        } = this.state
        // if (CCN2 === '' || VINno2 === '' || color2 === '' || driverName2 === '' || driverAddress2 === '' || ins2 === '' || make2 === '' || model2 === '' ||
        //     ownerAddress2 === '' || ownerName2 === '' || ownerPhone2 === '' || pass2Address === '' || pass2Address2 === '' || pass2age === '' || pass2age2 === '' || pass2Name === '' || pass2Name2 === '' || pass2phone === '' || pass2phone2 === '' || permitNo2 === '' ||
        //     policyNo2 === '' || state2 === '' || tagNo2 === '' || year2 === '') {
        //      alert('Please Enter Complete Details');
        // }
        // else {
            // rootRef.ref('/complaints').push(null, this.state);
            // this.props.complaints(null, this.state)
            let complaints2Data = this.props.complaintsData;
            complaints2Data.CCN2 = CCN2;
            complaints2Data.VINno2 = VINno2;
            complaints2Data.color2 = color2;
            complaints2Data.driverAddress2 = driverAddress2;
            complaints2Data.driverName2 = driverName2;
            complaints2Data.ins2 = ins2;
            complaints2Data.make2 = make2;
            complaints2Data.model2 = model2;
            complaints2Data.ownerAddress2 = ownerAddress2;
            complaints2Data.ownerName2 = ownerName2;
            complaints2Data.ownerPhone2 = ownerPhone2;
            complaints2Data.pass2phone2 = pass2phone2;
            complaints2Data.pass2Address = pass2Address;
            complaints2Data.pass2Address2 = pass2Address2;
            complaints2Data.pass2age = pass2age;
            complaints2Data.pass2age2 = pass2age2;
            complaints2Data.pass2phone = pass2phone;
            complaints2Data.pass2name = pass2name;
            complaints2Data.pass2name2 = pass2name2;
            complaints2Data.year2 = year2;
            complaints2Data.state2 = state2;
            complaints2Data.permitNo2 = permitNo2;
            complaints2Data.policyNo2 = policyNo2;
            complaints2Data.tagNo2 = tagNo2;
            complaints2Data.dateDriver2 = dateDriver2;
            rootRef.ref('/complaints').push(complaints2Data)
            this.props.complaints(complaints2Data)
            console.log(complaints2Data);
            this.props.finish()
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
        const { latitude, longitude } = this.state;
        return (
            <div >
                {/* <Paper className="form" style={styles.form} zDepth={1} > */}
                <RaisedButton label="Back" primary={true} onClick={this.props.goBack} />
                <RaisedButton label="Finish" disabled={true} primary={true} onClick={this.props.finish} />
                <div className='form' id="top" >
                    <br />
                    <h3 className='headings'> Driver #2</h3>
                    <TextField
                        floatingLabelText="Driver Name"
                        value={this.state.driverName2}
                        onChange={this.changeState.bind(this, 'driverName2')}
                        style={styles.widthSize}
                    /><br />
                    <DatePicker hintText="Driver Date" formatDate={(date) => moment(date).format('DD-MM-YYYY')} textFieldStyle={{ width: '300px', padding: '10px 5px' }} value={this.state.dateDriver2} onChange={this._handleStartInput.bind(this, 'dateDriver2')} />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        value={this.state.driverAddress2}
                        onChange={this.changeState.bind(this, 'driverAddress2')}
                        style={styles.widthSize}
                        multiLine={true}
                        rows={3}
                    /><br />
                    <TextField
                        floatingLabelText="Tag No"
                        floatingLabelFixed={true}
                        type='Number'
                        style={styles.widthSize}
                        value={this.state.tagNo2}
                        onChange={this.changeState.bind(this, 'tagNo2')}
                    /><br />
                    <TextField
                        floatingLabelText="Permit No"
                        floatingLabelFixed={true}
                        type='Number'
                        style={styles.widthSize}
                        value={this.state.permitNo2}
                        onChange={this.changeState.bind(this, 'permitNo2')}
                    /><br />
                    <TextField
                        floatingLabelText="State"
                        value={this.state.state2}
                        onChange={this.changeState.bind(this, 'state2')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Make"
                        value={this.state.make2}
                        onChange={this.changeState.bind(this, 'make2')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Model"
                        value={this.state.model2}
                        onChange={this.changeState.bind(this, 'model2')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Year"
                        value={this.state.year2}
                        onChange={this.changeState.bind(this, 'year2')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="VIN No"
                        type="Number"
                        value={this.state.VINno2}
                        onChange={this.changeState.bind(this, 'VINno2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <br />
                    <TextField
                        floatingLabelText="Color"
                        value={this.state.color2}
                        onChange={this.changeState.bind(this, 'color2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="INS"
                        value={this.state.ins2}
                        onChange={this.changeState.bind(this, 'ins2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Policy No"
                        value={this.state.policyNo2}
                        onChange={this.changeState.bind(this, 'policyNo2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="CCN"
                        type="Number"
                        value={this.state.CCN2}
                        onChange={this.changeState.bind(this, 'CCN2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <br />
                    <label className='headings'> Owner #1 </label>
                    <TextField
                        floatingLabelText="Name"
                        value={this.state.ownerName2}
                        onChange={this.changeState.bind(this, 'ownerName2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Phone"
                        type="Number"
                        value={this.state.ownerPhone2}
                        onChange={this.changeState.bind(this, 'ownerPhone2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        type='Number'
                        value={this.state.ownerAddress2}
                        onChange={this.changeState.bind(this, 'ownerAddress2')}
                        style={styles.widthSize}
                        multiLine={true}
                        rows={3}
                    /><br />
                    <br />
                    <label className='headings'> Pass #1 </label>
                    <TextField
                        floatingLabelText="Name"
                        value={this.state.pass2name}
                        onChange={this.changeState.bind(this, 'pass2name')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Age"
                        type="Number"
                        value={this.state.pass2age}
                        onChange={this.changeState.bind(this, 'pass2age')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Phone"
                        type="Number"
                        value={this.state.pass2phone}
                        onChange={this.changeState.bind(this, 'pass2phone')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        value={this.state.pass2Address}
                        onChange={this.changeState.bind(this, 'pass2Address')}
                        style={{ textAlign: 'left', width: '300px', }}
                        multiLine={true}
                        rows={3}
                    />
                    <br />
                    <label className='headings'> Pass #2 </label>
                    <TextField
                        floatingLabelText="Name"
                        value={this.state.pass2name2}
                        onChange={this.changeState.bind(this, 'pass2name2')}
                        style={styles.widthSize}
                    /><br />

                    <TextField
                        floatingLabelText="Age"
                        type="Number"
                        value={this.state.pass2age2}
                        onChange={this.changeState.bind(this, 'pass2age2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Phone"
                        type="Number"
                        value={this.state.pass1phone2}
                        onChange={this.changeState.bind(this, 'pass2phone2')}
                        style={styles.widthSize}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Address"
                        value={this.state.pass2Address2}
                        onChange={this.changeState.bind(this, 'pass2Address2')}
                        style={styles.widthSize}
                    />

                    <br />
                    <br />
                    <RaisedButton label="Submit" primary={true} onClick={this.submitIt} />
                    {/* </Paper>
                 */}
                </div>
            </div>
        )
    }
}



function mapStateToProps(state) {
    console.log(state)
    return {
        // reducer: state.reducer.studentData,
        complaintsData: state.reducer.complaintsData
    }
    console.log(this.props.complaintsData)
}
export default connect(mapStateToProps, { complaints })(DriverForm2);