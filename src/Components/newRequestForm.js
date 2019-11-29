import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import requireAuth from './requireAuth';
import Header from './Header';

class forSale extends Component {
    
    componentDidMount = async () => {
        await this.props.fetchCurrentUserId();
        await this.props.fetchUserDetail(this.props.userid)
    }

    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div>
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta, type, style, placeholder}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input}
                    class={style}
                    type={type}
                    autoComplete="off"
                    placeholder = {placeholder}
                // onChange={formProps.input.onChange} 
                // value={formProps.input.value}
            />
            {this.renderError(meta)}
            </div>
        );
    }
    renderSelector = ({input, categoryName, classname, divStyle, meta}) => {
        return(
            <div>
                <select name={categoryName} className={classname} style={divStyle} {...input}>
                    <option value="" selected hidden>Category</option>
                    <option>Books</option>
                    <option>Stationery</option>
                    <option>Tools</option>
                    <option>PC Peripherals</option>
                </select>
                {this.renderError(meta)}
            </div>
        );
    };

    renderField = ({input, label, rows, cols, meta, style, type, placeholder}) => {
        return (
            <div>
                <label>{label}</label><br/>
                <textArea {...input} rows={rows} cols={cols} placeholder={placeholder} class={style} type={type}></textArea>
                {this.renderError(meta)}
            </div>
        );
    }

    renderDate = ({input, label, max, min, style, type,meta}) => {
        return (
            <div>
                <label>{label}</label><br/>
                <input type={type} max={max} min={min} class={style}></input>
                {this.renderError(meta)}
            </div>
        );
    }

    renderFileUpload = ({input, label, id, style1, style2, type, meta}) => {
        return (
            <div>
                <input type={type} class={style1} id={id}></input>
                <label class={style2} for={id}>{label}</label><br/>
                {this.renderError(meta)}
            </div>
        );
    }
    renderSpinner = ({input, label, meta, type, style, placeholder, step, min, max}) => {
        return(
            <div>
            <label>{label}</label>
            <input {...input}
                class={style}
                type={type}
                autoComplete="off"
                placeholder = {placeholder}
                max={max}
                min={min}
                step={step}
            // onChange={formProps.input.onChange} 
            // value={formProps.input.value}
            />
            {this.renderError(meta)}
            </div>
        );
    }

    onSubmitRent = (formValues) => {
        formValues.id = this.props ? this.props.userid : ""
        this.props.uploadWtr(formValues);
    }

    onSubmitBuy = (formValues) => {
        formValues.id = this.props ? this.props.userid : ""
        this.props.uploadWtb(formValues);
    }

    render() {
        return(
            <div>
                <div className="container-fluid">
                <Header/>
                </div><br/><br/>
                <div className="container">
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <br/><h1>Post a new Ad</h1><br/>
                        <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                            <ul class="nav nav-pills">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="pill" href="#WTB">Want To Buy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#WTR">Want To Rent</a>
                            </li>
                            </ul>
                            <div class="tab-content">
                                <div id="WTB" class="container tab-pane active"><br/>
                                    <form id="WTBForm" onSubmit={this.props.handleSubmit(this.onSubmitBuy)}>
                                        <div className="form-group">
                                            <Field name="itemName" component={this.renderInput} label="Item to be bought" style="form-control" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Category</label>
                                            <Field name="itemCategory" categoryName="Category" classname="custom-select" component={this.renderSelector}/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="buyDescription" component={this.renderField} label="Description" style="form-control" rows="5" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="itemPrice" component={this.renderInput} label="Price" style="form-control" type="text"/>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary" style={{marginTop: "15pt"}} >
                                                Submit Request
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div id="WTR" class="container tab-pane fade"><br/>
                                    <form id="WTRForm" onSubmit={this.props.handleSubmit(this.onSubmitRent)}>
                                        <div className="form-group">
                                            <Field name="itemName" component={this.renderInput} label="Item to be rented" style="form-control" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Category</label>
                                            <Field name="itemCategory" categoryName="Category" classname="custom-select" component={this.renderSelector}/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="itemDescription" component={this.renderField} label="Description" style="form-control" rows="5" type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="itemRate" component={this.renderInput} label="Rent Fees (per hour)" style="form-control" type="text"/>
                                        </div>
                                        <label>Maximum Rent Duration</label>
                                        <div className="row" style={{marginTop:"5pt"}}>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Field name="itemRentDurLimitDays" component={this.renderSpinner} label="Days" style="form-control" type="number" min="0" max="365"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Field name="itemRentDurLimitHours" component={this.renderSpinner} label="Hours" style="form-control" type="number" min="0" max="23"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary" style={{marginTop: "15pt"}} >
                                                Submit Request
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        );
    }
}


const formWrapped =  reduxForm({
    form: 'signup',
    // validate: validate
})(forSale);

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
        userDetail: state.auth.userDetail
    };
}

export default requireAuth(connect(mapStateToProps, actions )(formWrapped));