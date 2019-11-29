import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import '../css/item.css'
import { stat } from 'fs';
import requireAuth from './requireAuth';

class ItemPage extends Component {

   
    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        await this.props.fetchUserDetail(this.props.userid) 
        await this.props.fetchSingleRentItem(this.props.match.params.itemid);
        await this.props.fetchSingleRentOwner(this.props.match.params.ownerid);
        await this.props.fetchRentReview({ itemId: this.props.match.params.itemid, currentUser: this.props.userid});
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

    renderInput = ({input , className, typename,placeholder}) => {
        return (
            <div>
                <input {...input} className={className} type={typename} placeholder={placeholder}/>
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

    onSubmit = (formValues) => {
        formValues.itemId = this.props.match.params.itemid;
        formValues.reviewerId = this.props.userid
        this.props.rentReview(formValues);
        window.history.go()
        // console.log(formValues);
    }


    render() {
        console.log(this.props.userid)
        console.log(this.props.match.params.itemid)
        console.log("current review ", this.props.review);
        const images = require.context('../../public/images', true);
        const userPhoto = images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image1}`: "./default.png");
        return (
            <div>
            <div className="container-fluid">
                <Header/>
            </div>
            <br/><br/><br/>
            <div className="container">
                    <div className="container-flex" style={{marginTop:"10px"}}>
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h2>{this.props.singleRentItem ? this.props.singleRentItem.item_name: ""}</h2>
                        </div>
                    </div>
                <div className="row">
                    <div className = "col-md-8">
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <div id="demo" className="carousel slide" data-ride="carousel">
                                        <ul className="carousel-indicators">
                                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                                            <li data-target="#demo" data-slide-to="1"></li>
                                        </ul>
                                        <div className="carousel-inner">
                                            {this.props.singleRentItem ? (this.props.singleRentItem.image1 ? <div className="carousel-item active">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image1 !== null ? this.props.singleRentItem.image1: "default.png"}`: "./default.png")} alt="Image1" width="1100" height="500"></img>
                                            </div>: '') : ""}

                                            {this.props.singleRentItem ? (this.props.singleRentItem.image2 ? <div className="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image2 !== null ? this.props.singleRentItem.image2 : "default.png"}`: "./default.png")} alt="Image2" width="1100" height="500"></img>
                                            </div> : "") : ''}
                                            
                                            {this.props.singleRentItem ? (this.props.singleRentItem.image3 ? <div className="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image3 !== null ? this.props.singleRentItem.image3 : "default.png"}`: "./default.png")} alt="Image3" width="1100" height="500"></img>
                                            </div> : '') : ""}
                                            
                                            {this.props.singleRentItem ? (this.props.singleRentItem.image4 ? <div className="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image4 !== null ? this.props.singleRentItem.image4 : "default.png"}`: "./default.png")} alt="Image4" width="1100" height="500"></img>
                                            </div> : '') : ""}
                                            
                                            {this.props.singleRentItem ? (this.props.singleRentItem.image5 ? <div className="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image5 !== null ? this.props.singleRentItem.image5 : "default.png"}`: "./default.png")} alt="Image5" width="1100" height="500"></img>
                                            </div> : '') : ''}
                                            
                                            {this.props.singleRentItem ? (this.props.singleRentItem.image6 ? <div className="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image6 !== null ? this.props.singleRentItem.image6: "default.png"}`: "./default.png")} alt="Image6" width="1100" height="500"></img>
                                            </div> : '') : ''}
                                                                                        
                                        </div>
                                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                            <span className="carousel-control-prev-icon"></span>
                                        </a>
                                        <a className="carousel-control-next" href="#demo" data-slide="next">
                                            <span className="carousel-control-next-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h2 style={{ margin : "10px"}}>Description</h2>
                                        <h4  style={{ margin : "10px"}}>{this.props.singleRentItem ? this.props.singleRentItem.item_dop: ''}</h4>
                                        <textarea rows="13" cols="0" className="form-control shadow-none" style={{border: "none",
                                            backgroundColor: "transparent",
                                            resize: "none",
                                            outline: "none",
                                            overflowY: "scroll"
                                            }} readOnly placeholder={this.props.singleRentItem ? this.props.singleRentItem.item_desc: ''}>
                                            </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h2>₹ {this.props.singleRentItem ? this.props.singleRentItem.rent_rate: ''} / hour</h2> 
                                    <h4>{this.props.singleRentItem ? this.props.singleRentItem.rent_duration_days: ''} days, {this.props.singleRentItem ? this.props.singleRentItem.rent_duration_hours: ''} hours</h4>  
                                    In <b>{this.props.singleRentItem ? this.props.singleRentItem.item_category : ''}</b>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h4>Seller Profile</h4><br/>
                                    <div className="card card-inverse card-info">
                                        <img className="card-img-top" src={images(this.props.singleRentOwner ? "./" + `${this.props.singleRentOwner.userImage}` :  "./default.png")} style={{width:"320pt",height:"200pt"}}/>
                                        <div className="card-block">
                                        <h4 className="card-title">{this.props.singleRentOwner ? this.props.singleRentOwner.firstName + " " + this.props.singleRentOwner.lastName : ""}</h4>
                                        
                                        <div>
                                            {this.props.singleRentOwner ? this.props.singleRentOwner.streetNo + ", " + this.props.singleRentOwner.city + ", " + this.props.singleRentOwner.state : ''}
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                        <Link className="btn btn-info btn-sm" to={`/otherUser/${this.props.singleRentOwner ? this.props.singleRentOwner.id : '' }`} style={{ float:"left"}}>View Profile</Link>
                                        <Link to={`/ChatBox/${this.props ? this.props.userid: ''}/${this.props.singleRentOwner? this.props.singleRentOwner.id: ''}`} onClick={() => console.log("something")} className="btn btn-info btn-sm" style={{ float:"right"}}>Message Owner</Link>
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded" style={{marginTop:"-0.50rem"}}>
                                <h4>Location</h4>
                                <iframe id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.props.singleRentOwner ? this.props.singleRentOwner.streetNo: ""}%20${this.props.singleRentOwner ? this.props.singleRentOwner.city: ""}%20${this.props.singleRentOwner ? this.props.singleRentOwner.state: ""}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="fi" marginwidth="0" style={{width:"100%", height:"200px"}}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-flex">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            {/* <h2 style={{paddingBottom:"20px"}}> Customer Reviews </h2> */}
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


                            {/* <div className="container">
                                <div className="card card-inverse card-info" style={{marginTop:"20px", marginBottom:"20px"}}>
                                    <div className="card-block">
                                        <figure className="profile profile-inline">
                                            <img src="https://picsum.photos/200/150/?random" className="profile-avatar" alt=""></img>
                                        </figure>
                                    <h4 className="card-title">Tawshif Ahsan Khan</h4>
                                    <div className="card-text">
                                        <label>
                                            <i className="fa fa-star checked"></i>
                                            <i className="fa fa-star checked"></i>
                                            <i className="fa fa-star checked"></i>
                                            <i className="fa fa-star checked"></i>
                                            <i className="fa fa-star-half checked"></i>
                                        </label><br/>
                                        <label><b>Title</b></label><br/>
                                        Tawshif is a web designer living in Bangladesh.
                                    </div>
                                    </div>
                                </div>
                                
                            </div> */}
                        </div>
                    </div>
            </div>
            </div>
        )
    }
};

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
    form: 'itempage',
    validate: validate
})(ItemPage);

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
        userDetail: state.auth.userDetail,
        singleRentItem: state.auth.singleRentItem,
        singleRentOwner: state.auth.singleRentOwner,
        review: state.auth.rent_review
    };
}

export default requireAuth(connect(mapStateToProps, actions)(wrappedForm));

