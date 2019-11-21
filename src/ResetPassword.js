import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import '../css/SignIn.css';
var color_text = { color:"black"}

class resetPassword extends Component {

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

    onSubmit = (formValues) => {
        this.props.signIn(formValues, () => {
            this.props.history.push('/dashboard');
        });
    }
    
    render() {
        return (
            <div className="container" style={{justifyContent:"center"}}>
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="panel panel-grey" style={{ margin:"3% 25% 10%" }}>
                <div className="panel-heading"><h4>Reset Password</h4></div>
                <div className="panel-body" style={{ margin:"3% 5%"}}>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="box-login">
                        <div className="form-group">
                            <Field name="password" component={this.renderInput} label="Password" style="form-control" placeholder="Password"/><br/><br/>
                            <Field name="confirm_password" component={this.renderInput} label="Confirm Password" style="form-control" placeholder="Confirm Password"/><br/><br/>
                        </div>
                        <div>
                            {this.props.errorMessage}
                        </div>
                        <div style={{ textAlign : "center"}}>
                            <button type="submit" class="btn btn-primary">Reset Password</button><br/>
                        </div>
                    </form>
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
        errors.password = "Please enter your new Password";
    }
    if(!formValues.password) {
        errors.confirm_password = "Please re-enter your new Password";
    }
    return errors;
}

const formWrapped =  reduxForm({
    form: "resetpassword",
    validate: validate
})(resetPassword);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions)(formWrapped);