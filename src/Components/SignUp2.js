import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import '../css/SignIn.css';
import bgpng from './bgpng.png';
var color_text = { color:"black"}

class SignUp2 extends Component {

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
            this.props.history.push('/');
        });
    };

    render() {
        return (
            <div className="myImage">
                <img src={bgpng} id="bg" alt=""/>
                <div className="container" style={{alignContent:"center", backgroundColor:"#000000"}}>
                    <div style={{borderRadius:"15px", border:"1px solid #808080", position:"absolute", padding:"20pt", width:"700pt", height:"400pt", top:"50%", transform:"translate(-50%, -50%)", left: "50%", backgroundColor:"white"}}>
                        <div className="row" style={{textAlign:"center"}}>
                            <div className="col-sm-12">
                                <label style={{fontSize:"33pt", fontFamily:"'Cabin', sans-serif"}}>Purchase</label><label style={{fontSize:"33pt", color:"#0275d8", fontFamily:"'Cabin', sans-serif"}}>Adda</label>
                            </div> 
                        </div>
                        <hr/>
                        <div className="row" style={{textAlign:"center"}}>
                            <div className="col-sm-12">
                                <label style={{fontSize:"20pt", fontFamily:"'Cabin', sans-serif", marginBottom:"4pt"}}>Sign Up</label><br/>
                                <label style={{fontFamily:"'Open Sans', sans-serif", marginBottom:"15pt"}}>Please enter the required details below to sign up with PurchaseAdda.</label>
                            </div>
                        </div>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <div class="row" style={{textAlign:"center", position:"relative", height:"100%"}}>
                                <div class="col-md-6 my-auto" style={{fontFamily:"'Cabin', sans-serif"}}>
                                    <div name="form-group">
                                        <Field name="userName" component={this.renderInput} label="User Name" style="form-control" placeholder = "User Name" type="text"/><br/>
                                        <Field name="email" component={this.renderInput} label="Email" style="form-control" placeholder = "Email" type="email"/><br/>
                                        <Field name="password" component={this.renderInput} label="Password" style="form-control" placeholder = "Password" type="password"/><br/>
                                        <Field name="confirmPassword" component={this.renderInput} label="Confirm Password" style="form-control" placeholder="Confirm Password" type="password"/><br/>
                                    </div>
                                </div>
                                <div class="col-md-6 my-auto" style={{fontFamily:"'Cabin', sans-serif"}}>
                                    <div name="form-group">
                                        <div className="row">
                                            <div className="col-sm-6"><Field name="firstName" component={this.renderInput} label="First Name" style="form-control" placeholder="First Name" type="text"/></div>
                                            <div className="col-sm-6"><Field name="lastName" component={this.renderInput} label="Last Name" style="form-control" placeholder= "Last Name" type="text"/></div>
                                        </div>
                                        <br/>
                                        <Field name="phoneNumber" component={this.renderInput} label="Phone Number" style="form-control" placeholder = "Phone Number" type="text"/><br/>
                                        <Field name="streetNo" component={this.renderInput} label="Street No." style="form-control" placeholder="Street No." rows="4" type="text"/><br/>
                                        <div className="row">
                                            <div className="col-sm-6"><Field name="city" component={this.renderInput} label="City" style="form-control" placeholder="City" rows="4" type="text"/></div>
                                            <div className="col-sm-6"><Field name="state" component={this.renderInput} label="State" style="form-control" placeholder="State" rows="4" type="text"/></div>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div style={{ textAlign : "center"}}>
                                <button type="submit" className="btn btn-primary">Sign Up</button><br/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
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
})(SignUp2);


function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions )(formWrapped);