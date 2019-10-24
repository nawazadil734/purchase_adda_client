import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const title = {
    pageTitle: 'Forgot Password Screen'
};

class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            showError: false,
            messageFromServer: '',
        };
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    sendEmail = e => {
        e.preventDefault();
        if (this.state.email === '') {
            this.setState({ 
                showError: false,
                messageFromServer: ''
            });
        } else {
            axios.post('http://localhost:5000/forgotPassword', {
                email: this.state.email
            })
            .then(response => {
                console.log(response.data);
                if(response.data === 'email not in db') {
                    this.setState({
                        showError: true,
                        messageFromServer: ''
                    });
                } else if (response.data === 'recovery email sent') {
                    this.setState({
                        showError: false,
                        messageFromServer: 'recovery email sent'
                    });
                }
            })
            .catch(error => {
                console.log(error.data);
            });
        }
    };

    render() {
        const { email, messageFromServer} = this.state;
        return (
            <div>
                <label>Forgot Password Screen</label>
                <form onSubmit={this.sendEmail}>
                    <input type="text" id="email" label="email" value={email} onChange={this.handleChange('email')} placeholder="Email Address"/>
                    <button type="submit">Send Password Reset Email</button>
                </form>
                {/* {showNullError && (
                    <div>
                        <p>The email address cannot be null.</p>
                    </div>
                )}
                {showError &7 (
                    <div>
                        <p>
                            That email address ins't recognised. Please try again or register
                            for a new account.
                        </p>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                )}
                {messageFromServer === "recovery email sent" && (
                    <div>
                        <h3>Password Reset Email Successfully Sent!</h3>
                    </div>
                )}
                <Link to="/">Sign In</Link> */}
            </div>
        );
    }
}

export default ForgotPassword;