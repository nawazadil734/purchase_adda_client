import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import profileImg from './doe.jpg';
import ChatBox from './ChatBox';
// import { thisExpression } from '@babel/types';
class Profile extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={{marginBottom: "50pt"}}>
                    <Header/>
                </div>
                <div className="container-fluid">
                    <br/>
                    <h1 style={{fontFamily: "'Cabin', sans-serif"}}>Chats</h1>
                    <br/>
                    <div className = "row">
                        <div className="col-sm-3">
                            <div className="tab-content">
                            <div className="shadow p-3 bg-white">
                            <div id="Unread" class="container tab-pane active">
                                    <div class="media ">
                                        <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                                        <div class="media-body">
                                            <h4 style={{fontFamily:"'Cabin', sans-serif"}}>I want to buy your PC!</h4>
                                            <h6 style={{color:"#a1a1a1"}}>for Item ID: 420696969</h6>
                                            <h6 style={{color:"#a1a1a1", textAlign:"left"}}>₹ 45000</h6>
                                            <button className="btn btn-primary float-right">View</button>
                                        </div>
                                    </div>
                                </div>
                                <div id="Unread" class="container tab-pane active" style={{marginTop:"20px"}}>
                                    <div class="media ">
                                        <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                                        <div class="media-body">
                                            <h4 style={{fontFamily:"'Cabin', sans-serif"}}>I want to buy your PC!</h4>
                                            <h6 style={{color:"#a1a1a1"}}>for Item ID: 420696969</h6>
                                            <h6 style={{color:"#a1a1a1", textAlign:"left"}}>₹ 45000</h6>
                                            <button className="btn btn-primary float-right">View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
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
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions)(wrappedForm);