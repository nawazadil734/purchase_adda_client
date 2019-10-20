import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
import '../css/SignUp.css';
import Particles from 'react-particles-js';

var color_text = { color:"black"}

class SignUp extends Component {
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

    renderInput = ({input, label, meta, type, style, placeholder}) => {
        return (
            <div>
                <label style={color_text}>{label}</label>
                <input {...input}

                    class={style}
                    type={type}
                    autoComplete="off"
                    placeholder = {placeholder}
                    type={type}
                // onChange={formProps.input.onChange} 
                // value={formProps.input.value}
            />
            {this.renderError(meta)}
            </div>
        );
    }

    renderField = ({input, label, rows, cols, meta, placeholder, style, type}) => {
        return (
            <div>
                <label style = {color_text}>{label}</label><br/>
                <textArea {...input} rows={rows} cols={cols} placeholder={placeholder} class={style} type={type}></textArea>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        // event.preventDefault();
        // console.log(formValues);
        this.props.signUp(formValues, () => {
            this.props.history.push('/dashboard');
        });
    };

    render() {
        return (
            <div>
                 <Particles
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#FFFFFF"
                                    },
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                        width: '100%',
                        background: "linear-gradient(to right, rgb(15, 128, 240), rgb(245, 39, 10))",
                        position: 'fixed',
                        zIndex: -1
                 }}
                />
            <div className="container" style={{justifyContent:"center"}}>
                    <div className="container" style={{ display:"flex", justifyContent:"center", marginTop:"0%"}}>
                        <img alt="logo" src="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg" style={{ width:"10%", height:"10%"}}></img>
                    </div>
                    <div>
                    <div className="panel panel-grey" style={{ margin:"1% 25% 10%" }}>
                        <div class="panel-body" style={{ margin:"1% 5%"}}>
                        <div style={{textAlign:"center"}}><br/><h2>Sign Up</h2><br/></div>
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="box-signup">
                                <div className="form-group">
                                    <Field name="userName" component={this.renderInput} label="User Name" style="form-control" placeholder = "User Name" type="text"/><br/>
                                    <Field name="email" component={this.renderInput} label="Email" style="form-control" placeholder = "Email" type="email"/><br/>
                                    <Field name="password" component={this.renderInput} label="Password" style="form-control" placeholder = "Password" type="password"/><br/>
                                    <Field name="confirmPassword" component={this.renderInput} label="Confirm Password" style="form-control" placeholder="Confirm Password" type="password"/><br/>
                                    <Field name="firstName" component={this.renderInput} label="First Name" style="form-control" placeholder="First Name" type="text"/><br/>
                                    <Field name="lastNname" component={this.renderInput} label="Last Name" style="form-control" placeholder= "Last Name" type="text"/><br/>
                                    <Field name="phoneNumber" component={this.renderInput} label="Phone Number" style="form-control" placeholder = "Phone Number" type="text"/><br/>
                                    <Field name="address" component={this.renderField} label="Address" style="form-control" placeholder="Address" rows="4" type="text"/><br/>
                                </div>
                                <div>
                                    {this.props.errorMessage}
                                </div>
                                <div style={{ textAlign : "center"}}>
                                    <button type="submit" class="btn btn-primary">Sign Up</button><br/>
                                </div>
                            </form>
                            <div style={{ textAlign : "center"}}>
                                <label style={{color:"black", marginTop:"1%", marginRight:"5px"}}>Already have an account?</label><Link to="/">Login</Link>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
        );
    }
}


const validate = (formValues) => {
    const errors = {};
    if(!formValues.firstName) {
        errors.firstName = "You must enter First Name";
    }
    if(!formValues.lastName) {

    }
    if(!formValues.phoneNumber) {
        errors.phoneNumber = "You must enter Phone Number";
    }
    if(!formValues.userName) {
        errors.userName = "You must enter a User Name";
    }
    if(!formValues.email) {
        errors.email = "You must enter a Email";
    }
    if(!formValues.password || formValues.password.lenght < 8) {
        errors.password = "You must enter a passpord";
    }
    if(!formValues.confirmPassword) {
        errors.confirmPassword = "You must enter a Confirm Password";
    }

    if(formValues.password !== formValues.confirmPassword) {
        errors.confirmPassword = "Passwords doesn't match";
    }
    if(!formValues.address) {
        errors.address = "You must enter an address";
    }

    return errors;
}

const formWrapped =  reduxForm({
    form: 'signup',
    validate: validate
})(SignUp);


function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions )(formWrapped);