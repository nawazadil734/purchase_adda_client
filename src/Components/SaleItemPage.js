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
        await this.props.fetchSingleSaleItem(this.props.match.params.itemid);
        await this.props.fetchSingleSaleOwner(this.props.match.params.ownerid);
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
            // onChange={formProps.input.onChange} 
            // value={formProps.input.value}
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
        // const userPhoto = images(this.props.singleSaleItem ? "./" + `${this.props.singleSaleItem.image1}`: "./default.png");
        console.log("chekck" ,this.props.singleSaleItem ? this.props.singleSaleItem.image5 : '')
        return (
            <div>
            <div className="container-fluid">
                <Header/>
            </div>
            <br/><br/><br/>
            <div className="container">
                    <div classname="container-flex" style={{marginTop:"10px"}}>
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h2>{this.props.singleSaleItem ? this.props.singleSaleItem.item_name: ""}</h2>
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
                                        
                                            {this.props.singleSaleItem ? (this.props.singleSaleItem.image1 ? <div class="carousel-item active">
                                            <img src={images(this.props.singleSaleItem ? "./" + `${this.props.singleSaleItem.image1 !== null ? this.props.singleSaleItem.image1 : "default.png"}`: "./default.png")} alt="Image1" width="1100" height="500"></img>
                                            </div> : '') : ""}
                                            

                                            {this.props.singleSaleItem ? (this.props.singleSaleItem.image2 ? <div class="carousel-item"> 
                                            <img src={images(this.props.singleSaleItem ? "./" + `${this.props.singleSaleItem.image2 !== null ? this.props.singleSaleItem.image2 :  "default.png"}`: "./default.png")} alt="Image2" width="1100" height="500"></img>
                                            </div> : '') : ''}
                                            
                                            {this.props.singleSaleItem ? (this.props.singleSaleItem.image3 ? <div class="carousel-item">
                                            <img src={images(this.props.singleSaleItem ? "./" + `${this.props.singleSaleItem.image3 !== null ? this.props.singleSaleItem.image3:  "default.png"}`: "./default.png")} alt="Image3" width="1100" height="500"></img>
                                            </div> : '') : ''}
                                            
                                            {this.props.singleSaleItem ? (this.props.singleSaleItem.image4 ? <div class="carousel-item">
                                            <img src={images(this.props.singleSaleItem ? "./" + `${this.props.singleSaleItem.image4 !== null ? this.props.singleSaleItem.image4 : "default.png"}`: "./default.png")} alt="Image4" width="1100" height="500"></img>
                                            </div> : '') : ""}
                                            
                                            {this.props.singleSaleItem ? (this.props.singleSaleItem.image5 ? <div class="carousel-item">
                                            <img src={images(this.props.singleSaleItem ? "./" + `${this.props.singleSaleItem.image5 !== null ? this.props.singleSaleItem.image5 : "default.png"}`: "./default.png")} alt="Image5" width="1100" height="500"></img>
                                            </div> : ' ') : ''}
                                            
                                            {this.props.singleSaleItem ? (this.props.singleSaleItem.image6 ? <div class="carousel-item">
                                            <img src={images(this.props.singleSaleItem ? "./" + `${this.props.singleSaleItem.image6 !== null ? this.props.singleSaleItem.image6 : "default.png"}`: "./default.png")} alt="Image6" width="1100" height="500"></img>
                                            </div> : '') : ''}
                                            
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
                                        <h4  style={{ margin : "10px"}}>{this.props.singleSaleItem ? this.props.singleSaleItem.item_dop: ''}</h4>
                                        <textarea rows="13" cols="0" className="form-control shadow-none" style={{border: "none",
                                            backgroundColor: "transparent",
                                            resize: "none",
                                            outline: "none",
                                            overflowY: "scroll"
                                            }} readOnly placeholder={this.props.singleSaleItem ? this.props.singleSaleItem.item_desc: ''}>
                                            </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h2>₹ {this.props.singleSaleItem ? this.props.singleSaleItem.item_price: ''}</h2> 
                                    In <b>{this.props.singleSaleItem ? this.props.singleSaleItem.item_category : ''}</b>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h4>Seller Profile</h4><br/>
                                    <div class="card card-inverse card-info">
                                        <img class="card-img-top" src={images(this.props.singleSaleOwner ? "./" + `${this.props.singleSaleOwner.userImage}` :  "./default.png")} style={{width:"320pt",height:"200pt"}}></img>
                                        <div class="card-block">
                                            {/* <figure class="profile profile-inline">
                                                <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                                            </figure> */}
                                        <h4 class="card-title">{this.props.singleSaleOwner ? this.props.singleSaleOwner.firstName + " " + this.props.singleSaleOwner.lastName : ""}</h4>
                                        
                                        <div>
                                            {this.props.singleSaleOwner ? this.props.singleSaleOwner.streetNo + ", " + this.props.singleSaleOwner.city + ", " + this.props.singleSaleOwner.state : ''}
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <Link class="btn btn-info btn-sm" to={`/otherUser/${this.props.singleSaleOwner ? this.props.singleSaleOwner.id : '' }`} style={{ float:"left"}}>View Profile</Link>
                                            <Link to={`/ChatBox/${this.props ? this.props.userid: ''}/${this.props.singleSaleOwner? this.props.singleSaleOwner.id: ''}`} onClick={() => console.log("something")} className="btn btn-info btn-sm" style={{ float:"right"}}>Message Owner</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded" style={{marginTop:"-0.50rem"}}>
                                <h4>Location</h4>
                                <iframe id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.props.singleSaleOwner ? this.props.singleSaleOwner.streetNo: ""}%20${this.props.singleSaleOwner ? this.props.singleSaleOwner.city: ""}%20${this.props.singleSaleOwner ? this.props.singleSaleOwner.state: ""}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="fi" marginwidth="0" style={{width:"100%", height:"200px"}}></iframe>
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
        singleSaleItem: state.auth.singleSaleItem,
        singleSaleOwner: state.auth.singleSaleOwner
    };
}

export default connect(mapStateToProps, actions)(wrappedForm);

