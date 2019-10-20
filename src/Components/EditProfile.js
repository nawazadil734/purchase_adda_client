import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import Header from './Header';
import profileImg from './doe.jpg';
import * as actions from '../actions/index';
class EditProfile extends Component {

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

    renderTextArea = ({input, classname, type, label, meta, style, rows, cols}) => {
        console.log(meta);
        return (
            <div className="form-group">
                <label>{label}</label>
                <textarea {...input}
                    type={type}
                    className={classname} 
                    style={style}
                    rows={rows} 
                    cols={cols}
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
                                                Change Profile Picture <input type="file" style={{display:"none"}}></input>
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
                                        <Field name="Username" component={this.renderInput} label="User Name" classname="form-control" type="text" />
                                        <Field name="Firstname" component={this.renderInput} label="First Name" classname="form-control" type="text" />
                                        <Field name="Lastname" component={this.renderInput} label="Last Name" classname="form-control" type="text" />
                                        <h4> Contact Information</h4>
                                        <Field name="Address" component={this.renderTextArea} classname="form-control" label="Address" rows="2"/>
                                        <Field name="TelNo" component={this.renderInput} label="Phone Number" classname="form-control" type="text"/>
                                        <Field name="email" component={this.renderInput} label="E-Mail" classname="form-control" type="email" placeholder="" />
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
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions)(wrappedForm);