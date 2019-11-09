import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import profileImg from './doe.jpg';
import { thisExpression } from '@babel/types';
class Profile extends Component {
    
    renderForSaleMessage = ({title, itemID, offerPrice}) => {
        return(
            <div class="media border p-3" style={{marginBottom:"15pt"}}>
                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                <div class="media-body">
                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>{title}</h4>
                    <h6 style={{color:"#a1a1a1"}}>for Item ID: {itemID}</h6>
                    <h6 style={{color:"#a1a1a1", textAlign:"left"}}>₹ {offerPrice}</h6>
                    <button className="btn btn-primary float-right">View</button>
                </div>
            </div>   
        );
    }

    renderReadForSaleMessage = ({title, itemID, offerPrice}) => {
        return(
            <div class="media border p-3" style={{marginBottom:"15pt"}}>
                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                <div class="media-body">
                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>{title}</h4>
                    <h6 style={{color:"#a1a1a1"}}>for Item ID: {itemID}</h6>
                    <h6 style={{color:"#a1a1a1", textAlign:"left"}}>₹ {offerPrice}</h6>
                    <button className="btn btn-primary float-right">View</button>
                    <button className="btn btn-danger float-right" style={{marginRight:"7pt"}}>Delete</button>
                </div>
            </div>   
        );
    }

    renderReadForRentMessage = ({title, itemID, offerRate, offerDurDays, offerDurHours}) => {
        return(
            <div class="media border p-3" style={{marginBottom:"15pt"}}>
                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                <div class="media-body">
                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>{title}</h4>
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

    renderForRentMessage = ({title, itemID, offerRate, offerDurDays, offerDurHours}) => {
        return(
            <div class="media border p-3" style={{marginBottom:"15pt"}}>
                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                <div class="media-body">
                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>{title}</h4>
                    <h6 style={{color:"#a1a1a1"}}>for Item ID: {itemID}</h6>
                    <h6 style={{color:"#a1a1a1", textAlign:"left"}}></h6>
                    <div className="row">
                        <div className="col-sm-2" style={{color:"#a1a1a1"}}>₹ {offerRate} / hour</div>
                        <div className="col-sm-2" style={{color:"#a1a1a1"}}>{offerDurDays} d, {offerDurHours} h</div>
                    </div>
                    <button className="btn btn-primary float-right">View</button>
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
                    <h1 style={{fontFamily: "'Cabin', sans-serif"}}>Inbox</h1>
                    <br/>
                    <div className = "row">
                        <div className="col-sm-3">  
                            <div style={{marginTop:"50pt"}}>
                                <Link to="/outbox"  style={{fontSize:"20px",color:"#191919"}}><b>Outbox</b></Link>
                            </div>
                            <hr/>
                            <div>
                                <Link to="/profile"  style={{fontSize:"20px",color:"#191919"}}><b>Go Back</b></Link>
                            </div>
                            <hr style={{borderTop: "5px solid #0275d8 "}}/>
                        </div>
                        <div className="col-sm-9">
                            <ul class="nav nav-pills" style={{marginBottom:"15pt"}}>
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="pill" href="#Unread">Unread</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#Read">Read</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="Unread" class="container tab-pane active">
                                    <div class="media border p-3" style={{marginBottom:"15pt"}}>
                                        <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                                        <div class="media-body">
                                            <h4 style={{fontFamily:"'Cabin', sans-serif"}}>I want to buy your PC!</h4>
                                            <h6 style={{color:"#a1a1a1"}}>for Item ID: 420696969</h6>
                                            <h6 style={{color:"#a1a1a1", textAlign:"left"}}>₹ 45000</h6>
                                            <button className="btn btn-primary float-right">View</button>
                                        </div>
                                    </div>
                                    <div class="media border p-3" style={{marginBottom:"15pt"}}>
                                        <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                                        <div class="media-body">
                                            <h4 style={{fontFamily:"'Cabin', sans-serif"}}>I want to buy your PC!</h4>
                                            <h6 style={{color:"#a1a1a1"}}>for Item ID: 420696969</h6>
                                            <h6 style={{color:"#a1a1a1", textAlign:"left"}}>₹ 45000</h6>
                                            <button className="btn btn-primary float-right">View</button>
                                        </div>
                                    </div>
                                    <this.renderForRentMessage/>
                                    <this.renderForSaleMessage/>
                                </div>
                                <div id="Read" class="container tab-pane fade">
                                    <div class="media border p-3" style={{marginBottom:"15pt"}}>
                                        <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                                        <div class="media-body">
                                            <h4 style={{fontFamily:"'Cabin', sans-serif"}}>I want to rent your lawnmower...</h4>
                                            <h6 style={{color:"#a1a1a1"}}>for Item ID: 356240361</h6>
                                            <div className="row">
                                                <div className="col-sm-2" style={{color:"#a1a1a1"}}>₹ 45 / hour</div>
                                                <div className="col-sm-2" style={{color:"#a1a1a1"}}>0 d, 3 h</div>
                                            </div>
                                            <button className="btn btn-primary float-right">View</button>
                                            <button className="btn btn-danger float-right" style={{marginRight:"7pt"}}>Delete</button>
                                        </div>
                                    </div>
                                    <this.renderReadForRentMessage/>
                                    <this.renderReadForSaleMessage/>
                                </div>
                            </div>
                            {/* <div class="media border p-3" style={{marginBottom:"15pt", marginTop:"15pt"}}>
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                                <div class="media-body">
                                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>I want to buy your PC!</h4>
                                    <h6 style={{color:"#a1a1a1"}}>for Item ID: 420696969</h6>
                                    <h6 style={{color:"#a1a1a1", textAlign:"left"}}>₹ 45000</h6>
                                    <button className="btn btn-primary float-right">Mark as Read</button>
                                    <button className="btn btn-primary float-right" style={{marginRight:"15pt"}}>View</button>
                                </div>
                            </div>
                            <div class="media border p-3" style={{marginBottom:"15pt"}}>
                                <img src={profileImg} className="align-self-start mr-3" style={{width:"60px"}}></img>
                                <div class="media-body">
                                    <h4 style={{fontFamily:"'Cabin', sans-serif"}}>I want to rent your lawnmower...</h4>
                                    <h6 style={{color:"#a1a1a1"}}>for Item ID: 356240361</h6>
                                    <div className="row">
                                        <div className="col-sm-2" style={{color:"#a1a1a1"}}>₹ 45 / hour</div>
                                        <div className="col-sm-2" style={{color:"#a1a1a1"}}>0 d, 3 h</div>
                                    </div>
                                    <button className="btn btn-primary float-right">Mark as Read</button>
                                    <button className="btn btn-primary float-right" style={{marginRight:"15pt"}}>View</button>
                                </div>
                            </div> */}
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