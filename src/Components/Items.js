import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
// import profileImg from './doe.jpg';
import '../css/item.css';
import _ from 'lodash';
import requireAuth from './requireAuth';
const categoty = ["bus","car","auto"]
class Items extends Component {

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

    renderTextArea = ({input, label, meta, rows, cols, inside}) => {
        return (
            <div className="form-group" style={{paddingLeft:"20px", paddingRight:"20px"}}>
                <div className="row">
                        <div className="col-sm">
                                <label>{label}</label>
                        </div>
                        <div className="col-sm" style={{textAlign: "right"}}>
                            <textarea {...input} rows={rows} cols={cols} style={{border: "none",
                                backgroundColor: "transparent",
                                resize: "none",
                                outline: "none",
                                overflow: "hidden",
                                width: "100%",
                                textAlign: "right" }} readOnly>{inside}</textarea>
                        </div>
                </div>
            </div>
        );
    }

    renderInput = ({input , classname, typename, minimum, maximum, step}) => {
        return (
            <div>
                <input {...input} className={classname} type={typename} min={minimum} step={step}></input>
            </div>
        );
    }

    renderSelector = ({input, categoryName, classname, divStyle}) => {
        return(
            <div>
                <select name={categoryName} className={classname} style={divStyle} {...input}>
                    <option value="">Category</option>
                    <option value="volvo">Volvoooooooooooooooo</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                    </select>
            </div>
        );
    };

    onSubmit = (formValues) => {
        console.log(formValues);
    }
    
    render() {
        return (
            <div>
            <div className="container-fluid">
            <Header/>
            </div>
            <div className="container" style={{paddingLeft:"20pt",paddingRight:"20pt"}}>
            <br/>
                <div className = "row">
                    <div className="left_content col-sm-3">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <form className="form-group" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div className="form-group">
                                    <label style={{fontSize:"20px", color:"#191919"}}><b>Price</b></label>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Min</label>
                                            <Field name="min" classname="form-control" component={this.renderInput} typename="number" minimum="0"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Max</label>
                                            <Field name="max" classname="form-control" component={this.renderInput} typename="number" minimum="0"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label style={{fontSize:"20px", color:"#191919"}}><b>Rating</b></label>
                                    <hr/>
                                    <div className="row">
                                    <div className="col-sm-6">
                                        <label>Minimum Rating</label>
                                        <Field name="minrating" classname="form-control" component={this.renderInput} typename="number" minimum="0" step="0.1" maximum="5"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label style={{fontSize:"20px", color:"#191919"}}><b>Category</b></label>
                                    <hr/>
                                    <div className="row">
                                        <Field name="category" categoryName="Category" component={this.renderSelector} classname="custom-select w-auto" divStyle={{marginLeft:"15px", marginRight:"15px"}}/>
                                    </div>
                                </div>
                                <div className="form-group" style={{textAlign:"center"}}>
                                    <button type="submit" className="btn btn-primary">Apply</button>
                                </div>
                            </form>        
                        </div>
                </div>
                <div className="right_content col-sm-9" >
                    <div className="shadow p-3 mb-5 bg-white rounded">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/200/150/?random" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">Item_Name</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 360
                                </div>
                                </div>
                                <div className="card-footer">
                                    <small>Books</small>
                                <Link className="btn btn-primary float-right btn-sm" to="/itempage">View</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/200/150/?random" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">Item_Name</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 360
                                </div>
                                </div>
                                <div className="card-footer">
                                    <small>Books</small>
                                <Link className="btn btn-primary float-right btn-sm" to="/itempage" >View</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/200/150/?random" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">Item_Name</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 360
                                </div>
                                </div>
                                <div className="card-footer">
                                    <small>Books</small>
                                <Link to="" className="btn btn-primary float-right btn-sm">View</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row" style={{marginTop:"25px"}}>
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/200/150/?random" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">Item_Name</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 360
                                </div>
                                </div>
                                <div className="card-footer">
                                    <small>Books</small>
                                <Link to=""  className="btn btn-primary float-right btn-sm">View</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/200/150/?random" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">Item_Name</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 360
                                </div>
                                </div>
                                <div className="card-footer">
                                    <small>Books</small>
                                <Link to=""  className="btn btn-primary float-right btn-sm">View</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/200/150/?random" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">Item_Name</h4>
                                <div className="card-text">
                                    <b>Rating</b>: 4/5<br/>
                                    <b>Price</b>: Rs 360
                                </div>
                                </div>
                                <div className="card-footer">
                                    <small>Books</small>
                                <Link to=""  className="btn btn-primary float-right btn-sm">View</Link>
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
    
    return errors;
}

const wrappedForm = reduxForm({
        form: 'items',
        validate: validate
})(Items);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default requireAuth(connect(mapStateToProps, actions)(wrappedForm));