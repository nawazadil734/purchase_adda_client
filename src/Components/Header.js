import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { reset, Field, reduxForm} from 'redux-form';
import requireAuth from './requireAuth';
import * as actions from '../actions/index';
class Header extends Component {

    onSubmit = (formValues) => {
        this.props.queryResult(formValues);
    }

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
                    style={{ width: "400px"}}
                    
                // onChange={formProps.input.onChange} 
                // value={formProps.input.value}
            />
            {/* {this.renderError(meta)} */}
            </div>
        );
    }


    render() {
        return(
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-light fixed-top " style={{ backgroundColor: "whitesmoke"}}>
                <Link className="navbar-brand" to="/" style={{marginLeft:"15pt", marginRight:"15pt"}}><label style={{fontSize:"20pt", fontFamily:"'Cabin', sans-serif"}}>Purchase</label><label style={{fontSize:"20pt", color:"#0275d8", fontFamily:"'Cabin', sans-serif"}}>Adda</label></Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <b><Link className="nav-link" to="/saleItems" style={{marginLeft:"10pt", marginRight:"10pt"}} >Buy</Link></b>
                        </li>
                        <li className="nav-item">
                            <b><Link className="nav-link" to="/rentItems" style={{marginLeft:"10pt", marginRight:"10pt"}}>Lend</Link></b>
                        </li>
                        <li className="nav-item">
                            <b><Link className="nav-link" to="/requestedWTBItems" style={{marginLeft:"10pt", marginRight:"10pt"}}>Request Buy Item</Link></b>
                        </li>
                        <li className="nav-item">
                            <b><Link className="nav-link" to="/requestedWTRItems" style={{marginLeft:"10pt", marginRight:"10pt"}}>Request Rent Item</Link></b>
                        </li>
                        <li className="nav-item">
                            <b><Link className="nav-link" to="/knowMore" style={{marginLeft:"10pt", marginRight:"10pt"}}>Know More</Link></b>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mr-1">
                        
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                            <div className="ui icon input">
                                <Field name="query" component={this.renderInput} style="form-control"/>
                            {/* <input className="form-control mr-sm-2" type="text" style={{width: "300px"}} placeholder="Search"></input> */}
                            {/* <div className="input-group-append"> */}
                            <button className="btn btn-primary" type="submit" style={{ height: "33px"}}>Search</button>
                            {/* </div> */}
                        </div>
                        </form>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbardrop" data-toggle="dropdown">
                                <i className="far fa-user" style={{paddingRight: "3px"}}></i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                <Link className="dropdown-item" to="/setting">Settings</Link>
                                {/* <Link className="dropdown-item" to="/newRequestForm">New Request</Link> */}
                                <Link className="dropdown-item" to="/inbox">Messages</Link>
                                <button className="dropdown-item" onClick={() => this.props.signout()}>Log Out</button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.query) {
        errors.query = "Please enter your query";
    }
        return errors;
}

const formWrapped =  reduxForm({
    form: "header",
    validate: validate
})(Header);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default requireAuth(connect(mapStateToProps, actions)(formWrapped));

// export default connect(null, actions)();