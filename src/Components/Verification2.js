import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import axios from 'axios';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import '../css/SignIn.css';
import bgpng from './bgpng.png';

class Verification2 extends Component {

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


    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div>
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({input, type, label, meta, style}) => {
        // console.log(meta);
        return (
            <div>
                <input {...input}
                    autoComplete="off"
                    className={style}
                    type={type}
                    placeholder={label}
                // onChange={formProps.input.onChange} 
                // value={formProps.input.value}
            />
            {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    }

    render() {
        const { email, messageFromServer} = this.state;
        return (
            <div className="myImage">
                <img src={bgpng} id="bg" alt=""/>
                <div className="container" style={{alignContent:"center", backgroundColor:"#000000"}}>
                    <div style={{borderRadius:"15px", border:"1px solid #808080", position:"absolute", padding:"20pt", width:"500pt", height:"250pt", top:"50%", transform:"translate(-50%, -50%)", left: "50%", backgroundColor:"white"}}>
                        <div className="row" style={{textAlign:"center"}}>
                            <div className="col-sm-12">
                                <label style={{fontSize:"33pt", fontFamily:"'Cabin', sans-serif"}}>Purchase</label><label style={{fontSize:"33pt", color:"#0275d8", fontFamily:"'Cabin', sans-serif"}}>Adda</label>
                            </div> 
                        </div>
                        <hr/>
                        <div className="row" style={{textAlign:"center"}}>
                            <div className="col-sm-12">
                                <label style={{fontSize:"23pt", fontFamily:"'Cabin', sans-serif"}}>Forgot Password</label><br/>
                                <label style={{fontFamily:"'Open Sans', sans-serif"}}>Confirm the email and we'll send the password reset instructions.</label>
                                <br/>
                                <form  onSubmit={this.sendEmail}>
                                    <div className="form-group" style={{marginLeft:"15%", marginRight:"15%"}}>
                                        {/* <Field name="email" component={this.renderInput} label="Email" style="form-control"/> */}
                                        <input type="text" id="email" label="email" value={email} onChange={this.handleChange('email')} placeholder="Email Address" className="form-control"/><br/>
                                    </div>
                                    <div>
                                        {this.props.errorMessage}
                                    </div>
                                    <div style={{ textAlign : "center"}}>
                                        <button type="submit" className="btn btn-primary">Send Password Reset Email</button><br/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
}

const formWrapped =  reduxForm({
    form: "signin",
})(Verification2);

export default formWrapped;