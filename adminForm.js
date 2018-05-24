import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import history from '../history';
import * as firebase from 'firebase';
import { logIn } from '../store/action';
import { connect } from 'react-redux';

class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    signIn = () => {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((success) => {
                console.log('user logged in successfully')
                let uId = firebase.auth().currentUser;
                this.props.logIn(uId)
                history.push('./main')
            })
            .catch((error) => {
                alert(error)
            })
    }
    changeEmail = (ev) => {
        this.setState({
            email: ev.target.value,
        })
    }
    changePassword = (ev) => {
        this.setState({
            password: ev.target.value
        })
    }

    render() {
        const styles = {
            display: 'inline-block',
            widthSize: {
                width: '400px'
            }
        };
        const form = {
                width: 380,
                margin: '3em auto',
                padding: '3em 2em 2em 2em',
                background: '#fafafa',
                border: '1px solid #ebebeb',
                boxShadow: `rgba(0,0,0,0.14902) ${'0px 1px 1px 0px'}`
        }
        return (
            <div style={form}>
                <h2> Admin Signin  </h2>
                <TextField
                    value={this.state.email}
                    onChange={this.changeEmail}
                    hintText="Email Field"
                    floatingLabelText="Email"
                    
                    style={styles.widthSize}
                /><br />
                <TextField
                    value={this.state.password}
                    hintText="Password Field"
                    floatingLabelText="Password"
                    onChange={this.changePassword}
                    type="password"
                    style={styles.widthSize}
                /><br />
                <RaisedButton label="Submit" labelColor="white" backgroundColor='#005183' primary={false} onClick={this.signIn} />
            </div>
        )
    }
}

export default connect(null, {logIn}) (AdminForm);