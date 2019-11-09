
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import Header from './Header';
import chicago from './chicago.jpg';
import la from './la.jpg';
import ny from './ny.jpg';

const displayNone = {display:"block", clip:"rect(0px 0px 0px 0px)", position:"absolute", left:"0", top:"0"}

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

    renderFileInput = ({input, label, style1, style2, type, meta, id}) => {
        return(
            <div>
                <input {...input} type={type} className={style1} id={id} style={displayNone}></input>
                <label className={style2} for={id}>{label}</label>
                {this.renderError(meta)}
            </div>
        );
    }

    renderCustomFileInput = ({input, fieldid}) => {
        return (
            <div>
                <label for={fieldid} className="btn btn-primary float-right">Replace...</label>
                <input {...input} type="file" name={fieldid} id={fieldid} style={displayNone}></input>
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
                <div className="container-fluid">
                    <Header/>
                </div><br/><br/>
                <div className="container">
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <br/><h1>Editing For Rent Ad...</h1><br/>
                        <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div className="form-group">
                                    <Field name="itemName" component={this.renderInput} label="Name" style="form-control" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <Field name="itemCategory" categoryName="Category" classname="custom-select" component={this.renderSelector}/>
                                </div>
                                <div className="form-group">
                                    <Field name="itemDescription" component={this.renderField} label="Description" style="form-control" rows="4" type="text"/>
                                </div>
                                <div className="form-group">
                                    <Field name="itemPurDate" component={this.renderDate} label="Date of Purchase" max="3000-12-31" min="1000-01-01" style="form-control" type="date"/>
                                </div>
                                <div className="form-group">
                                    <Field name="itemRentRate" component={this.renderInput} label="Rent rate (per hour)" style="form-control" type="number"/>
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
                                <label>Uploaded Images</label>
                                <br/>
                                <div className="card-deck">
                                    <div class="card" style={{width:"100%", height:"auto"}}>
                                        <img class="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div class="card-img-overlay">
                                            <Field name="ImageUpload1" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                    <div class="card" style={{width:"100%", height:"auto"}}>
                                        <img class="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div class="card-img-overlay">
                                            <Field name="ImageUpload2" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="card-deck">
                                    <div class="card" style={{width:"100%", height:"auto"}}>
                                        <img class="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div class="card-img-overlay">
                                            <Field name="ImageUpload3" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                    <div class="card" style={{width:"100%", height:"auto"}}>
                                        <img class="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div class="card-img-overlay">
                                            <Field name="ImageUpload4" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="card-deck">
                                    <div class="card" style={{width:"100%", height:"auto"}}>
                                        <img class="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div class="card-img-overlay">
                                            <Field name="ImageUpload5" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                    <div class="card" style={{width:"100%", height:"auto"}}>
                                        <img class="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div class="card-img-overlay">
                                            <Field name="ImageUpload6" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div style={{textAlign:"center", marginBottom:"50pt"}}>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
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


export default connect(null, actions )(formWrapped);