import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import { Field, reduxForm} from 'redux-form';
// import { connect} from 'react-redux';
// import * as actions from '../actions/index';
import Header from './Header';
import '../css/item.css'
import Background from "../Components/bullet-list-icon-2.jpg"
import banner from "../Components/banner_image.jpg"

class AboutSales extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Header/>
                </div><br/>
                <div className="container-fluid" style={{backgroundColor:"#f6f6f7", marginTop:"10pt"}}>
                    <div className="container">
                        <div className = "row justify-content-center align-items-center" style={{textAlign:"left"}}>
                            <div className="col-sm-6">
                            <h3 style={{fontSize:"35pt", lineHeight:"45pt"}}>
                                Selling on<br/>PurchaseAdda.
                            </h3>
                            <text>Something</text>
                            </div>
                            <div className="col-sm-6">
                                <img src={banner}/>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-sm-3">

                        </div>
                        <div className="col-sm-3">
                            <h3 style={{fontSize:"35pt", lineHeight:"45pt", marginTop:"30pt", marginBottom:"30pt"}}>
                                Selling on<br/>PurchaseAdda.
                            </h3>
                        </div>
                        <div className="col-sm-3">
                            <img src={banner}/>
                        </div>
                        <div className="col-sm-3">
                            
                        </div>
                    </div> */}
                </div>
                <div className="container">
                     <div className = "row align-items-right" style={{paddingTop:"40px",textAlign:"left", justifyContent:"end"}}>
                        <div >
                            <label style={{fontSize:"26pt", lineHeight:"5pt"}}><b>Finally.</b></label><br/>
                            <label style={{fontSize:"26pt"}}><b>An easy way to sell.</b></label><br/>
                            <label style={{fontSize:"16pt"}}>We’ve all got stuff we don’t use, never used or simply outgrew. Why not sell it instead?</label><br/>
                        
                            <ul style={{paddingLeft:"50px", paddingTop:"10px", listStyleImage: `url(${Background})`}}>
                                <li style={{fontSize:"16pt"}}>Sell it.List in minutes.</li>
                                <li style={{fontSize:"16pt"}}>Ship it.No meetups.</li>
                                <li style={{fontSize:"16pt"}}>Get paid.List for free.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginTop:"20pt"}}>
                    <div className="row align-items-center" style={{justifyContent:"end", textAlign:"left"}}>
                        <div className="col-sm-4" >
                            <h1>Sell (almost) <br/> 
                                anything.
                            </h1>
                            <text> used Items</text>
                        </div>
                        <div className="col-sm-4" style={{padding:"20px"}}>
                            <div className="card">
                                <img className="card-img-top" style={{height:"250px"}} src="https://lacoqui.co/wp-content/uploads/2019/05/small-study-table-small-study-table-olx-study-table-designs-for-small-space-small-study-table-amazon.jpg" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">Study Table</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 750
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4" style={{padding:"20px"}}>
                            <div className="card">
                                <img className="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/51AJ-iH1oNL._SX466_.jpg" style={{height:"250px"}}></img>
                                <div className="card-block">
                                    <h4 className="card-title">Drafter</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 100
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center" style={{textAlign:"left"}}>
                        <div className="col-sm-4" >
                        </div>
                        <div className="col-sm-4" style={{padding:"20px"}}>
                            <div className="card">
                                <img className="card-img-top" style={{height:"250px"}} src="https://images-na.ssl-images-amazon.com/images/I/41tQcVQCH-L._SX466_.jpg" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">Helmet</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 150
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4" style={{padding:"20px"}}>
                            <div className="card">
                                <img className="card-img-top" style={{height:"250px"}} src="https://images-na.ssl-images-amazon.com/images/I/51FGbb3EbgL._SX425_.jpg" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">Hair Dryer</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 360
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ padding:"10px"}}>
                        <div className = "row" style={{textAlign:"left"}}>
                            <div className="col-sm-6">
                                <h3 style={{paddingTop:"40px",fontSize:"35pt", lineHeight:"45pt"}}>
                                    Selling has never<br/>been easy.
                                </h3>
                                <text>So fast, much WOW!</text>
                            </div>
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <text style={{ fontSize:"80pt", fontWeight:"bold"}}>1</text>
                                    </div>
                                    <div className="col-sm-10">
                                    <h4 style={{paddingTop:"40px"}}>Take a Few Pics</h4>
                                        <text style={{paddingTop:"40px"}}>So that your product looks attactive!</text>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <text style={{ paddingLeft:"60pt" ,fontSize:"80pt", fontWeight:"bold"}}>2</text>
                                    </div>
                                    <div className="col-sm-10">
                                    <h4 style={{paddingTop:"40px", paddingLeft:"60pt" }}>Add Some Description</h4>
                                        <text style={{paddingTop:"40px", paddingLeft:"60pt"}}> Make it sound like a fairytale product!</text>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <text style={{ paddingLeft:"120pt", fontSize:"80pt", fontWeight:"bold"}}>3</text>
                                    </div>
                                    <div className="col-sm-10">
                                    <h4 style={{ paddingTop:"40px",paddingLeft:"120pt" }}>Name Your Price</h4>
                                        <text style={{paddingTop:"40px",paddingLeft:"120pt"}}> This is the most important after all</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
};

export default AboutSales;