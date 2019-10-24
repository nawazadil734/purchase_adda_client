import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import profileImg from './doe.jpg';
import '../css/item.css';
import Header from '../Components/Header'
class UserItems extends Component {

    renderItems = ({label,meta, inside}) => {
        return (
            <div >
                // To Do
            </div>
        );
    }
    
    render() {
        return (
            <div className="container">
                <Header/>
                <h2 className="header" style={{marginTop:"40px", marginBottom:"40px"}}>My Products and Ads<hr/></h2>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="userItems" data-toggle="tab" href="#userItemsContent" role="tab" aria-controls="userItemsContent" aria-selected="true">User Items</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="requestItems" data-toggle="tab" href="#requestedItemsContent" role="tab" aria-controls="requestedItemsContent" aria-selected="false">Requested Items</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="userItemsContent" role="tabpanel" aria-labelledby="userItems-tab">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="card">
                                    <img class="card-img-top" src="https://picsum.photos/200/150/?random" ></img>
                                    <div class="card-block">
                                        <h4 class="card-title">Item_Name</h4>
                                    <div class="card-text">
                                        <b>Rating</b>: 4/5<br/>
                                        <b>Price</b>: Rs 360
                                    </div>
                                    </div>
                                    <div class="card-footer">
                                        <small>Books</small>
                                    <Link class="btn btn-primary float-right btn-sm" to="/itempage">View</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card">
                                    <img class="card-img-top" src="https://picsum.photos/200/150/?random" ></img>
                                    <div class="card-block">
                                        <h4 class="card-title">Item_Name</h4>
                                    <div class="card-text">
                                        <b>Rating</b>: 4/5<br/>
                                        <b>Price</b>: Rs 360
                                    </div>
                                    </div>
                                    <div class="card-footer">
                                        <small>Books</small>
                                    <Link class="btn btn-primary float-right btn-sm" to="/itempage" >View</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card">
                                    <img class="card-img-top" src="https://picsum.photos/200/150/?random" ></img>
                                    <div class="card-block">
                                        <h4 class="card-title">Item_Name</h4>
                                    <div class="card-text">
                                        <b>Rating</b>: 4/5<br/>
                                        <b>Price</b>: Rs 360
                                    </div>
                                    </div>
                                    <div class="card-footer">
                                        <small>Books</small>
                                    <Link class="btn btn-primary float-right btn-sm">View</Link>
                                    </div>
                                </div>

                            </div>
                        </div> 
                        </div>
                    </div>
                    <div class="tab-pane fade" id="requestedItemsContent" role="tabpanel" aria-labelledby="requestItems-tab">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="card">
                                    <div class="card-block">
                                        <h4 class="card-title">Item_Name</h4>
                                    <div class="card-text">
                                        <b>Want To Buy</b><br/>
                                        <b>Price</b>: Rs 360
                                    </div>
                                    </div>
                                    <div class="card-footer">
                                        <small>Books</small>
                                    <Link class="btn btn-primary float-right btn-sm" to="/itempage">View</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card">
                                    <div class="card-block">
                                        <h4 class="card-title">Item_Name</h4>
                                    <div class="card-text">
                                    <b>Want To Buy</b><br/>
                                        <b>Price</b>: Rs 360
                                    </div>
                                    </div>
                                    <div class="card-footer">
                                        <small>Books</small>
                                    <Link class="btn btn-primary float-right btn-sm" to="/itempage" >View</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="card">
                                    <div class="card-block">
                                        <h4 class="card-title">Item_Name</h4>
                                    <div class="card-text">
                                        <b>Want To Buy</b><br/>
                                        <b>Price</b>: Rs 360
                                    </div>
                                    </div>
                                    <div class="card-footer">
                                        <small>Books</small>
                                    <Link class="btn btn-primary float-right btn-sm">View</Link>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-3">
                                <div class="card">
                                    <div class="card-block">
                                        <h4 class="card-title">Item_Name</h4>
                                    <div class="card-text">
                                        <b>Want To Rent</b><br/>
                                        <b>Price</b>: Rs 360
                                    </div>
                                    </div>
                                    <div class="card-footer">
                                        <small>Books</small>
                                    <Link class="btn btn-primary float-right btn-sm">View</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
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

const wrappedForm = reduxForm({
        form: 'items',
        validate: validate
})(UserItems);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions)(wrappedForm);