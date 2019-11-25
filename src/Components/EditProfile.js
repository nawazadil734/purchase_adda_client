import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import Header from './Header';
import profileImg from "../Components/upload.png";
import * as actions from '../actions/index';
import requireAuth from './requireAuth';

class EditProfile extends Component {
    state = {
        selectedFile:  null
    }

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

    // renderTextArea = ({input, classname, type, label, meta, style, rows, cols, placeholder}) => {
    //     // console.log(meta);
    //     return (
    //         <div className="form-group">
    //             <label>{label}</label>
    //             <textarea {...input}
    //                 type={type}
    //                 className={classname} 
    //                 style={style}
    //                 rows={rows} 
    //                 cols={cols}
    //                 placeholder={placeholder}
    //             />              
    //         </div>
    //     );
    // }

    onSubmit = (formValues) => {
        
        formValues.id = this.props ? this.props.userid : ""
        this.props.updateProfileInfo(formValues);
        // console.log(formValues);
    }

    onFileInputChnage = (event) => {
        this.setState({ selectedFile: event.target.files[0]})
    }

    renderPhotoInput = ({input}) => {
        // console.log("i am field", field)
        return (
            <div>
                <input {...input} type="file" value={this.props.selectedFile} onChange={this.onFileInputChnage}/>
            </div>

        )
    }

    onSubmitPhoto = (formValues) => {
        console.log(formValues.myFile[0])
        formValues.id = this.props ? this.props.userid : ""
        this.props.uploadProfilePhoto(formValues)
    }
    
    render() {
        var userImage = this.props.userDetail ? this.props.userDetail.userImage: ""
        var ig = userImage.replace("D:\\DBMS Project\\dbms-client\\public\\images\\", "")
                    .replace("\\","\/")
       
        const images = require.context('../../public/images', true);
        const userPhoto = images(this.props.userDetail ? "./" + `${ig}`: "./default.png");
        
        return (
            <div>
                <div className="container-fluid">
                <Header/>
            </div>
            <br/><br/>
            <div className="container" >
            <div style={{marginLeft: "20px", marginRight: "20px"}}>
                <br/><h1>Edit Profile</h1><br/>
                <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                    
                            <div className = "row">
                                    <div className="col-sm-3" style={{marginRight: "40pt"}}>
                                        <img src = {userPhoto} alt="John Doe" className="img-thumbnail" style={{width:"320pt",height:"200pt"}}></img><br/>
                                            <div className="form-group" style={{textAlign: "center"}}>
                                            <br/>
                                            <form onSubmit={this.props.handleSubmit(this.onSubmitPhoto)}>
                                                <Field name="myFile" component={this.renderPhotoInput}/><br/>
                                                <input type="submit" value="Upload a file" className="btn btn-primary"/>
                                            </form>
                                            {/* <form  encType="multipart/form-data" action="http://localhost:5000/uploadfile" method="POST"> 
                                                <input type="file" name="myFile" id={this.props.userDetail? this.props.userDetail.id: ''}  />
                                                <input type="submit" value="Upload a file"/>
                                            </form> */}
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
                                            <Link to="/verification"  style={{fontSize:"20px",color:"#191919"}}><b>Change Password</b></Link>
                                        </div>
                                        <hr style={{borderTop: "5px solid #0275d8 "}}/>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4> Basic Information</h4>
                                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                        <Field name="userName" component={this.renderInput} label="User Name" classname="form-control" type="text" placeholder={this.props.userDetail ? this.props.userDetail.userName: ""} />
                                        <Field name="firstName" component={this.renderInput} label="First Name" classname="form-control" type="text" placeholder={this.props.userDetail ? this.props.userDetail.firstName: ""}/>
                                        <Field name="lastName" component={this.renderInput} label="Last Name" classname="form-control" type="text" placeholder={this.props.userDetail ? this.props.userDetail.lastName: ""}/>
                                        <h4> Contact Information</h4>
                                        <Field name="streetNo" component={this.renderInput} classname="form-control" label="Street No." rows="2" placeholder={this.props.userDetail ? this.props.userDetail.streetNo: ""}/>
                                        <Field name="city" component={this.renderInput} classname="form-control" label="City" rows="2" placeholder={this.props.userDetail ? this.props.userDetail.city: ""}/>
                                        <Field name="state" component={this.renderInput} classname="form-control" label="State" rows="2" placeholder={this.props.userDetail ? this.props.userDetail.state: ""}/>
                                        <Field name="phoneNumber" component={this.renderInput} label="Phone Number" classname="form-control" type="text" placeholder={this.props.userDetail ? this.props.userDetail.phoneNumber: ""}/>
                                        <Field name="email" component={this.renderInput} label="E-Mail" classname="form-control" type="email" placeholder={this.props.userDetail ? this.props.userDetail.email: ""} />
                                        <div style={{textAlign: "center"}}>
                                                <button className="btn btn-primary" type="submit" style={{marginTop : "15pt"}}  onClick={() => alert("Profile Updated")}>Save Changes</button>
                                        </div>
                                        <br/>
                                        </form>
                                    </div>        
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
})(EditProfile);

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
        userDetail: state.auth.userDetail
    };
}

export default requireAuth(connect(mapStateToProps, actions)(wrappedForm));