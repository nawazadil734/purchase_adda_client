import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
// import axios from '../apis/apis';
import '../css/SignIn.css';


class Verification extends Component {

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

    renderInput = ({input,value, type, label, meta, style, placeholder}) => {
        console.log(meta);
        return (
            <div>
                <label>{label}</label>
                <input {...input}
                    value = {value}
                    autoComplete="off"
                    class={style}
                    type={type}
                    placeholder={placeholder}
                    onChange={this.handleChange('email')}
                // onChange={formProps.input.onChange} 
                // value={formProps.input.value}
            />
            {this.renderError(meta)}
            </div>
        );
    }

    // onSubmit = (formValues) => {
    //     this.props.signIn(formValues, () => {
    //         this.props.history.push('/dashboard');
    //     });
    // }
    
    render() {

        const { email, messageFromServer, showNullError, showError } = this.state;
        return (
            <div className="container" style={{justifyContent:"center"}}>
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="panel panel-grey" style={{ margin:"3% 25% 10%" }}>
                <div className="panel-heading"><h4>Account Verification</h4></div>
                <div className="panel-body" style={{ margin:"3% 5%"}}>
                <form onSubmit={this.props.handleSubmit(this.sendEmail)} className="box-login">
                        <div className="form-group">
                            <Field name="email" component={this.renderInput} label="Email" style="form-control" placeholder="Email Address" value={email} type="email"/>
                        </div>
                        <div style={{ textAlign : "center"}}>
                            <button type="submit" class="btn btn-primary">Verify</button><br/>
                        </div>
                    </form><br/>
                    {showNullError && (
                        <div>
                        <p>The email address cannot be null.</p>
                        </div>
                    )}
                    {showError && (
                        <div>
                            <p>
                                That email address insn't recognized. Please try again or register for a new account.
                            </p>
                        </div>
                    )}
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
    return errors;
}

const formWrapped =  reduxForm({
    form: "forgotpassword",
    validate: validate
})(Verification);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions)(formWrapped);