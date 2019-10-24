import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import Header from './Header';
import profileImg from './doe.jpg';
import * as actions from '../actions/index';
import requireAuth from './requireAuth';
class EditProfile extends Component {

    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        await this.props.fetchUserDetail(this.props.userid) 
    }

    renderInput = ({input, classname, type, label, meta, style, placeholder}) => {
        // console.log(meta);
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input}
                    type={type}
                    className={classname} 
                    style={style}
                    placeholder={placeholder}
                />              
            </div>
        );
    }

    renderDate = ({input, classname, type, label, meta, style, min, max}) => {
        // console.log(meta);
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input}
                    type={type}
                    className={classname} 
                    style={style}
                    max={max}
                    min={min}
                />              
            </div>
        );
    }

    renderTextArea = ({input, classname, type, label, meta, style, rows, cols, placeholder}) => {
        // console.log(meta);
        return (
            <div className="form-group">
                <label>{label}</label>
                <textarea {...input}
                    type={type}
                    className={classname} 
                    style={style}
                    rows={rows} 
                    cols={cols}
                    placeholder={placeholder}
                />              
            </div>
        );
    }

    onSubmit = (formValues) => {
        console.log(formValues);
    }
    
    
    render() {
        return (
            <div>
                <div className="container-fluid">
                <Header/>
            </div>
            <div className="container">
            <div style={{marginLeft: "20px", marginRight: "20px"}}>
                <br/><h1>Edit Profile</h1><br/>
                <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <div className = "row">
                                    <div className="col-sm-3" style={{marginRight: "40pt"}}>
                                        <img src={profileImg} alt="John Doe" className="img-thumbnail" width="320" height="320"></img><br/>
                                        <div className="form-group" style={{textAlign: "center"}}>
                                            <br/>
                                            <label className="btn-sm btn-primary">
                                                Change Picture <input type="file" style={{display:"none"}}></input>
                                            </label>
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
                                            <Link to="/profile"  style={{fontSize:"20px",color:"#191919"}}><b>Change Password</b></Link>
                                        </div>
                                        <hr style={{borderTop: "5px solid #0275d8 "}}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4> Basic Information</h4>
                                        <Field name="userName" component={this.renderInput} label="User Name" classname="form-control" type="text" placeholder={this.props.userDetail ? this.props.userDetail.userName: ""} />
                                        <Field name="firstName" component={this.renderInput} label="First Name" classname="form-control" type="text" placeholder={this.props.userDetail ? this.props.userDetail.firstName: ""}/>
                                        <Field name="lastName" component={this.renderInput} label="Last Name" classname="form-control" type="text" placeholder={this.props.userDetail ? this.props.userDetail.lastName: ""}/>
                                        <h4> Contact Information</h4>
                                        <Field name="address" component={this.renderTextArea} classname="form-control" label="Address" rows="2" placeholder={this.props.userDetail ? this.props.userDetail.address: ""}/>
                                        <Field name="phoneNumber" component={this.renderInput} label="Phone Number" classname="form-control" type="text" placeholder={this.props.userDetail ? this.props.userDetail.phoneNumber: ""}/>
                                        <Field name="email" component={this.renderInput} label="E-Mail" classname="form-control" type="email" placeholder={this.props.userDetail ? this.props.userDetail.email: ""} />
                                        <div style={{textAlign: "center"}}>
                                                <button className="btn btn-primary" type="submit" style={{marginTop : "15pt"}}>Save Changes</button>
                                        </div>
                                    </div>        
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const wrappedForm = reduxForm({
        form: 'editProfile'
})(EditProfile);

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
        userDetail: state.auth.userDetail
    };
}

export default requireAuth(connect(mapStateToProps, actions)(wrappedForm));