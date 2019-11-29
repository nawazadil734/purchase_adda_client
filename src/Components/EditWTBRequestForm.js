import React, { Component } from 'react';
import {connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import Header from './Header';
import requireAuth from './requireAuth';

const displayNone = {display:"block", clip:"rect(0px 0px 0px 0px)", position:"absolute", left:"0", top:"0"}

class forSale extends Component {


    componentDidMount() {
        this.props.fetchSingleReqWtb(this.props.match.params.itemid);
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
        this.props.updateReqSaleItem(formValues);
        console.log(formValues)
        window.history.back();
    }

    render() {
        console.log(this.props.itemDetail);
        return(
            <div>
                <div className="container-fluid">
                    <Header/>
                </div><br/><br/><br/>
                <div className="container">
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <br/><h1>Editing WTB Ad...</h1><br/>
                        <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <div className="form-group">
                                            <Field name="itemName" component={this.renderInput} label="Item to be bought" style="form-control" type="text" placeholder={this.props.itemDetail ? this.props.itemDetail.item_name : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Category</label>
                                            <Field name="itemCategory" categoryName="Category" classname="custom-select" component={this.renderSelector} placeholder = {this.props.itemDetail ? this.props.itemDetail.item_category : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="buyDescription" component={this.renderField} label="Description" style="form-control" rows="5" type="text" placeholder = {this.props.itemDetail ? this.props.itemDetail.item_desc : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="itemPrice" component={this.renderInput} label="Price" style="form-control" type="text" placeholder = {this.props.itemDetail ? this.props.itemDetail.item_price : ''}/>
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
        itemDetail : state.auth.fetchUserWTBitem};
}


export default requireAuth(connect(mapStateToProps, actions )(formWrapped));