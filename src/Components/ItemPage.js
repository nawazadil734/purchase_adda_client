import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import '../css/item.css'

class ItemPage extends Component {

    render() {
        return (
            <div className="container">
                    <div classname="container-flex">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h2> Some Title </h2>
                        </div>
                    </div>
                <div className="row">
                    <div className = "col-md-8">
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <div id="demo" class="carousel slide" data-ride="carousel">
                                        <ul class="carousel-indicators">
                                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                                            <li data-target="#demo" data-slide-to="1"></li>
                                        </ul>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                            <img src="https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Los Angeles" width="1100" height="500"></img>
                                            </div>
                                            <div class="carousel-item">
                                            <img src="https://images.pexels.com/photos/1481451/pexels-photo-1481451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Chicago" width="1100" height="500"></img>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                            <span class="carousel-control-prev-icon"></span>
                                        </a>
                                        <a class="carousel-control-next" href="#demo" data-slide="next">
                                            <span class="carousel-control-next-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <div className="card">
                                        <h2 style={{ margin : "10px"}}>Description</h2>
                                        <textarea rows="4" cols="0" style={{border: "none",
                                            backgroundColor: "transparent",
                                            resize: "none",
                                            outline: "none",
                                            overflow: "hidden",
                                            width: "100%",
                                            margin:"10px" }} readOnly>
                                            Content Description 
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h2>₹ 45000</h2><br/>
                                    <textarea rows="2" cols="0" style={{border: "none",
                                            backgroundColor: "transparent",
                                            resize: "none",
                                            outline: "none",
                                            overflow: "hidden",
                                            width: "100%",
                                            color: "grey" }} readOnly>
                                            H. No. 42/A, Dramapur, Salcette, Goa, India, World, Universe
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h4>Seller/Requestee Profile</h4><br/>
                                    <div class="card card-inverse card-info">
                                        <img class="card-img-top" src="https://picsum.photos/200/150/?random"></img>
                                        <div class="card-block">
                                            <figure class="profile profile-inline">
                                                <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                                            </figure>
                                        <h4 class="card-title">Tawshif Ahsan Khan</h4>
                                        <div class="card-text">
                                            Tawshif is a web designer living in Bangladesh.
                                        </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn btn-info btn-sm" style={{ float:"left"}}>View Profile</button>
                                            <button class="btn btn-info btn-sm" style={{ float:"right"}}>Chat with Seller</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ItemPage;