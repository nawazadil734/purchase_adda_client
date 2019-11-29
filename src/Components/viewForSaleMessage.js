
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import Header from './Header';
import chicago from './chicago.jpg';
import la from './la.jpg';
import requireAuth from './requireAuth';
import ny from './ny.jpg';

class forSale extends Component {

    constructor() {
        super();
        this.state = {
            opt: "buy"
        }
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
            />
            {this.renderError(meta)}
            </div>
        );
    }

    renderField = ({input, label, rows, cols, meta, placeholder, style, type}) => {
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
                <input {...input} type={type} max={max} min={min} class={style}></input>
                {this.renderError(meta)}
            </div>
        );
    }

    renderFileUpload = ({input, label, id, style1, style2, type, meta}) => {
        return (
            <div>
                <input {...input} type={type} class={style1} id={id}></input>
                <label class={style2} for={id}>{label}</label><br/>
                {this.renderError(meta)}
            </div>
        );
    }

    renderFileInput = ({input, label, style1, style2, type, meta, id}) => {
        return(
            <div>
                <input {...input} type={type} className={style1} id={id}></input>
                <label className={style2} for={id}>{label}</label>
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
            />
            {this.renderError(meta)}
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
                    <option>PC Peripherals</option>
                </select>
            </div>
        );
    };

    onSubmit = (formValues) => (
        console.log(formValues)
    )

    render() {
        return(
            <div>
                <div className="container-fluid"  style={{marginBottom:"50pt"}}>
                    <Header/>
                </div>
                <div className="container">
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <br/><h1 style={{fontFamily:"'Cabin', sans-serif", fontSize:"35pt", marginBottom:"15pt"}}>Insert Messsage Title Here</h1>
                        <div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                <span className="input-group-text">From</span>
                                </div>
                                <input type="text" className="form-control" value="Insert User Name Here" style={{backgroundColor:"white", color:"black"}} readOnly/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                <span className="input-group-text">Offer</span>
                                </div>
                                <input type="text" className="form-control" value="₹ insert price here" style={{backgroundColor:"white", color:"black"}} readOnly/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                <span className="input-group-text">For Item</span>
                                </div>
                                <input type="text" className="form-control" value="Item ID: 420696969" style={{backgroundColor:"white", color:"black"}} readOnly/>
                            </div>
                            <textarea readOnly class="form-control" style={{fontFamily:"'Open Sans', sans-serif", backgroundColor:"white", color:"black", marginBottom:"10pt"}} rows="20">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </textarea>
                            <button className="btn btn-primary float-right">Reply</button>
                            <button className="btn btn-danger float-right" style={{marginRight:"7pt"}}>Delete</button>
                        </div>
                    </div>     
                </div>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.itemName) {
        errors.itemName = "You must enter First Name";
    }
    if(!formValues.itemCategory) {
        errors.itemCategory = "You must enter Phone Number";
    }
    if(!formValues.itemDescription) {
        errors.itemDescription = "You must enter a User Name";
    }
    if(!formValues.itemPurDate) {
        errors.itemPurDate = "You must enter a Email   ";
    }
    if(!formValues.itemRentRate) {
        errors.itemRentRate = "You must enter a passpord";
    }
    if(!formValues.itemRentDurLimitDays) {
        errors.itemRentDurLimitDays = "You must enter a passpord";
    }
    if(!formValues.itemRentDurLimitHours) {
        errors.itemRentDurLimitHours = "You must enter a passpord";
    }
    if(!formValues.itemImages) {
        errors.itemImages = "You must enter a Confirm Password";
    }

    return errors;
}

const formWrapped =  reduxForm({
    form: 'signup',
    validate: validate
})(forSale);


export default requireAuth(connect(null, actions )(formWrapped));