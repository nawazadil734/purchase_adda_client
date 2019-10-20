import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import profileImg from './doe.jpeg';
class Profile extends Component {

    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        console.log("inseid", this.props.userid)
    }

    renderLabel = ({label,meta, inside}) => {
        return (
            <div className="form-group" style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <div className="row">
                    <div className="col-sm">
                            <label >{label}</label>
                    </div>
                    <label className="col-sm" style={{textAlign: "right", color:"black"}}>
                            {inside}
                    </label>
                  </div>
            </div>
        );
    }

    renderTextArea = ({label, meta, rows, cols, inside}) => {
        return (
            <div className="form-group" style={{paddingLeft:"20px", paddingRight:"20px"}}>
                <div className="row">
                        <div className="col-sm">
                                <label>{label}</label>
                        </div>
                        <div className="col-sm" style={{textAlign: "right"}}>
                            <textarea rows={rows} cols={cols} style={{border: "none",
                                backgroundColor: "transparent",
                                resize: "none",
                                outline: "none",
                                overflow: "hidden",
                                width: "100%",
                                textAlign: "right" }} value="This is a description." readOnly>{inside}</textarea>
                        </div>
                </div>
            </div>
        );
    }
    
    render() {
        console.log(this.props.userid)
        return (
            <div>
                <div className="container-fluid" style={{marginBottom: "15pt"}}>
                    <Header/>
                </div>
                <div className="container">
                <div className = "row">
            <div className="col-sm-3">
            <div className="shadow p-3 mb-5 bg-white rounded">
                    <img src={profileImg} className="img-fluid" alt="..."></img>
            </div>
            <div>
                <Link to="/profile" style={{fontSize:"20px", color:"#191919"}}><b>My Profile</b></Link>
            </div>  
            <hr/>
            <div>
                <Link to="/profile"  style={{fontSize:"20px",color:"#191919"}}><b>My Addresses</b></Link>
            </div>
            <hr/>
            <div>
                <Link to="/profile" style={{fontSize:"20px",color:"#191919"}}><b >My Products</b></Link>
            </div>
            <hr/>
            <div>
                <Link to="/profile"  style={{fontSize:"20px",color:"#191919"}}><b>Logout</b></Link>
            </div>
            <hr style={{borderTop: "5px solid #0275d8 "}}/>
            </div>
            <div className="col-sm-9">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h1 style={{paddingLeft:"20px"}}> John Doe <Link to="/setting" style ={{float:"right", marginRight:"20px"}} className="btn btn-outline-primary waves-effect"  type="button">Edit Profile</Link></h1>
                            <i className='fas fa-map-marker-alt' style={{paddingLeft:"20px",paddingRight: "8px", paddingBottom: "10px"}}></i>Someplace, Earth<br/>
                    </div>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h3 style={{paddingLeft:"20px",paddingBottom: "10px"}}>Details</h3>
                            <Field name="username" component={this.renderLabel} label="Username" inside="This is me!"></Field>
                            <Field name="firstname" component={this.renderLabel} label="First Name" inside="x"></Field>
                            <Field name="lastname" component={this.renderLabel} label="Last Name" inside="x"></Field>
                            <Field name="email" component={this.renderLabel} label="E-Mail" inside="x"></Field>
                            <Field name="phoneNumber" component={this.renderLabel} label="Mobile Number" inside="x"></Field>
                            <Field name="address" component={this.renderTextArea} label="Address" rows="3" inside="hey"></Field>
                            <Field name="pincode" component={this.renderLabel} label="Pincode" inside="x"></Field>
                            </div>
            </div>
        </div>
        </div>
            </div>
        );
    }
}

const wrappedForm = reduxForm({
        form: 'editProfile'
})(Profile);

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.errorMessage,
        userid: state.auth.userid
    };
}

export default connect(mapStateToProps, actions)(wrappedForm);