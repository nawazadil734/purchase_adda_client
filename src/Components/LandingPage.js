import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import Header from './Header';
import la from './la.jpg';
import test from './test.jpg';
import test2 from './test2.jpg';
import test3 from './test3.jpg';
import sell_it from './sell-it.svg';
import ship_it from './ship-it.svg';
import get_paid from './get-paid.svg';
import * as actions from '../actions/index';
import books_icon from './books_icon.jpg';
import computing_icon from './computing_icon.jpg';
import tools_icon from './tools_icon.jpg';
import phone_icon from './phone_icon.jpg';
import stationery_icon from './stationery_icon.jpg';
import seeMore_icon from './seeMore.png'
// import bgpng from './bgpng.png';
class LandingPage extends Component {
    
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Header/>
                </div>
                <div className="container-fluid">
                {/* <img src={bgpng} id="bg" alt="" style={{ position: "fixed"}}/> */}
                    <br/><br/><br/>
                    <div>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card text-black">
                                        <img src={test2} alt="First slide"></img>
                                        <div className="card-img-overlay">
                                            <br/><br/><br/><br/>
                                            <h1 className="card-title" style={{fontSize:"50pt", paddingLeft:"300pt", fontFamily:"'Cabin', sans-serif"}}>Books</h1>
                                            <h5 style={{paddingLeft:"300pt", fontFamily:"'Open Sans', sans-serif"}}>For the avid reader in you</h5>
                                            <div style={{marginLeft:"300pt", marginTop:"15pt"}}>
                                                <button class="btn btn-outline-dark" type="link" onClick={() =>this.props.queryResult({ query: "Books"})}>Check it out</button>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="carousel-item">
                                    <div className="card text-black">
                                        <img src={test} alt="Second slide"></img>
                                        <div className="card-img-overlay">
                                            <br/><br/><br/><br/>
                                            <h1 className="card-title" style={{fontSize:"50pt", paddingLeft:"300pt", fontFamily:"'Cabin', sans-serif"}}>Electronics</h1>
                                            <h5 style={{paddingLeft:"300pt", fontFamily:"'Open Sans', sans-serif"}}></h5>
                                            <div style={{marginLeft:"300pt", marginTop:"15pt"}}>
                                                <button class="btn btn-outline-dark" type="link" onClick={() =>this.props.queryResult({ query: "Electronics"})}>Check it out</button>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="carousel-item">
                                    <div className="card text-white">
                                    <img src={test3} alt="Third slide" width="1900" height="500"></img>
                                        <div className="card-img-overlay">
                                            <br/><br/><br/><br/>
                                            <h1 className="card-title" style={{fontSize:"50pt", paddingLeft:"300pt", fontFamily:"'Cabin', sans-serif"}}>Tools</h1>
                                            <h5 style={{paddingLeft:"300pt", fontFamily:"'Open Sans', sans-serif"}}>To get things built on a budget</h5>
                                            <div style={{marginLeft:"300pt", marginTop:"15pt"}}>
                                                <button class="btn btn-outline-light text-light" type="link" onClick={() =>this.props.queryResult({ query: "Tools"})}>Check it out</button>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="row" style={{marginTop:"35pt", marginLeft:"60pt", marginRight:"30pt", marginBottom:"35pt"}}>
                            <div className="col-sm-4">
                                <div class="media">
                                    <img src={sell_it} alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"120px"}}></img>
                                    <div class="media-body">
                                        <h4 style={{fontSize:"20pt", fontFamily:"'Cabin', sans-serif", marginTop:"23pt"}}>As you like.</h4>
                                        <p style={{fontFamily:"'Open Sans', sans-serif"}}>Just need it for a few hours? Done.<br/>Want to purchase? No problem.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div class="media">
                                    <img src={ship_it} alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"120px"}}></img>
                                    <div class="media-body">
                                        <h4 style={{fontSize:"20pt", fontFamily:"'Cabin', sans-serif", marginTop:"23pt"}}>Sell It.</h4>
                                        <p style={{fontFamily:"'Open Sans', sans-serif"}}>List in minutes. Take a few photos.<br/>Add a description. Set your price.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div class="media">
                                    <img src={get_paid} alt="John Doe" class="mr-3 mt-3 rounded-circle" style={{width:"120px"}}></img>
                                    <div class="media-body">
                                        <h4 style={{fontSize:"20pt", fontFamily:"'Cabin', sans-serif", marginTop:"23pt"}}>Get paid.</h4>
                                        <p style={{fontFamily:"'Open Sans', sans-serif"}}>Get the word out to as many people<br/> as you can. Sell faster.<br/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div style={{marginTop:"35pt", marginBottom:"35pt", textAlign:"center"}}>
                            <h1 style={{fontFamily:"'Cabin', sans-serif", fontSize:"45pt"}}>All the items you need.</h1>
                            <br/>
                            <h4 style={{fontFamily:"'Open Sans', sans-serif"}}>Great stuff. New items coming in every day.</h4>
                        </div>
                        <div style={{marginLeft:"120pt", marginRight:"120pt", marginBottom:"35pt"}} className="row">
                            <div className="col-sm-2" style={{textAlign:"center"}} onClick={() =>this.props.queryResult({ query: "Books"})}>
                                <img src={books_icon} style={{width:"180px"}} className="rounded-circle" alt=""></img>
                                <p style={{lineHeight:"50pt"}} >Books</p>
                            </div>
                            <div className="col-sm-2" style={{textAlign:"center"}} onClick={() =>this.props.queryResult({ query: "Computing"})}>
                                <img src={computing_icon} style={{width:"180px"}} className="rounded-circle" alt=""></img>
                                <p style={{lineHeight:"50pt"}}>Computing</p>
                            </div>
                            <div className="col-sm-2" style={{textAlign:"center"}} onClick={() =>this.props.queryResult({ query: "Tools"})}>
                                <img src={tools_icon} style={{width:"180px", height:"180px"}} className="rounded-circle"></img>
                                <p style={{lineHeight:"50pt"}}>Tools</p>
                            </div>
                            <div className="col-sm-2" style={{textAlign:"center"}} onClick={() =>this.props.queryResult({ query: "Phones and Tablets"})}>
                                <img src={phone_icon} style={{width:"180px"}} className="rounded-circle"></img>
                                <p style={{lineHeight:"50pt"}}>Phones and Tablets</p>
                            </div>
                            <div className="col-sm-2" style={{textAlign:"center"}} onClick={() =>this.props.queryResult({ query: "Stationery"})}>
                                <img src={stationery_icon} style={{width:"180px"}} className="rounded-circle"></img>
                                <p style={{lineHeight:"50pt"}}>Stationery</p>
                            </div>
                            <div className="col-sm-2" style={{textAlign:"center"}} onClick={() =>this.props.queryResult({ query: "%"})}>
                                <img src={seeMore_icon} style={{width:"180px"}} className="rounded-circle"></img>
                                <p style={{lineHeight:"50pt"}}>See More</p>
                                {/* <div style={{width:"180px", height:"180px", backgroundColor:"#ed9f28", textAlign:"center", verticalAlign:"middle", lineHeight:"180px"}} className="rounded-circle text-light">
                                    <p style={{fontFamily:"'Cabin', sans-serif", fontSize:"20pt"}}>See more...</p>
                                </div> */}
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <footer class="footer">
                    <div class="container-fluid" style={{backgroundColor:"#c0c0c0"}}>
                        <span class="text-muted">Place sticky footer content here.</span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default connect(null, actions)(LandingPage);