import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import profileImg from './doe.jpg';
import '../css/item.css';
import Header from '../Components/Header'
import { async } from 'q';
import { stat } from 'fs';
import requireAuth from './requireAuth';
class UserItems extends Component {


    renderSaleItems = () => {
        return this.props.query[0].map(item => {
            const images = require.context('../../public/images', true);
            const userPhoto = images("./" + `${item.image1}`);
            return ( 
                <div className="col-sm-3">
                <div className="card">
                        <img className="card-img-top" src={userPhoto} alt="iamge" style={{width:"190pt",height:"120pt"}}></img>
                        <div  style={{ width:"100%",textAlign:"right", position:"absolute",right:"0"}}>
                            {/* <Link to={`/deleteSaleItem/${item.item_id}`} className="btn btn-primary rounded-0" type="submit">X</Link> */}
                        </div>
                        <div className="card-block">
                            <h4 className="card-title">{item.item_name}</h4>
                        <div className="card-text">
                            <b>Rating</b>: {item.rating === null ? 'Unrated' : item.rating}<br/>
                            <b>Price: ₹     </b> {item.item_price}
                        </div>
                        </div>
                        <div className="card-footer" style={{textAlign:"center"}}>
                            {/* <Link className="btn btn-primary float-left btn-sm" to={`/editSaleItem/${item.user_id}/${item.item_id}`}>Modify</Link> */}
                            <small><b>{item.item_category}</b></small>
                            <Link className="btn btn-primary float-right btn-sm" to={`/saleitem/${item.user_id}/${item.item_id}`}>View</Link>
                        </div>
                        </div>
                        <br/>
                </div>
            );
        }) 
    }

    renderRentItems = () => {
        return this.props.query[1].map(item => {
            const images = require.context('../../public/images', true);
            const userPhoto = images("./" + `${item.image1}`);
            return ( 
                <div className="col-sm-3">
                <div className="card">
                        <img className="card-img-top" src={userPhoto} alt="iamge" style={{width:"190pt",height:"120pt"}}></img>
                        <div  style={{ width:"100%",textAlign:"right", position:"absolute",right:"0"}}>
                        {/* <Link to={`/deleteRentItem/${item.item_id}`} className="btn btn-primary rounded-0" type="submit">X</Link> */}
                        </div>
                        <div className="card-block">
                            <h4 className="card-title">{item.item_name}</h4>
                        <div className="card-text">
                            <b>Rating</b>: {item.rating === null ? 'Unrated' : item.rating}<br/>
                            <b>Rate: ₹     </b> {item.rent_rate}
                        </div>
                        </div>
                        <div className="card-footer" style={{textAlign:"center"}}>
                        {/* <Link className="btn btn-primary float-left btn-sm" to={`/editRentItem/${item.user_id}/${item.item_id}`}>Modify</Link> */}
                            <small><b>{item.item_category}</b></small>
                            <Link className="btn btn-primary float-right btn-sm" to={`/rentitem/${item.user_id}/${item.item_id}`}>View</Link>
                        </div>
                        </div>
                        <br/>
                </div>
            );
        }) 
    }


    renderWTBItems = () => {
        return this.props.query[2].map(item => {
            return (
                        <div className="col-sm-3">
                            <div className="card">
                            
                                <div style={{ width:"100%",textAlign:"right"}}>
                                    {/* <Link to={`/deleteWtbItem/${item.item_id}`} className="btn btn-primary rounded-0" type="submit">X</Link> */}
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">{item.item_name}</h4>
                                <div className="card-text">
                                    <b>Duration</b>: <br/>
                                    <b>Pricing</b>: Rs {item.item_price} <br/>
                                    {/* <b><i className='fas fa-map-marker-alt'></i></b> */}
                                </div>
                                </div>
                                <div className="card-footer" style={{textAlign:"center"}}>
                                {/* <Link className="btn btn-primary float-left btn-sm" to={`/editReqBuyItem/${item.user_id}/${item.item_id}`}>Modify</Link> */}
                                    <small><b>{item.item_category}</b></small>
                                    <Link className="btn btn-primary float-right btn-sm" to={`/requestWtb/${item.user_id}/${item.item_id}`}>View</Link>
                                </div>
                            </div><br/>
                    </div>
            );
        })
    }

    renderWTRItems = () => {
        return this.props.query[3].map(item => {
            return (
                        <div className="col-sm-3">
                            <div className="card">
                                <div style={{ width:"100%",textAlign:"right"}}>
                                {/* <Link to={`/deleteWtrItem/${item.item_id}`}className="btn btn-primary rounded-0" type="submit">X</Link> */}
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">{item.item_name}</h4>
                                <div className="card-text">
                                    <b>Duration</b>: <br/>
                                    <b>Pricing</b>: Rs {item.rent_rate} <br/>
                                    {/* <b><i className='fas fa-map-marker-alt'></i></b> */}
                                </div>
                                </div>
                                <div className="card-footer" style={{textAlign:"center"}}>
                                {/* <Link className="btn btn-primary float-left btn-sm" to={`/editReqRentItem/${item.user_id}/${item.item_id}`}>Modify</Link> */}
                                <small><b>{item.item_category}</b></small>
                                    <Link className="btn btn-primary float-right btn-sm" to={`/requestWtr/${item.user_id}/${item.item_id}`}>View</Link>
                                </div>
                            </div><br/>
                    </div>
            );
        })
    }

    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        // await this.props.fetchUserSaleItem(this.props.userid);
        // await this.props.fetchUserRentItem(this.props.userid);
        // await this.props.fetchUserWTBItem(this.props.userid);
        // await this.props.fetchUserWTRItem(this.props.userid);
    }
    
    render() {
        console.log("items detail", this.props.query)
        return (
            <div className="container">
                <Header/><br/><br/>
                <h2 className="header" style={{marginTop:"40px", marginBottom:"40px"}}>Search Results</h2>
                <ul className="nav nav-pills" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="Buy" data-toggle="tab" href="#SaleItems" role="tab" aria-controls="userItemsContent" aria-selected="true">Sell Items</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="Rent" data-toggle="tab" href="#RentItems" role="tab" aria-controls="requestedItemsContent" aria-selected="false">Rent Items</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="Wtb" data-toggle="tab" href="#WTB" role="tab" aria-controls="userItemsContent" aria-selected="true">Want To Buy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="Wtr" data-toggle="tab" href="#WTR" role="tab" aria-controls="requestedItemsContent" aria-selected="false">Want To Rent</a>
                    </li>
                </ul><br/>

                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="SaleItems" role="tabpanel" aria-labelledby="userItems-tab">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <div className="right_content col-sm-12">
                                    <div className="row">
                                {this.props.query ? this.renderSaleItems() : ''}
                                </div>
                                </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="WTB" role="tabpanel" aria-labelledby="userItems-tab">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <div className="right_content col-sm-12">
                                <div className="row">
                            {this.props.query ? this.renderWTBItems() : ''}
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="tab-pane fade" id="RentItems" role="tabpanel" aria-labelledby="requestItems-tab">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                        <div className="right_content col-sm-12">
                                    <div className="row">
                            {this.props.query ? this.renderRentItems() : ""}
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="WTR" role="tabpanel" aria-labelledby="requestItems-tab">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <div className="right_content col-sm-12">
                                    <div className="row">
                            {this.props.query ? this.renderWTRItems() : ''}
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
    return { errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
        query : state.auth.query
    };
}

export default requireAuth(connect(mapStateToProps, actions)(wrappedForm));