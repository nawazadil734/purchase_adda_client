import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import requireAuth from './requireAuth';
import history from '../history';

class OtherUserProfile extends Component {

    renderSaleItems = () => {
        return this.props.fetchUserSellingItems.map(item => {
            const images = require.context('../../public/images', true);
            const userPhoto = images("./" + `${item.image1}`);
            return ( 
                <div className="col-sm-4">
                <div className="card">
                        <img className="card-img-top" src={userPhoto} alt="iamge" style={{width:"190pt",height:"120pt"}}></img>
                        {/* <div  style={{ width:"100%",textAlign:"right", position:"absolute",right:"0"}}>
                            <Link to={`/deleteSaleItem/${item.item_id}`} className="btn btn-primary rounded-0" type="submit">X</Link>
                        </div> */}
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
        return this.props.fetchUserRentingItems.map(item => {
            const images = require.context('../../public/images', true);
            const userPhoto = images("./" + `${item.image1}`);
            return ( 
                <div className="col-sm-4">
                <div className="card">
                        <img className="card-img-top" src={userPhoto} alt="iamge" style={{width:"190pt",height:"120pt"}}></img>
                        {/* <div  style={{ width:"100%",textAlign:"right", position:"absolute",right:"0"}}>
                        <Link to={`/deleteRentItem/${item.item_id}`} className="btn btn-primary rounded-0" type="submit">X</Link>
                        </div> */}
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
        return this.props.fetchUserWTBuyItems.map(item => {
            return (
                        <div className="col-sm-4">
                            <div className="card">
                            
                                {/* <div style={{ width:"100%",textAlign:"right"}}>
                                    <Link to={`/deleteWtbItem/${item.item_id}`} className="btn btn-primary rounded-0" type="submit">X</Link>
                                </div> */}
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
        return this.props.fetchUserWTRentItems.map(item => {
            return (
                        <div className="col-sm-4">
                            <div className="card">
                                {/* <div style={{ width:"100%",textAlign:"right"}}>
                                <Link to={`/deleteWtrItem/${item.item_id}`}className="btn btn-primary rounded-0" type="submit">X</Link>
                                </div> */}
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
        await this.props.fetchUserDetail(this.props.userid) 
        await this.props.fetchOwnerProfile(this.props.match.params.id)
        await this.props.sellerRating(this.props.match.params.id);
        await this.props.fetchCurrentUserId();
        await this.props.fetchUserSaleItem(this.props.match.params.id);
        await this.props.fetchUserRentItem(this.props.match.params.id);
        await this.props.fetchUserWTBItem(this.props.match.params.id);
        await this.props.fetchUserWTRItem(this.props.match.params.id);
        await this.props.fetchSellerReview({ ownerId: this.props.match.params.id, currentUser: this.props.userid});
    }


    renderSpinner = ({input, meta, type, className, step, min, max,divStyle, placeholder}) => {
        return(
            <div>
            <input {...input}
                className={className}
                type={type}
                style={divStyle}
                autoComplete="off"
                max={max}
                min={min}
                placeholder={placeholder}
                step={step}
            />
            </div>
        );
    }

    renderLabel = ({label,meta, inside}) => {
        return (
            <div className="form-group" style={{paddingLeft:"20px", paddingRight:"20px"}}>
            <div className="row">
                    <div className="col-sm">
                            <label >{label}</label>
                    </div>
                    <label className="col-sm" style={{textAlign: "right", color:"black"}}>
                            {inside}
                    </label>
                  </div>
            </div>
        );
    }

    renderTextArea = ({className,input ,meta, rows, cols,id,placeholder}) => {
        return (
            <div className="form-group">
                <textarea {...input} className={className} id={id} rows={rows} cols={cols} placeholder={placeholder} />
            </div>
        );
    }

    renderInput = ({input , className, typename,placeholder}) => {
        return (
            <div>
                <input {...input} className={className} type={typename} placeholder={placeholder}/>
            </div>
        );
    }

    onSubmit = (formValues) => {
        formValues.sellerId = this.props.fetchOwnerProfileDetail.id;
        formValues.reviewerId = this.props.userid;
        this.props.sellerReview(formValues)
        window.history.go()
        console.log(formValues);
    }
    
    render() {
        console.log("rating" , this.props.match.params.id)

        const images = require.context('../../public/images', true);
        const userPhoto = images(this.props.fetchOwnerProfileDetail ? "./" + `${this.props.fetchOwnerProfileDetail.userImage}`: "./default.png");
        return (
            <div>
                <div className="container-fluid" style={{marginBottom: "15pt"}}>
                    <Header/>
                </div><br/><br/><br/><br/>
                <div className="container">
                <div className = "row">
            <div className="col-sm-3">
            <div className="shadow p-3 mb-5 bg-white rounded">
                    <img src={userPhoto} className="img-fluid" alt="..." style={{width:"320pt",height:"200pt"}}></img>
            </div>
            {/* <div>
                <Link to="/profile" style={{fontSize:"20px", color:"#191919"}}><b>My Profile</b></Link>
            </div>  
            <hr/>
            <div>
                <Link to="/myitems" style={{fontSize:"20px",color:"#191919"}}><b >My Items & Requests</b></Link>
            </div> */}
            {/* <hr/> */}
            <div style={{ textAlign: "center"}}>
            
            <Link style={{fontSize:"18px"}} className="btn btn-primary" to={`/ChatBox/${this.props ? this.props.userid: ''}/${this.props.match.params.id}`}>Message Owner <i class='far fa-comments'></i></Link>
            </div>
            {/* <hr/> */}
            </div>
            <div className="col-sm-9">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h1 style={{paddingLeft:"20px"}}>{this.props.fetchOwnerProfileDetail ? this.props.fetchOwnerProfileDetail.firstName + " " + this.props.fetchOwnerProfileDetail.lastName : ""} </h1>
                            <i className='fas fa-map-marker-alt' style={{paddingLeft:"20px",paddingRight: "8px", paddingBottom: "10px"}}></i>{this.props.fetchOwnerProfileDetail ? this.props.fetchOwnerProfileDetail.streetNo + ",  " + this.props.fetchOwnerProfileDetail.city + ", " + this.props.fetchOwnerProfileDetail.state : ' ' }<br/>
                    </div>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h3 style={{paddingLeft:"20px",paddingBottom: "10px",paddingRight:"20px"}}> Rating
                            <span style={{float:"right"}}> <b>{this.props.ratingOfSeller ? this.props.ratingOfSeller.rate.toFixed(2): ''}</b>/5</span>
                        </h3><br/>
                       
                         {/* <div className="container">
                            <form className="form-group" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div className="form-group" style={{paddingBottom:"20px"}}>
                                    <h4 for="comment"><b>Create Your Review:</b></h4>
                                    <div className="form-group">
                                        <label>Rating</label><br/>
                                        <Field name="Rating" component={this.renderSpinner} className="form-control" divStyle={{width:"80px"}} SelId="Rating" type="number" min="0" max="5" step="0.5"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Title</label><br/>
                                        <Field name="Title" component={this.renderInput} typename="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Comment</label><br/>
                                        <Field name="Description" component={this.renderTextArea} className="form-control" rows="2" id="desc"/>
                                    </div>
                                    <button className="btn btn-primary" style={{marginTop:"10px"}} type="submit">Publish</button>
                                </div>
                            </form>
                            </div> */}

                            <div className="container">
                            <form className="form-group" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div className="form-group" style={{paddingBottom:"20px"}}>
                                    <h4 for="comment"><b>Create Your Review:</b></h4>
                                    <div className="form-group">
                                        <label>Rating</label><br/>
                                        <Field name="Rating" component={this.renderSpinner} className="form-control" divStyle={{width:"80px"}} SelId="Rating" 
                                            type="number" min="0" max="5" step="0.5"
                                                placeholder={this.props.review ? this.props.review.rating: ''}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label>Title</label><br/>
                                        <Field name="Title" component={this.renderInput} typename="text" className="form-control" 
                                            placeholder={this.props.review ? this.props.review.title : ''}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Comment</label><br/>
                                        <Field name="Description" component={this.renderTextArea} className="form-control" rows="2" id="desc"
                                             placeholder={this.props.review ? this.props.review.comment : ''}/>
                                    </div>
                                    <button className="btn btn-primary" style={{marginTop:"10px"}} type="submit" onClick={() => alert("Review Submitted")}>Publish</button>
                                </div>
                            </form>
                            </div>


                            <div className="container">
                
                <h2 className="header" style={{marginTop:"40px", marginBottom:"40px"}}>Seller Products and Ads<hr/></h2>
                <ul className="nav nav-pills" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="Buy" data-toggle="tab" href="#SaleItems" role="tab" aria-controls="userItemsContent" aria-selected="true">Sell Items</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="Rent" data-toggle="tab" href="#RentItems" role="tab" aria-controls="requestedItemsContent" aria-selected="false">Rent Items</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="Wtb" data-toggle="tab" href="#WTB" role="tab" aria-controls="userItemsContent" aria-selected="true">Asked for Buy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="Wtr" data-toggle="tab" href="#WTR" role="tab" aria-controls="requestedItemsContent" aria-selected="false">Asked for Rent</a>
                    </li>
                </ul><br/>


                
                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="SaleItems" role="tabpanel" aria-labelledby="userItems-tab">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <div className="right_content col-sm-12">
                                    <div className="row">
                                {this.props.fetchUserSellingItems ? this.renderSaleItems() : ''}
                                </div>
                                </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="WTB" role="tabpanel" aria-labelledby="userItems-tab">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <div className="right_content col-sm-12">
                                <div className="row">
                            {this.props.fetchUserWTBuyItems ? this.renderWTBItems() : ''}
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="tab-pane fade" id="RentItems" role="tabpanel" aria-labelledby="requestItems-tab">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                        <div className="right_content col-sm-12">
                                    <div className="row">
                            {this.props.fetchUserRentingItems ? this.renderRentItems() : ""}
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="WTR" role="tabpanel" aria-labelledby="requestItems-tab">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <div className="right_content col-sm-12">
                                    <div className="row">
                            {this.props.fetchUserWTRentItems ? this.renderWTRItems() : ''}
                                    </div>
                                </div>
                        </div>
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
    if(!formValues.Rating) {
        errors.Rating = "Please enter your Rating ";
    }
    if(!formValues.Title) {
        errors.Title = "Please enter your Title";
    }
    if(!formValues.Description) {
        errors.Description = "Please enter your Description";
    }
    
    return errors;
}


const wrappedForm = reduxForm({
        form: 'otheruserprofile',
        validate: validate
})(OtherUserProfile);

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
        userDetail: state.auth.userDetail,
        fetchOwnerProfileDetail: state.auth.fetchOwnerProfileDetail,
        fetchUserWTBuyItems: state.auth.fetchUserWTBuyItems,
        fetchUserWTRentItems: state.auth.fetchUserWTRentItems,
        fetchUserSellingItems: state.auth.fetchUserSellingItems,
        fetchUserRentingItems:state.auth.fetchUserRentingItems,
        ratingOfSeller : state.auth.sellerRate,
        review: state.auth.seller_review
    };
}

export default requireAuth(connect(mapStateToProps, actions)(wrappedForm))