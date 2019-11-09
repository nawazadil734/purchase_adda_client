import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import Header from './Header';
import la from './la.jpg';

const displayNone = {display:"block", clip:"rect(0px 0px 0px 0px)", position:"absolute", left:"0", top:"0"}

class forSale extends Component {

    componentDidMount () {
        this.props.fetchSingleSaleItem(this.props.match.params.itemid)
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
                    className={style}
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
                <textArea {...input} rows={rows} cols={cols} placeholder={placeholder} className={style} type={type}></textArea>
                {this.renderError(meta)}
            </div>
        );
    }

    renderDate = ({input, label, max, min, style, type,meta, placeholder}) => {
        return (
            <div>
                <label>{label}</label><br/>
                <input {...input} type={type} max={max} min={min} className={style} placeholder={placeholder}></input>
                {this.renderError(meta)}
            </div>
        );
    }

    renderFileUpload = ({input, label, id, style1, style2, type, meta}) => {
        return (
            <div>
                <input {...input} type={type} className={style1} id={id}></input>
                <label className={style2} for={id}>{label}</label><br/>
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
                className={style}
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

    renderSelector = ({input, categoryName, classname, divStyle, selected}) => {
        return(
            <div>
                <select name={categoryName} className={classname} style={divStyle} {...input}>
                    <option value="" selected hidden>{selected}</option>
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
        console.log("detail", this.props.itemDetails)
        return(
            <div>
                <div className="container-fluid">
                    <Header/>
                </div><br/><br/>
                <div className="container">
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <br/><h1>Editing For Sale Ad...</h1><br/>
                        <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div className="form-group">
                                    <Field name="itemName" component={this.renderInput} label="Name" style="form-control" type="text" placeholder={this.props.itemDetails ? this.props.itemDetails.item_name : ''}/>
                                </div>
                                <div className="form-group">
                                    {/* <label for="exampleFormControlSelect1">Category</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Books</option>
                                    <option>Stationery</option>
                                    <option>Tools</option>
                                    <option>PC Peripherals</option>
                                    </select> */}
                                    <label>Category</label>
                                    <Field name="itemCategory" categoryName="Category" classname="custom-select" component={this.renderSelector} selected = { this.props.itemDetails ? this.props.itemDetails.item_category : ''}/>
                                </div>
                                <div className="form-group">
                                    <Field name="itemDescription" component={this.renderField} label="Description" style="form-control" rows="4" type="text" placeholder={this.props.itemDetails ? this.props.itemDetails.item_desc : ''}/>
                                </div>
                                <div className="form-group">
                                    <Field name="itemPurDate" component={this.renderDate} label="Date of Purchase" max="3000-12-31" min="1000-01-01" style="form-control" type="date" placeholder={this.props.itemDetails ? this.props.itemDetails.item_dop : ''}/>
                                </div>
                                <div className="form-group">
                                    <Field name="itemPrice" component={this.renderInput} label="Price" style="form-control" type="text" placeholder={this.props.itemDetails ? this.props.itemDetails.item_price : ''}/>
                                </div>
                                <label>Uploaded Images</label>
                                <br/>
                                <div className="card-deck">
                                    <div className="card" style={{width:"100%", height:"auto"}}>
                                        <img className="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div className="card-img-overlay">
                                            <Field name="ImageUpload1" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                    <div className="card" style={{width:"100%", height:"auto"}}>
                                        <img className="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div className="card-img-overlay">
                                            <Field name="ImageUpload2" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="card-deck">
                                    <div className="card" style={{width:"100%", height:"auto"}}>
                                        <img className="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div className="card-img-overlay">
                                            <Field name="ImageUpload3" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                    <div className="card" style={{width:"100%", height:"auto"}}>
                                        <img className="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div className="card-img-overlay">
                                            <Field name="ImageUpload4" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="card-deck">
                                    <div className="card" style={{width:"100%", height:"auto"}}>
                                        <img className="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div className="card-img-overlay">
                                            <Field name="ImageUpload5" component={this.renderCustomFileInput} fieldid="uploadImage1" imagesrc="https://i.pinimg.com/originals/33/5f/19/335f1992deafdd78d8fae6fee19e0b12.jpg"/>
                                        </div>
                                    </div>
                                    <div className="card" style={{width:"100%", height:"auto"}}>
                                        <img className="card-img-top" src={la} alt="Card image" style={{width:"100%"}}/>
                                        <div className="card-img-overlay">
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


const formWrapped =  reduxForm({
    form: 'signup',
    // validate: validate
})(forSale);

const mapStateToProps = (state) => {
    return {
        itemDetails: state.auth.singleSaleItem
    }
}


export default connect(mapStateToProps, actions )(formWrapped);