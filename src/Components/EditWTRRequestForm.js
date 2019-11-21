import React, { Component } from 'react';
import {connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import Header from './Header';

const displayNone = {display:"block", clip:"rect(0px 0px 0px 0px)", position:"absolute", left:"0", top:"0"}

class forSale extends Component {


    componentDidMount() {
        this.props.fetchSingleReqWtr(this.props.match.params.itemid);
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

    renderSelector = ({input, categoryName, classname, divStyle, placeholder}) => {
        return(
            <div>
                <select name={categoryName} className={classname} style={divStyle} {...input}>
                    <option value="" selected hidden>{placeholder}</option>
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
        formValues.itemId  = this.props.match.params.itemid;
        console.log(formValues)
        this.props.updateReqRentItem(formValues);
}

    render() {

        console.log("sfsf0", this.props.itemDetail)
        return(
            <div>
                <div className="container-fluid">
                    <Header/>
                </div><br/><br/>
                <div className="container">
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <br/><h1>Editing WTR Ad...</h1><br/>
                        <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <div className="form-group">
                                            <Field name="itemName" component={this.renderInput} label="Item to be rented" style="form-control" type="text" placeholder={this.props.itemDetail ? this.props.itemDetail.item_name : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Category</label>
                                            <Field name="itemCategory" categoryName="Category" classname="custom-select" component={this.renderSelector} placeholder={this.props.itemDetail ? this.props.itemDetail.item_category : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="itemDescription" component={this.renderField} label="Description" style="form-control" rows="5" type="text" placeholder={this.props.itemDetail ? this.props.itemDetail.item_desc : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="itemRate" component={this.renderInput} label="Rent Fees (per hour)" style="form-control" type="text" placeholder={this.props.itemDetail ? this.props.itemDetail.rent_rate : ''}/>
                                        </div>
                                        <label>Maximum Rent Duration</label>
                                        <div className="row" style={{marginTop:"5pt"}}>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Field name="itemRentDurLimitDays" component={this.renderSpinner} label="Days" style="form-control" type="number" min="0" max="365" placeholder={this.props.itemDetail ? this.props.itemDetail.rent_duration_days : ''}/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Field name="itemRentDurLimitHours" component={this.renderSpinner} label="Hours" style="form-control" type="number" min="0" max="23" placeholder={this.props.itemDetail ? this.props.itemDetail.rent_duration_hours : ''}/>
                                                </div>
                                            </div>
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

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage,
        itemDetail : state.auth.fetchUserWTRitem};
}


export default connect(mapStateToProps, actions )(formWrapped);