import React, {Component} from 'react';
import axios from 'axios';
import '../css/SignUp.css';
import {Link} from 'react-router-dom';
import requireAuth from './requireAuth';
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
            <div className="container" style={{justifyContent:"center"}}>
                <div class="container" style={{ display:"flex", justifyContent:"center", marginTop:"0%"}}>
                    <br/><br/><img alt="logo" src="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg" style={{ width:"10%", height:"10%"}}></img>
                </div>
                <div>
                    <div className="panel panel-grey rounded" style={{ margin:"1% 25% 10%" }}>
                        <div className="panel-body" style={{ margin:"3% 5%"}}>
                            <div style={{textAlign:"center"}}><br/><h2>Forgot Password</h2><br/></div>
                            <form onSubmit={this.sendEmail} className="box-login">
                                <div className="form-group" style={{textAlign:"center"}}>
                                    <label style={{marginBottom:"15pt"}}>Confirm the email and we'll send the password reset instructions.</label>
                                    <input type="text" id="email" label="email" value={email} onChange={this.handleChange('email')} placeholder="Email Address" className="form-control"/><br/>
                                    <button type="submit" className="btn btn-primary">Send Password Reset Email</button>
                                </div>
                            </form>
                            <br/>
                        </div>
                    </div>
                </div>
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

export default requireAuth(ForgotPassword);