
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import Header from './Header';

class forSale extends Component {

    state = {
        files: []
    }

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
                    className={style}
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

    onSubmit = (formValues) => {
        var fd = new FormData();
        var len = formValues.myFile.length;
        for (var x = 0; x < len; x++) {
            fd.append("myFiles", formValues.myFile[x]);
        }
        console.log("lenght" ,formValues.myFile.length);
        formValues.id = this.props ? this.props.userid : ""
        console.log("allah", formValues)
        formValues.form = fd
        this.props.uploadRentItem(formValues);
        console.log(formValues);
    }

    // onFileInputChnage = (event) => {
    //     this.setState({ selectedFile: event.target.files[0]})
    // }

    fileSelectedHandler = (e) => {
        this.setState({ files: [...this.state.files, ...e.target.files] })
      }

    renderPhotoInput = ({input, meta}) => {
        // console.log("i am field", field)
        return (
            <div>
            <input {...input}  type="file" value={this.props.file} onChange={this.fileSelectedHandler} multiple/>
            {this.renderError(meta)}
            </div>
        )
    }


    render() {
        return(
            <div>
                <div className="container-fluid">
                    <Header/>
                </div><br/><br/>
                <div className="container">
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <br/><h1>Post an Item for rent</h1><br/>
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
                                <br/>
                                <div className="custom-file">
                                <Field name="myFile" component={this.renderPhotoInput} label="Choose File" style1="custom-file-input" id="customFile" style2="custom-file-label"/>
                                </div>
                                <br/>
                                <br/>
                                <div style={{textAlign:"center", marginBottom:"50pt"}}>
                                    <button type="submit" className="btn btn-primary" onClick={() => alert("Rent Item Uploaded")}>Submit</button>
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
        errors.itemName = "You must enter a name for the item";
    }
    if(!formValues.itemCategory) {
        errors.itemCategory = "You must choose a category for the item";
    }
    if(!formValues.itemDescription) {
        errors.itemDescription = "You must enter a description for the item";
    }
    if(!formValues.itemPurDate) {
        errors.itemPurDate = "You must enter the date of purchase";
    }
    if(!formValues.itemRentRate) {
        errors.itemRentRate = "You must specify a rent rate";
    }
    if(!formValues.itemRentDurLimitDays) {
        errors.itemRentDurLimitDays = "You must specify the duration limit";
    }
    if(!formValues.itemRentDurLimitHours) {
        errors.itemRentDurLimitHours = "You must specify the duration limit";
    }
    if(!(formValues.myFile && formValues.myFile.length)) {
        errors.myFile = "You must upload atleast one Item Image";
    }

    return errors;
}

const formWrapped =  reduxForm({
    form: 'signup',
    validate: validate
})(forSale);

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.errorMessage,
        userid: state.auth.userid,
        userDetail: state.auth.userDetail
    };
}


export default connect(mapStateToProps, actions )(formWrapped);