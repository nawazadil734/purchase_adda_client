import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import profileImg from './doe.jpg';
import ChatBox from './ChatBox';
import '../css/chat.css';
import requireAuth from './requireAuth';
import { async } from 'q';
// import { thisExpression } from '@babel/types';
class Profile extends Component {
    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        await this.props.fetchChat(this.props.userid);
        // await this.props.fetchUserDetail(this.props.userid) 
    }


    renderChatCard = (images) => {
        return this.props.chat.map(item => {
        return (
            <div className="row" style={{borderBottom:"1px solid #C0C0C0", margin:"10pt"}}>
            {/* {this.props.fetchUserDetail(item.reciever_id)} */}
                            <figure className="profile profile-inline" style={{ marginLeft:"10px", marginTop:"10px"}}>
                                <img src={images("./" + `${item.userImage}`)} className="profile-avatar" alt="" style={{width:"60px", marginBottom:"10pt"}}></img> 
                              
                            </figure>
                            
                            <div className="col-sm-10">
                                <h3><b>{item.firstName + " " + item.lastName}</b></h3>
                                <Link to={`/ChatBox/${item.sender_id}/${item.reciever_id}`}  className="btn btn-info btn-sm" style={{ float:"right"}}>View Message</Link>
                            </div>
                        </div>
        )
        })
    }
    render() {
        console.log("list ", this.props.chat)
        console.log("id", this.props.userid)
        console.log("detail", this.props.userDetail)
        const images = require.context('../../public/images', true);
        return (
            <div style={{overflow:"hidden"}}>
                <div className="container-fluid" style={{marginBottom: "50pt"}}>
                    <Header/>
                </div>
                <div className="container">
                    <br/>
                    <h1 style={{fontFamily: "'Cabin', sans-serif"}}>Chats</h1>
                    <br/>
                    <div style={{borderRadius:"5px", border:"1px solid #808080", position:"absolute", paddingLeft:"15pt", paddingRight:"15pt", width:"55%", height:"65%", top:"55%", transform:"translate(-50%, -50%)", left: "50%", backgroundColor:"white", overflow:"auto"}}>
                        {/* <div className="row" style={{borderBottom:"1px solid #C0C0C0", margin:"10pt"}}>
                            <div className="col-sm-2">
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px", marginBottom:"10pt"}}></img> 
                            </div>
                            <div className="col-sm-10">
                                <h3>Ainsley Harriot</h3>
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                        <div className="row" style={{borderBottom:"1px solid #C0C0C0", margin:"10pt"}}>
                            <div className="col-sm-2">
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px", marginBottom:"10pt"}}></img> 
                            </div>
                            <div className="col-sm-10">
                                <h3>Ainsley Harriot</h3>
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                        <div className="row" style={{borderBottom:"1px solid #C0C0C0", margin:"10pt"}}>
                            <div className="col-sm-2">
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px", marginBottom:"10pt"}}></img> 
                            </div>
                            <div className="col-sm-10">
                                <h3>Ainsley Harriot</h3>
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                        <div className="row" style={{borderBottom:"1px solid #C0C0C0", margin:"10pt"}}>
                            <div className="col-sm-2">
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px", marginBottom:"10pt"}}></img> 
                            </div>
                            <div className="col-sm-10">
                                <h3>Ainsley Harriot</h3>
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                        <div className="row" style={{borderBottom:"1px solid #C0C0C0", margin:"10pt"}}>
                            <div className="col-sm-2">
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px", marginBottom:"10pt"}}></img> 
                            </div>
                            <div className="col-sm-10">
                                <h3>Ainsley Harriot</h3>
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                        <div className="row" style={{borderBottom:"1px solid #C0C0C0", margin:"10pt"}}>
                            <div className="col-sm-2">
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px", marginBottom:"10pt"}}></img> 
                            </div>
                            <div className="col-sm-10">
                                <h3>Ainsley Harriot</h3>
                                <button className="btn btn-primary" style={{fontSize:"10pt"}}>View</button>
                            </div>
                        </div> */}
                        {this.props.chat ? this.renderChatCard(images) : ''}
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
    return { errorMessage: state.auth.errorMessage,
            chat: state.auth.chatList,
            userid: state.auth.userid,
            userDetail: state.auth.userDetail};
}

export default requireAuth(connect(mapStateToProps, actions)(wrappedForm));