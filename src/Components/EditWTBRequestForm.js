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
                // onChange={formProps.input.onChange} 
                // value={formProps.input.value}
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
            // onChange={formProps.input.onChange} 
            // value={formProps.input.value}
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
                </div>
                <div className="container">
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <br/><h1>Editing WTB Ad...</h1><br/>
                        <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <div className="form-group">
                            <Field name="itemName" component={this.renderInput} label="Name" style="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Category</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Books</option>
                            <option>Stationery</option>
                            <option>Tools</option>
                            <option>PC Peripherals</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Field component={this.renderField} label="Description" style="form-control" rows="5" type="text"/>
                        </div>
                        <div className="form-group">
                            <Field name="itemPrice" component={this.renderInput} label="Price" style="form-control" type="text"/>
                        </div>
                        <div>
                        <button type="submit" className="btn btn-primary" style={{marginTop: "15pt"}}>
                            Submit Request
                        </button>
                        </div>
                            </form>
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


export default connect(null, actions )(formWrapped);