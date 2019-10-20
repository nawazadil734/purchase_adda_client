import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import Header from './Header';

class forSale extends Component {

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

    render() {
        return(
            <div className="container">
                <Header/>
                <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                    <br/><h1>Post for Sale</h1><br/>
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
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
                                        <Field component={this.renderDate} label="Date of Purchase" max="3000-12-31" min="1000-01-01" style="form-control" type="date"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div style={{borderRadius: "5px 5px 5px 5px", boxShadow: "0px 0px 1px #888", borderColor:"#888", marginTop: "24pt", height: "251pt"}}>
                                        Image Goes Here
                                    </div>
                                    <div className="custom-file" style={{marginTop: "15pt"}}>
                                        <Field component={this.renderFileUpload} label="Choose image..." type="file" style1="custom-file-input" style2="custom-file-label" id="customFile"/>
                                    </div>
                                </div>
                            </div>
                        <button className="btn btn-primary" type="submit" style={{marginTop: "15pt"}}>Submit</button>
                        </form>
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