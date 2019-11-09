import React, { Component } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
const loading = {
    margin: '1em',
    fontSize: '24px'    
};

export default class ResetPassword extends Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            update: false,
            isLoading: true,
            error: false
        };
    }

    async componentDidMount() {
        console.log(this.props.match.params.token);
        await axios.get('http://localhost:5000/reset/', {
                params: {
                    resetPasswordToken: this.props.match.params.token
                },
            })
            .then(response => {
                console.log(response);
                if(response.data.message === 'password reset link a-ok') {
                    this.setState({
                        userName: response.data.userName,
                        update: false,
                        isLoading: false,
                        error: false
                    });
                } else {
                    this.setState({
                        update: false,
                        isLoading: false,
                        error: true
                    });
                }
            })
            .catch(error => {
                console.log(error.data);
            });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    updatePassword = e => {
        e.preventDefault();
        axios.put('http://localhost:5000/updatePasswordViaEmail', {
                userName: this.state.userName,
                password: this.state.password
            })
            .then(response => {
                console.log(response.data);
                if (response.data.message === 'password updated') {
                    this.setState({
                        updated: true,
                        error: false
                    });
                } else {
                    this.setState({
                        updated: false,
                        error: true
                    });
                }
            })
            .catch(error => {
                console.log(error.data);
            });
    };

    render() {
        const {password, error, isLoading} = this.state;

        if(error) {
            return (
                <div>
                    <label>Password Reset Screen</label>
                    <div style={loading}>
                        <h4>
                            Problem resetting password. Please send another reset link.
                        </h4>
                        <Link to="/">Home</Link>
                        <Link to="/verification">Forgot Passowrd?</Link>
                    </div>
                </div>
            );
        } else if(isLoading) {
            return (
                <div>
                    <label>Password Reset Screen</label>
                    <div style={loading}>Loading User Data...</div>
                </div>
            );
        } else {
            return (
                <div>
                    <label>Password Reset Screen</label>
                    <form onSubmit={this.updatePassword}>
                        <input id="password" label="password" onChange={this.handleChange('password')} value={password} type="password"/>
                        <button type="submit">Update Password</button>
                    </form>
                </div>
            )
        }
    }
}