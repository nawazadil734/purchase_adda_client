import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import '../css/SignIn.css';
import bgpng from './final.jpg';


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

    onSubmit = (formValues) => {
        this.props.signIn(formValues, () => {
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div className="myImage">
                <img src={bgpng} id="bg" alt="" style={{ position: "fixed",width:"1850px"}}/>
                <div className="container" style={{alignContent:"center", backgroundColor:"#000000"}}>
                    <div style={{borderRadius:"15px", border:"1px solid #808080", position:"absolute", padding:"20pt", width:"500pt", height:"250pt", top:"50%", transform:"translate(-50%, -50%)", left: "50%", backgroundColor:"white"}}>
                        <div class="row" style={{textAlign:"center", position:"relative", height:"100%"}}>
                            <div class="col-md-6 my-auto">
                                <label style={{fontSize:"25pt", fontFamily:"'Cabin', sans-serif"}}>Purchase</label><label style={{fontSize:"25pt", color:"#0275d8", fontFamily:"'Cabin', sans-serif"}}>Adda</label>
                                <label style={{fontFamily:"'Open Sans', sans-serif"}}>E-Commerce Simplified</label> 
                            </div>
                            <div class="col-md-6 border-left my-auto" style={{fontFamily:"'Cabin', sans-serif"}}>
                                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                    <div className="form-group">
                                        <Field name="email" component={this.renderInput} label="Email" style="form-control"/><br/>
                                        <Field name="password" component={this.renderInput} label="Password" style="form-control" type="password"/>
                                    </div>
                                    <div>
                                        {this.props.errorMessage}
                                    </div>
                                    <br/>
                                    <div style={{ textAlign : "center"}}>
                                        <button type="submit" className="btn btn-primary">Sign In</button><br/>
                                    </div><br/>
                                    <div style={{ textAlign : "center"}}>
                                        <label style={{color:"black", marginTop:"1%", marginRight:"5px"}}>New to PurchaseAdda?</label><Link to="/signup">Sign Up</Link><br/>
                                        <label style={{color:"black", marginTop:"1%", marginRight:"5px"}}>Forgot Password?</label><Link to="/verification">Click Here</Link><br/>
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
})(SignUp2);

// const formWrapped =  reduxForm({
//     form: "signin",
// })(SignUp2);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

// export default formWrapped;
export default connect(mapStateToProps, actions)(formWrapped);