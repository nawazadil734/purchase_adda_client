import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import profileImg from './doe.jpg';
import { thisExpression } from '@babel/types';
class Profile extends Component {

    renderForSaleMessage = ({userName, itemID, offerPrice}) => {
        return(
            <div class="media border p-3" style={{marginBottom:"15pt"}}>
                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                <div class="media-body">
                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>To: {userName}</h4>
                    <h6 style={{color:"#a1a1a1"}}>for Item ID: {itemID}</h6>
                    <h6 style={{color:"#a1a1a1", textAlign:"left"}}>₹ {offerPrice}</h6>
                    <button className="btn btn-primary float-right">View</button>
                    <button className="btn btn-danger float-right" style={{marginRight:"7pt"}}>Delete</button>
                </div>
            </div>   
        );
    }

    renderForRentMessage = ({userName, itemID, offerRate, offerDurDays, offerDurHours}) => {
        return(
            <div class="media border p-3" style={{marginBottom:"15pt"}}>
                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                <div class="media-body">
                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>To: {userName}</h4>
                    <h6 style={{color:"#a1a1a1"}}>for Item ID: {itemID}</h6>
                    <h6 style={{color:"#a1a1a1", textAlign:"left"}}></h6>
                    <div className="row">
                        <div className="col-sm-2" style={{color:"#a1a1a1"}}>₹ {offerRate} / hour</div>
                        <div className="col-sm-2" style={{color:"#a1a1a1"}}>{offerDurDays} d, {offerDurHours} h</div>
                    </div>
                    <button className="btn btn-primary float-right">View</button>
                    <button className="btn btn-danger float-right" style={{marginRight:"7pt"}}>Delete</button>
                </div>
            </div>   
        );
    }
    
    render() {
        return (
            <div>
                <div className="container-fluid" style={{marginBottom: "50pt"}}>
                    <Header/>
                </div>
                <div className="container">
                    <br/>
                    <h1 style={{fontFamily: "'Cabin', sans-serif"}}>Outbox</h1>
                    <br/>
                    <div className = "row">
                        <div className="col-sm-3">  
                        <div>
                            <Link to="/inbox"  style={{fontSize:"20px",color:"#191919"}}><b>Inbox</b></Link>
                        </div>
                        <hr/>
                        <div>
                            <Link to="/profile"  style={{fontSize:"20px",color:"#191919"}}><b>Go Back</b></Link>
                        </div>
                        <hr style={{borderTop: "5px solid #0275d8 "}}/>
                        </div>
                        <div className="col-sm-9">
                            <div class="media border p-3" style={{marginBottom:"15pt"}}>
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                                <div class="media-body">
                                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>To: insert user name here</h4>
                                    <h6 style={{color:"#a1a1a1"}}>for Item ID: 420696969</h6>
                                    <h6 style={{color:"#a1a1a1", textAlign:"left"}}>₹ 45000</h6>
                                    <button className="btn btn-primary float-right">View</button>
                                    <button className="btn btn-danger float-right" style={{marginRight:"7pt"}}>Delete</button>
                                </div>
                            </div>
                            <div class="media border p-3" style={{marginBottom:"15pt"}}>
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                                <div class="media-body">
                                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>To: insert user name here</h4>
                                    <h6 style={{color:"#a1a1a1"}}>for Item ID: 356240361</h6>
                                    <div className="row">
                                        <div className="col-sm-2" style={{color:"#a1a1a1"}}>₹ 45 / hour</div>
                                        <div className="col-sm-2" style={{color:"#a1a1a1"}}>0 d, 3 h</div>
                                    </div>
                                    <button className="btn btn-primary float-right">View</button>
                                    <button className="btn btn-danger float-right" style={{marginRight:"7pt"}}>Delete</button>
                                </div>
                            </div>
                            <this.renderForRentMessage/>
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