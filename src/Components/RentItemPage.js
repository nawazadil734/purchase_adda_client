import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import '../css/item.css'

class ItemPage extends Component {

    onSubmit = (formValues) => {
        console.log(formValues);
    }

    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        await this.props.fetchUserDetail(this.props.userid) 
        await this.props.fetchSingleRentItem(this.props.match.params.itemid);
        await this.props.fetchSingleRentOwner(this.props.match.params.ownerid);
    }

    renderSpinner = ({input, meta, type, classname, step, min, max,divStyle}) => {
        return(
            <div>
            <input {...input}
                class={classname}
                type={type}
                style={divStyle}
                autoComplete="off"
                max={max}
                min={min}
                step={step}
            />
            </div>
        );
    }

    renderInput = ({input , classname, typename}) => {
        return (
            <div>
                <input {...input} className={classname} type={typename} />
            </div>
        );
    }

    renderTextArea = ({classname,input ,meta, rows, cols,id}) => {
        return (
            <div class="form-group">
                <textarea {...input} className={classname} id={id} rows={rows} cols={cols} />
            </div>
        );
    }

    render() {
        const images = require.context('../../public/images', true);
        const userPhoto = images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image1}`: "./default.png");
        return (
            <div>
            <div className="container-fluid">
                <Header/>
            </div>
            <br/><br/><br/>
            <div className="container">
                    <div classname="container-flex" style={{marginTop:"10px"}}>
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h2>{this.props.singleRentItem ? this.props.singleRentItem.item_name: ""}</h2>
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
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image1}`: "./default.png")} alt="Image 1" width="1100" height="500"></img>
                                            </div>
                                            <div class="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image2}`: "./default.png")} alt="Image 2" width="1100" height="500"></img>
                                            </div>
                                            <div class="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image3}`: "./default.png")} alt="Image 3" width="1100" height="500"></img>
                                            </div>
                                            <div class="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image4}`: "./default.png")} alt="Image 4" width="1100" height="500"></img>
                                            </div>
                                            <div class="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image5}`: "./default.png")} alt="Image 5" width="1100" height="500"></img>
                                            </div>
                                            <div class="carousel-item">
                                            <img src={images(this.props.singleRentItem ? "./" + `${this.props.singleRentItem.image6}`: "./default.png")} alt="Image 6" width="1100" height="500"></img>
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
                                    <div class="card card-inverse card-info">
                                        <img class="card-img-top" src={images(this.props.singleRentOwner ? "./" + `${this.props.singleRentOwner.userImage}` :  "./default.png")} style={{width:"320pt",height:"200pt"}}/>
                                        <div class="card-block">
                                        <h4 class="card-title">{this.props.singleRentOwner ? this.props.singleRentOwner.firstName + " " + this.props.singleRentOwner.lastName : ""}</h4>
                                        
                                        <div>
                                            {this.props.singleRentOwner ? this.props.singleRentOwner.streetNo + ", " + this.props.singleRentOwner.city + ", " + this.props.singleRentOwner.state : ''}
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                        <Link class="btn btn-info btn-sm" to={`/otherUser/${this.props.singleRentOwner ? this.props.singleRentOwner.id : '' }`} style={{ float:"left"}}>View Profile</Link>
                                            <Link to="/message" class="btn btn-info btn-sm" style={{ float:"right"}}>Message Owner</Link>
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
                <div classname="container-flex">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h2 style={{paddingBottom:"20px"}}> Customer Reviews </h2>
                            <div className="container">
                            <form className="form-group" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div class="form-group" style={{paddingBottom:"20px"}}>
                                    <h4 for="comment"><b>Create Your Review:</b></h4>
                                    <div className="form-group">
                                        <label>Rating</label><br/>
                                        <Field name="Rating" component={this.renderSpinner} classname="form-control" divStyle={{width:"80px"}} SelId="Rating" type="number" min="0" max="5" step="0.5"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Title</label><br/>
                                        <Field name="Title" component={this.renderInput} typename="text" classname="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label><br/>
                                        <Field name="Description" component={this.renderTextArea} classname="form-control" rows="2" id="desc"/>
                                    </div>
                                    <button className="btn btn-primary" style={{marginTop:"10px"}} type="submit">Publish</button>
                                </div>
                            </form>
                            </div>
                            <div className="container">
                                <div class="card card-inverse card-info" style={{marginTop:"20px", marginBottom:"20px"}}>
                                    <div class="card-block">
                                        <figure class="profile profile-inline">
                                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                                        </figure>
                                    <h4 class="card-title">Tawshif Ahsan Khan</h4>
                                    <div class="card-text">
                                        <label>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star-half checked"></i>
                                        </label><br/>
                                        <label><b>Title</b></label><br/>
                                        Tawshif is a web designer living in Bangladesh.
                                    </div>
                                    </div>
                                </div>
                                <div class="card card-inverse card-info" style={{marginTop:"20px", marginBottom:"20px"}}>
                                    <div class="card-block">
                                        <figure class="profile profile-inline">
                                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                                        </figure>
                                    <h4 class="card-title">Tawshif Ahsan Khan</h4>
                                    <div class="card-text">
                                        <label>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star-half checked"></i>
                                        </label><br/>
                                        <label><b>Title</b></label><br/>
                                        Tawshif is a web designer living in Bangladesh.
                                        <i class="fa fa-star-half-o"></i>
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

const validate = (formValues) => {
    const errors = {}
    
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
        singleRentOwner: state.auth.singleRentOwner
    };
}

export default connect(mapStateToProps, actions)(wrappedForm);

