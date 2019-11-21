import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import '../css/item.css'

class RequestItem extends Component {

    componentDidMount() {
        this.props.fetchCurrentUserId();
        this.props.fetchSingleReqWtb(this.props.match.params.itemid);
        this.props.fetchSingleReqWtbOwner(this.props.match.params.ownerid);
    }

    onSubmit = (formValues) => {
        console.log(formValues);
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
        // console.log("i am para",this.props.match.params)
        // console.log("item", this.props.itemDetail);
        // console.log("owner", this.props.ownerDetail);
        const images = require.context('../../public/images', true);
        return (
            <div>
            <div className="container-fluid">
                <Header/>
            </div>
            <br/><br/><br/>
            <div className="container">
                    <div classname="container-flex" style={{marginTop:"20px"}}>
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h2>{this.props.itemDetail ? this.props.itemDetail.item_name : ''} </h2>
                        </div>
                    </div>
                <div className="row">
                    <div className = "col-md-8">
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h2>Rs: {this.props.itemDetail ? this.props.itemDetail.item_price : ''}</h2><br/>
                                    <label>{this.props.itemDetail ? this.props.itemDetail.item_category : ''}</label><br/>
                                    {/* <textarea rows="2" cols="0" style={{border: "none",
                                            backgroundColor: "transparent",
                                            resize: "none",
                                            outline: "none",
                                            overflow: "hidden",
                                            width: "100%",
                                            color: "grey" }} readOnly> */}
                                            <label>
                                            {this.props.ownerDetail ? this.props.ownerDetail.streetNo  + " , "  +  this.props.ownerDetail.city + " , " + this.props.ownerDetail.state : ""}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h2 style={{ margin : "10px"}}>Description</h2>
                                    <textarea rows="13" cols="0" className="form-control shadow-none" style={{border: "none",
                                            backgroundColor: "transparent",
                                            resize: "none",
                                            outline: "none",
                                            overflowY: "scroll"
                                            }} readOnly placeholder={this.props.itemDetail ? this.props.itemDetail.item_desc : ''}>
                                            </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                   
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                <h4>Location</h4>
                                <iframe id="gmap_canvas" 
                                    src={`https://maps.google.com/maps?q=${this.props.ownerDetail ? this.props.ownerDetail.streetNo: ""}%20${this.props.ownerDetail ? this.props.ownerDetail.city: ""}%20${this.props.ownerDetail ? this.props.ownerDetail.state: ""}&t=&z=13&ie=UTF8&iwloc=&output=embed`} 
                                    frameborder="0" 
                                    scrolling="no" 
                                    marginheight="fi" 
                                    marginwidth="0" 
                                    style={{width:"100%", height:"340px"}}></iframe>
                                
                                </div>
                            </div>
                        </div>
                        
                    
                    <div className="row" >
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h4>Requester Profile</h4><br/>
                                    <div className="card card-inverse card-info">
                                        <div className="card-block">
                                            <figure className="profile profile-inline">
                                                <img src={images(this.props.ownerDetail ? "./" + `${this.props.ownerDetail.userImage !== null ? this.props.ownerDetail.userImage : "default.png"}`: "./default.png")} className="profile-avatar" alt=""></img>
                                            </figure>
                                            
                                        <h4 className="card-title">{this.props.ownerDetail ? this.props.ownerDetail.firstName + " " + this.props.ownerDetail.lastName : ''}</h4>
                                        
                                        </div>
                                        <label>
                                            {this.props.ownerDetail ? this.props.ownerDetail.streetNo  + " , "  +  this.props.ownerDetail.city + " , " + this.props.ownerDetail.state : ""}
                                        </label>
                                        <div class="card-footer">
                                            <Link class="btn btn-info btn-sm" to={`/otherUser/${this.props.ownerDetail ? this.props.ownerDetail.id : '' }`} style={{ float:"left"}}>View Profile</Link>
                                            <Link to={`/ChatBox/${this.props ? this.props.userid: ''}/${this.props.ownerDetail? this.props.ownerDetail.id: ''}`} onClick={() => console.log("something")} className="btn btn-info btn-sm" style={{ float:"right"}}>Message Owner</Link>
                                        </div>
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
    form: 'RequestItem',
    validate: validate
})(RequestItem);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
            itemDetail: state.auth.fetchUserWTBitem,
            ownerDetail: state.auth.fetchSingleWTbOwner
        };
}

export default connect(mapStateToProps, actions)(wrappedForm);

