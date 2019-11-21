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
import ReqItemcard from './ReqItemCard';
class RequestItems extends Component {

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

    renderRadioButton = ({}) => {
        return(
            <div className="form-group" >
                <div class="form-check">
                    <label class="form-check-label" for="radio1">
                        <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked/>Ascending
                    </label>
                    </div>
                    <div class="form-check">
                    <label class="form-check-label" for="radio2">
                        <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2"/>Descending
                    </label>
                    </div>
                    <div class="form-check">
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
                    <option value="" selected hidden>Category</option>
                    <option>Books</option>
                    <option>Stationery</option>
                    <option>Tools</option>
                    <option>Computing</option>
                    <option>Phones and Tablets</option>
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
            </div><br/><br/>
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
                                    <label style={{fontSize:"20px", color:"#191919"}}><b>Request Type</b></label>
                                    <hr/>
                                    <Field name="reqType" categoryName="reqType" component={this.renderSelector} classname="custom-select" divStyle={{paddingLeftt:"15px", paddingRight:"15px"}}/>
                                </div>
                                <div className="form-group">
                                    <label style={{fontSize:"20px", color:"#191919"}}><b>Category</b></label>
                                    <hr/>
                                    <Field name="category" categoryName="Category" component={this.renderSelector} classname="custom-select" divStyle={{paddingLeft:"15px", paddingRight:"15px"}}/>
                                </div>
                                <div className="form-group">
                                    <label style={{fontSize:"20px", color:"#191919"}}><b>Sort By</b></label>
                                    <hr/>
                                    <Field name="sortBy" component={this.renderRadioButton} />
                                </div>
                                <div className="form-group" style={{textAlign:"center"}}>
                                    <button type="submit" className="btn btn-primary">Apply</button>
                                </div>
                            </form>        
                        </div>
                </div>
                <div className="right_content col-sm-9" >
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <ReqItemcard/>
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
        form: 'requestItems',
        validate: validate
})(RequestItems);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions)(wrappedForm);