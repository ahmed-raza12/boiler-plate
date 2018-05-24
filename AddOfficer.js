import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import history from '../history';
import * as firebase from 'firebase';
import { user } from '../store/action';


class AddOfficer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            id: '',
            cellNo: '',
            uid: '',
            error: ''

        }

    }
    changeState(formLabel, ev) {

        let currentState = {}
        currentState[formLabel] = ev.target.value
        this.setState(currentState)

    }
    submitIt = () => {
        const {email, name, password, id, cellNo, uid} = this.state
        if (name === '' || email === '' || id === '' || password === '' || cellNo === '') {
            this.setState({ error: 'Please Enter Complete Details' });
        } else if (email === email.indexOf("@") < 1 || email.indexOf("@") > email.length - 5) {
            alert('email address  is badly formated')
        } else if (password.length < 6) {
            alert('password  must be atleast 6')
        }
        else {
            this.props.user(this.state)
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
            form: {
                width: 380,
                margin: '3em auto',
                padding: '3em 2em 2em 2em',
                background: '#fafafa',
                border: '1px solid #ebebeb',
                boxShadow: `rgba(0,0,0,0.14902) ${'0px 1px 1px 0px'}`
            },
            float: {
                color: '#005183',
                border: '2px solid #005183'
            }
        };
        return (
            <div >
                <Paper style={styles.form} zDepth={1} >
                    <h3> Officer Information</h3>
                    <TextField
                        floatingLabelText="Name"
                        value={this.state.name}
                        onChange={this.changeState.bind(this, 'name')}
                        style={styles.widthSize}
                        floatingLabelShrinkStyle={{color: '#005183'}}
                        underlineFocusStyle={{border: '1px solid #005183'}}
                    /><br />
                    <TextField
                        value={this.state.email}
                        floatingLabelText="Email"
                        onChange={this.changeState.bind(this, 'email')}
                        style={styles.widthSize}
                        floatingLabelShrinkStyle={{color: '#005183'}}
                        underlineFocusStyle={{border: '1px solid #005183'}}
                    /><br />
                    <TextField
                        value={this.state.password}
                        floatingLabelText="Password"
                        type="password"
                        onChange={this.changeState.bind(this, 'password')}
                        style={styles.widthSize}
                        floatingLabelShrinkStyle={{color: '#005183'}}
                        underlineFocusStyle={{border: '1px solid #005183'}}
                    /><br />
                    <TextField
                        floatingLabelText="Employee ID"
                        value={this.state.id}
                        onChange={this.changeState.bind(this, 'id')}
                        style={styles.widthSize}
                        floatingLabelShrinkStyle={{color: '#005183'}}
                        underlineFocusStyle={{border: '1px solid #005183'}}
                    /><br />
                    <TextField
                        floatingLabelText="Cell Number"
                        floatingLabelFixed={true}
                        type='Number'
                        style={styles.widthSize}
                        value={this.state.cellNo}
                        onChange={this.changeState.bind(this, 'cellNo')}
                        floatingLabelShrinkStyle={{color: '#005183', }}
                        underlineFocusStyle={{border: '1px solid #005183'}}
                    /><br />
                    <RaisedButton label="Submit" primary={true} onClick={this.submitIt} />
                    <h3>{this.state.error} </h3>
                </Paper>
            </div>
        )
    }
}

export default connect(null, { user })(AddOfficer);