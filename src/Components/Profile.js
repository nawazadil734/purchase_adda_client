import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import requireAuth from './requireAuth';
class Profile extends Component {

    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        await this.props.fetchUserDetail(this.props.userid) 
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
                                textAlign: "right" }} value={inside} readOnly></textarea>
                        </div>
                </div>
            </div>
        );
    }
    
    render() {
        // console.log(this.props.userid)
        console.log(this.props.userDetail)
        var userImage = this.props.userDetail ? this.props.userDetail.userImage: ""
        var ig = userImage.replace("D:\\DBMS Project\\dbms-client\\public\\images\\", "")
                    .replace("\\","\/")
       
        const images = require.context('../../public/images', true);
        const userPhoto = images(this.props.userDetail ? "./" + `${ig}`: "./default.png");

        return (
            <div>
                <div className="container-fluid" style={{marginBottom: "15pt"}}>
                    <Header/>
                </div>
                <br/><br/><br/>
                <div className="container">
                <div className = "row">
            <div className="col-sm-3">
            <div className="shadow p-3 mb-5 bg-white rounded">
                    <img src={userPhoto} className="img-fluid" alt="..." style={{width:"320pt",height:"200pt"}}></img>
            </div>
            <div>
                <Link to="/profile" style={{fontSize:"20px", color:"#191919"}}><b>My Profile</b></Link>
            </div>  
            <hr/>
            <div>
                <Link to="/newRequestForm"  style={{fontSize:"20px",color:"#191919"}}><b>New Request</b></Link>
            </div>
            <hr/>
            <div>
                <Link to="/myitems" style={{fontSize:"20px",color:"#191919"}}><b >My Items</b></Link>
            </div>
            <hr/>
            <div>
                <div onClick={() => this.props.signout()} style={{fontSize:"20px",color:"#191919"}}><b>Log Out</b></div>
            </div>
            <hr style={{borderTop: "5px solid #0275d8 "}}/>
            </div>
            <div className="col-sm-9">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h1 style={{paddingLeft:"20px"}}>{this.props.userDetail ? this.props.userDetail.firstName + " " + this.props.userDetail.lastName : ""} <Link to="/setting" style ={{float:"right", marginRight:"20px"}} className="btn btn-primary"  type="button">Edit Profile</Link></h1>
                            <i className='fas fa-map-marker-alt' style={{paddingLeft:"20px",paddingRight: "8px", paddingBottom: "10px"}}></i>{this.props.userDetail ? this.props.userDetail.streetNo + ", " +  this.props.userDetail.city + ", " + this.props.userDetail.state : ' ' }<br/>
                    </div>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h3 style={{paddingLeft:"20px",paddingBottom: "10px"}}>Details</h3>
                            <Field name="username" component={this.renderLabel} label="Username" inside={this.props.userDetail ? this.props.userDetail.userName: ""}></Field>
                            <Field name="firstname" component={this.renderLabel} label="First Name" inside={this.props.userDetail ? this.props.userDetail.firstName: ""}></Field>
                            <Field name="lastname" component={this.renderLabel} label="Last Name" inside={this.props.userDetail ? this.props.userDetail.lastName: ""}></Field>
                            <Field name="email" component={this.renderLabel} label="E-Mail" inside={this.props.userDetail ? this.props.userDetail.email: ""}></Field>
                            <Field name="phoneNumber" component={this.renderLabel} label="Mobile Number" inside={this.props.userDetail ? this.props.userDetail.phoneNumber: ""}></Field>
                            <Field name="streetNo" component={this.renderLabel} label="Street No." rows="3" inside={this.props.userDetail ? this.props.userDetail.streetNo: ""}></Field>
                            <Field name="city" component={this.renderLabel} label="City" rows="3" inside={this.props.userDetail ? this.props.userDetail.city: ""}></Field>
                            <Field name="state" component={this.renderLabel} label="State" rows="3" inside={this.props.userDetail ? this.props.userDetail.state: ""}></Field>
                            </div>
            </div>
        </div>
        </div>
            </div>
        );
    }
}

const wrappedForm = reduxForm({
        form: 'profile'
})(Profile);

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
        userDetail: state.auth.userDetail
    };
}

export default requireAuth(connect(mapStateToProps, actions)(wrappedForm));