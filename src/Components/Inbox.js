import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import profileImg from './doe.jpg';
import ChatBox from './ChatBox';
import '../css/chat.css';
import { async } from 'q';
// import { thisExpression } from '@babel/types';
class Profile extends Component {
    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        await this.props.fetchChat(this.props.userid);
    }


    renderChatCard = (chats) => {
        return (
            <div style={{ width: "600px"}}>
                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                    <div className="media-body">
                        <label style={{fontFamily:"'Cabin', sans-serif"}}>ADIL NAWAZ</label>
                        {/* <h6 style={{color:"#a1a1a1"}}>for Item ID: 420696969</h6> */}
                        {/* <label style={{color:"#a1a1a1", textAlign:"left"}}> Hello ||| </label> */}
                        {/* <Link className="btn btn-primary float-right">View</button> */}
                        <Link to={`/ChatBox/${this.props ? this.props.userid: ''}/${this.props.singleRentOwner? this.props.singleRentOwner.id: ''}`} className="btn btn-info btn-sm" style={{ float:"right"}}>View</Link>
                    </div>
                </div>
        )
    }
    render() {
        console.log("list ", this.props.chat)
        console.log("id", this.props.userid)
        return (
            <div style={{overflow:"hidden"}}>
                <div className="container-fluid" style={{marginBottom: "50pt"}}>
                    <Header/>
                </div>
                <div className="container">
                    <br/>
                    <h1 style={{fontFamily: "'Cabin', sans-serif"}}>Chats</h1>
                    <br/>
                    <div style={{borderRadius:"5px", border:"1px solid #808080", position:"absolute", paddingLeft:"15pt", paddingRight:"15pt", width:"55%", height:"65%", top:"50%", transform:"translate(-50%, -50%)", left: "50%", backgroundColor:"white", overflow:"auto"}}>
            
                       
                        <div className="media border-bottom" style={{paddingBottom:"15pt", paddingTop:"15pt"}}>
                        {this.props.chat ? this.renderChatCard(this.props.chat) : ""}
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
    return { errorMessage: state.auth.errorMessage,
            chat: state.auth.chatList,
            userid: state.auth.userid};
}

export default connect(mapStateToProps, actions)(wrappedForm);