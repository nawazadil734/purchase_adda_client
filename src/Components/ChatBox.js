import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reset, Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
// import profileImg from './doe.jpg';
import '../css/item.css';
import Header from './Header'
import requireAuth from './requireAuth';
class ChatBox extends Component {

    componentDidMount() {
        this.props.fetchMessage(this.props.match.params.currUser, this.props.match.params.owner);
        this.props.fetchCurrentUserId();
        setInterval(() => this.props.fetchMessage(this.props.match.params.currUser, this.props.match.params.owner), 1000)
        this.scrollToBottom();
        this.props.fetchUserDetail(this.props.match.params.owner)
    }

    componentDidUpdate() {
        this.scrollToBottom();
      }
    
      scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
    


    renderMessage = () => {
        // console.log("i am render")
        return (
            this.props.messege.map((mes, id) => {
                // console.log("worl" ,mes)
                return (
                    this.props.workingUser ===  mes.sender_id ?
                    <div className="row" style={{marginLeft:"5px"}} key={id}>
                                    <div className="col-sm-6">
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="shadow p-3 mb-5 rounded" style={{ textAlign:"right", width:"intrinsic", backgroundColor:"#0275d8", color: "white"}}>{mes.message}</div>
                                    </div>
                    </div> 
                    :
                    <div className="row" style={{justifyContent:"right", marginRight:"5px"}} key={id}> 
                        <div className="col-sm-6">
                            <div className="shadow p-3 mb-5 bg-white rounded">{mes.message}</div>
                        </div>
                        <div className="col-sm-6">  
                        </div>
                    </div>
                );
            })
        );
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
        return (
            <div>
                <label>{label}</label>
                <input {...input}
                    autoComplete="off"
                    className={style}
                    type={type}
            />
            {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        formValues.currentUser =  this.props.match.params.currUser;
        formValues.owner = this.props.match.params.owner;
        
        this.props.messageOwner(formValues);
    }
    
    render(){
        console.log("papapa", this.props.userDetail)
        const images = require.context('../../public/images', true);
        return (
            <div className="container">
                <Header/>
                <br/><br/>
                <h2 className="header" style={{ marginBottom:"40px"}}>Chat</h2>
                <div className="shadow p-3 mb-5 bg-white rounded" style={{ height: "700px"}}>
                        <div className="card card-inverse card-info"  style={{ height: "670px"}}>
                            <div className="card-title">
                            {/* <div className="col-sm-2">
                                
                            </div> */}
                                <figure className="profile profile-inline" style={{ marginLeft:"10px", marginTop:"10px"}}>
                                <img src={images(this.props.userDetail ? "./" + `${this.props.userDetail.userImage}`: "./default.png")} className="profile-avatar" alt="" style={{width:"60px", marginBottom:"10pt"}}></img> 
                                {/* <img src="https://picsum.photos/200/150/?random" ></img> */}
                            </figure>
                            <h4 className="card-title" style={{ marginTop:"10px"}}>{this.props.userDetail ? this.props.userDetail.firstName + " " + this.props.userDetail.lastName : ''}</h4>
                            </div>


                            <div className="card-block" style={{overflowY: "auto", backgroundColor:"whitesmoke"}}>
                                <div className="MessagesList">
                                    {this.props.messege ? this.renderMessage() : ''}
                                </div>
                                <div style={{ float:"left", clear: "both" }}
                                    ref={(el) => { this.messagesEnd = el; }}>
                                </div>
                            </div>
                            <div className="card-footer">
                                <form onSubmit={this.props.handleSubmit(this.onSubmit)} style={{ width:"inherit"}}>
                                    <div className="flex">
                                        <Field name="message" component={this.renderInput} label="message" style="form-control"/><br/><br/>
                                        {/* <textarea className="form-control mr-1" rows="1" style={{ resize :"none", overflow:"auto"}}></textarea> */}
                                        <button className="btn btn-primary">Send</button>
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
    
    return errors;
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('chat'));

const wrappedForm = reduxForm({
        form: 'chat',
        validate: validate,
        onSubmitSuccess: afterSubmit,
})(ChatBox);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage,
            messege: state.auth.messege,
            workingUser: state.auth.userid,
            userDetail: state.auth.userDetail
        };
}

export default requireAuth(connect(mapStateToProps, actions)(wrappedForm));