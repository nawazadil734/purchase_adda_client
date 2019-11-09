import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import requireAuth from './requireAuth';
class OtherUserProfile extends Component {

    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        await this.props.fetchUserDetail(this.props.userid) 
        await this.props.fetchOwnerProfile(this.props.match.params.id)
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

    renderTextArea = ({label, meta, rows, cols, inside}) => {
        return (
            <div className="form-group" style={{paddingLeft:"20px", paddingRight:"20px"}}>
                <div className="row">
                        <div className="col-sm">
                                <label>{label}</label>
                        </div>
                        <div className="col-sm" style={{textAlign: "right"}}>
                            <textarea rows={rows} cols={cols} style={{border: "none",
                                backgroundColor: "transparent",
                                resize: "none",
                                outline: "none",
                                overflow: "hidden",
                                width: "100%",
                                textAlign: "right" }} value={inside} readOnly></textarea>
                        </div>
                </div>
            </div>
        );
    }
    
    render() {
        console.log("current id" ,this.props.fetchOwnerProfileDetail)

        const images = require.context('../../public/images', true);
        const userPhoto = images(this.props.fetchOwnerProfileDetail ? "./" + `${this.props.fetchOwnerProfileDetail.userImage}`: "./default.png");
        return (
            <div>
                <div className="container-fluid" style={{marginBottom: "15pt"}}>
                    <Header/>
                </div><br/><br/><br/>
                <div className="container">
                <div className = "row">
            <div className="col-sm-3">
            <div className="shadow p-3 mb-5 bg-white rounded">
                    <img src={userPhoto} className="img-fluid" alt="..." style={{width:"320pt",height:"200pt"}}></img>
            </div>
            <div>
                <Link to="/profile" style={{fontSize:"20px", color:"#191919"}}><b>My Profile</b></Link>
            </div>  
            <hr/>
            <div>
                <Link to="/myitems" style={{fontSize:"20px",color:"#191919"}}><b >My Items & Requests</b></Link>
            </div>
            <hr/>
            <div>
                <Link to="/message"  style={{fontSize:"20px",color:"#191919"}}><b>Message</b></Link>
            </div>
            <hr/>
            </div>
            <div className="col-sm-9">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h1 style={{paddingLeft:"20px"}}>{this.props.fetchOwnerProfileDetail ? this.props.fetchOwnerProfileDetail.firstName + " " + this.props.fetchOwnerProfileDetail.lastName : ""} </h1>
                            <i className='fas fa-map-marker-alt' style={{paddingLeft:"20px",paddingRight: "8px", paddingBottom: "10px"}}></i>{this.props.fetchOwnerProfileDetail ? this.props.fetchOwnerProfileDetail.streetNo + ",  " + this.props.fetchOwnerProfileDetail.city + ", " + this.props.fetchOwnerProfileDetail.state : ' ' }<br/>
                    </div>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h3 style={{paddingLeft:"20px",paddingBottom: "10px",paddingRight:"20px"}}> Rating
                            <span style={{float:"right"}}> <b>4</b>/5</span>
                        </h3><br/>
                        <form className="form-group" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <label style={{paddingLeft:"20px",paddingBottom: "10px", width:"100%",paddingRight:"20px"}}>Your Rating
                                <div className="form-group" style={{float:"right"}}>
                                    <Field name="Rating" component={this.renderSpinner} classname="form-control" divStyle={{width:"80px", float:"right"}} SelId="Rating" type="number" min="0" max="5" step="0.5"/>
                                </div>
                            </label>
                            <div className="form-group" style={{textAlign:"center",paddingLeft:"20px",paddingBottom: "10px", width:"100%",paddingRight:"20px"}}>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <h3 className="header" style={{paddingLeft:"20pt",paddingRight:"20pt",marginTop:"40px", marginBottom:"40px"}}>userName Recently Listed Items<Link to="/setting" style ={{float:"right"}} className="btn btn-outline-primary waves-effect"  type="button">View All</Link><hr/></h3>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <div class="row">
                            <div class="col-sm-4">
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
                            <div class="col-sm-4">
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
                            <div class="col-sm-4">
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
                    <h3 className="header" style={{paddingLeft:"20pt",paddingRight:"20pt",marginTop:"40px", marginBottom:"40px"}}>userName Recently Listed Requests<Link to="/setting" style ={{float:"right"}} className="btn btn-outline-primary waves-effect"  type="button">View All</Link><hr/></h3>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <div class="row">
                            <div class="col-sm-4">
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
                            <div class="col-sm-4">
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
                            <div class="col-sm-4">
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
                        </div>
                        
                        </div>
            </div>
        </div>
        
        </div>
            </div>
        );
    }
}

const wrappedForm = reduxForm({
        form: 'otheruserprofile'
})(OtherUserProfile);

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
        userDetail: state.auth.userDetail,
        fetchOwnerProfileDetail: state.auth.fetchOwnerProfileDetail
    };
}

export default connect(mapStateToProps, actions)(wrappedForm)