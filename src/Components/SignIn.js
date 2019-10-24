import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import Particles from 'react-particles-js';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import '../css/SignIn.css';

class SignIn extends Component {

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
                <label>{label}</label>
                <input {...input}
                    autoComplete="off"
                    className={style}
                    type={type}
                // onChange={formProps.input.onChange} 
                // value={formProps.input.value}
            />
            {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.signIn(formValues, () => {
            this.props.history.push('/dashboard');
        });
    }
    
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
                <div class="container" style={{ display:"flex", justifyContent:"center", marginTop:"0%"}}>
                    <br/><br/><img alt="logo" src="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg" style={{ width:"10%", height:"10%"}}></img>
                </div>
                <div>
                <div className="panel panel-grey rounded" style={{ margin:"1% 25% 10%" }}>
                <div className="panel-body" style={{ margin:"3% 5%"}}>
                <div style={{textAlign:"center"}}><br/><h2>Sign In</h2><br/></div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="box-login">
                        <div className="form-group">
                            <Field name="email" component={this.renderInput} label="Email" style="form-control"/><br/><br/>
                            <Field name="password" component={this.renderInput} label="Password" style="form-control" type="password"/><br/><br/>
                        </div>
                        <div>
                            {this.props.errorMessage}
                        </div>
                        <div style={{ textAlign : "center"}}>
                            <button type="submit" class="btn btn-primary" style={{}}>Sign In</button><br/>
                        </div>
                    </form>
                    <div style={{ textAlign : "center"}}>
                        <label style={{color:"black", marginTop:"1%", marginRight:"5px"}}>New to PurchaseAdda?</label><Link to="/signup">Sign Up</Link><br/>
                        <label style={{color:"black", marginTop:"1%", marginRight:"5px"}}>Forgot Password?</label><Link to="/verification">Click Here</Link><br/>
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
    const errors = {}
    if(!formValues.email) {
        errors.email = "Please enter your email";
    }
    if(!formValues.password) {
        errors.password = "Please enter your password";
    }
    return errors;
}

const formWrapped =  reduxForm({
    form: "signin",
    validate: validate
})(SignIn);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions)(formWrapped);