import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import { connect } from 'react-redux';
import { rootRef } from '../database';
import history from '../history';
import * as firebase from 'firebase';
import DatePicker from 'material-ui/DatePicker';
import { complaints } from '../store/action';
import './form.css'
class RollCallForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'rollCall',
            CheckoffOfficial: '',
            assignment: '',
            ccn: '',
            codeWord: '',
            date: '',
            notes: '',
            rollcallOfficial: '',
            scout: '',
            watchComm: '',
            location: {},


        }

    }
    changeState(formLabel, ev) {

        let currentState = {}
        currentState[formLabel] = ev.target.value
        this.setState(currentState)
        console.log(currentState)

    }
    _handleStartInput(lab, event, value) {
        this.setState(
            {date : value}
        )
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
        const {
            notes, scout, rollcallOfficial, ccn, codeWord, date, watchComm, assignment, CheckoffOfficial,
        } = this.state
        if (notes === '' || scout === '' || ccn === '' || codeWord === '' || watchComm === '' || assignment === '' || rollcallOfficial === '' || CheckoffOfficial === '') {
            alert('Please Enter Complete Details' );
        }
        else {
            rootRef.ref('/complaints').push(this.state);
            this.props.complaints(this.state)
        }
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
                    <h3 className='headings'> Roll Call</h3>
                    <DatePicker hintText=" Date" formatDate={(date) => moment(date).format('DD-MM-YYYY')} textFieldStyle={{ width: '300px', padding: '10px 5px' }} value={this.state.date} onChange={this._handleStartInput.bind(this, 'date')} />
                    <br />
                    <TextField
                        floatingLabelText="Rollcall Official"
                        value={this.state.rollcallOfficial}
                        onChange={this.changeState.bind(this, 'rollcallOfficial')}
                        style={styles.widthSize}
                    /><br />

                    <TextField
                        floatingLabelText="Checkoff Official"
                        style={styles.widthSize}
                        value={this.state.CheckoffOfficial}
                        onChange={this.changeState.bind(this, 'CheckoffOfficial')}
                    /><br />
                    <TextField
                        floatingLabelText="Watch Comm"
                        value={this.state.watchComm}
                        onChange={this.changeState.bind(this, 'watchComm')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Code Word"
                        value={this.state.codeWord}
                        onChange={this.changeState.bind(this, 'codeWord')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Assignment"
                        value={this.state.assignment}
                        onChange={this.changeState.bind(this, 'assignment')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Scout"
                        value={this.state.scout}
                        onChange={this.changeState.bind(this, 'scout')}
                        style={styles.widthSize}
                    /><br />
                    <TextField
                        floatingLabelText="Notes"
                        value={this.state.notes}
                        onChange={this.changeState.bind(this, 'notes')}
                        multiLine={true}
                        rows={2}
                        style={{ textAlign: 'left', width: '300px', }}
                    /><br />
                    <TextField
                        floatingLabelText="CCN"
                        value={this.state.ccn}
                        onChange={this.changeState.bind(this, 'ccn')}
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

export default connect(null, { complaints })(RollCallForm);