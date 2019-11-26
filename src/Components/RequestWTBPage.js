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
import ReqItemWTBcard from './ReqItemWTBCard';
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

    renderRadioButton = () => {
        return(
            <div className="form-group" >
                <div class="form-check">
                    <div>
                        <label>
                            <Field name="sort" component="input" type="radio" value="asc" />{' '}
                            Ascending
                        </label>
                        <br/>
                        <label>
                            <Field name="sort" component="input" type="radio" value="desc" />{' '}
                            Descending
                        </label>
                    </div>
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
        if(!formValues.minPrice) formValues.minPrice = ''
        if(!formValues.maxPrice) formValues.maxPrice = ''
        if(!formValues.category) formValues.category = ''
        if(!formValues.sort) formValues.sort = '' 
        console.log(formValues);
        this.props.fetchReqWTBItems(formValues);
    }
    
    render() {
        return (
            <div>
            <div className="container-fluid">
            <Header/>
            </div><br/><br/><br/><br/>

            
            <div className="container" style={{paddingLeft:"20pt",paddingRight:"20pt", overflow:"hidden"}}>
            
            {/* <div className="row">
                        <div className="col-sm-12">
                            <div className="shadow p-3 mb-5 bg-white rounded">
                                <h1 style={{width:"100%"}}>WTB Requested Items<Link to="/newRequestForm" className="btn btn-primary" style={{float:"right", marginTop:"5px"}}>Request Item</Link></h1>
                            </div>
                        </div>
            </div> */}
                <div className = "row">
                    <div className="left_content col-sm-3" style={{height: "100%", position: "fixed", zIndex: "1", top:"70px", overflowX: "hidden", paddingTop: "20px", width: "300px"}}>
                        <div className="shadow p-3 mb-5 bg-white rounded" style={{ zIndex: "-1"}}>
                            <form className="form-group" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div className="form-group">
                                    <label style={{fontSize:"20px", color:"#191919"}}><b>Price</b></label>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Min</label>
                                            <Field name="minPrice" classname="form-control" component={this.renderInput} typename="number" minimum="0"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label>Max</label>
                                            <Field name="maxPrice" classname="form-control" component={this.renderInput} typename="number" minimum="0"/>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="form-group">
                                    <label style={{fontSize:"20px", color:"#191919"}}><b>Request Type</b></label>
                                    <hr/>
                                    <Field name="reqType" categoryName="reqType" component={this.renderSelector} classname="custom-select" divStyle={{paddingLeftt:"15px", paddingRight:"15px"}}/>
                                </div> */}
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
                <div className="right_content col-sm-9" style={{ right: "-290px", margin: "1% 0%"}}>
                    <div className="shadow p-3 mb-5 bg-white rounded" >
                        <ReqItemWTBcard/>
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