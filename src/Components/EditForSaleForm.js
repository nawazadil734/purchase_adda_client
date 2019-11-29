import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import Header from './Header';
import la from './la.jpg';
import $ from 'jquery';
import noImage from './noImage.png';
import requireAuth from './requireAuth';
const displayNone = {display:"block", clip:"rect(0px 0px 0px 0px)", position:"absolute", left:"0", top:"0"}

class forSale extends Component {

    state = {
        selectedFile1:  null,
        selectedFile2:  null,
        selectedFile3:  null,
        selectedFile4:  null,
        selectedFile5:  null,
        selectedFile6:  null
    }

    onFileInputChange1 = (event) => {
        this.setState({ selectedFile1: event.target.files[0]})
    }

    onFileInputChange2 = (event) => {
        this.setState({ selectedFile2: event.target.files[0]})
    }

    onFileInputChange3 = (event) => {
        this.setState({ selectedFile3: event.target.files[0]})
    }

    onFileInputChange4 = (event) => {
        this.setState({ selectedFile4: event.target.files[0]})
    }

    onFileInputChange5 = (event) => {
        this.setState({ selectedFile5: event.target.files[0]})
    }

    onFileInputChange6 = (event) => {
        this.setState({ selectedFile6: event.target.files[0]})
    }

    renderPhotoInput1 = ({input}) => {
        // console.log("i am field", field)
        return (
            <div className="custom-file">
                <input {...input} type="file" value={this.props.selectedFile1} onChange={this.onFileInputChange1} className="custom-file-input" id="customFile1"/>
                <label className="custom-file-label" for="customFile1">Choose File</label>
            </div>
        )
    }

    renderPhotoInput2 = ({input}) => {
        // console.log("i am field", field)
        return (
            <div className="custom-file">
                <input {...input} type="file" value={this.props.selectedFile2} onChange={this.onFileInputChange2} className="custom-file-input" id="customFile2"/>
                <label className="custom-file-label" for="customFile2">Choose File</label>
            </div>
        )
    }

    renderPhotoInput3 = ({input}) => {
        // console.log("i am field", field)
        return (
            <div className="custom-file">
                <input {...input} type="file" value={this.props.selectedFile3} onChange={this.onFileInputChange3} className="custom-file-input" id="customFile3"/>
                <label className="custom-file-label" for="customFile3">Choose File</label>
            </div>

        )
    }

    renderPhotoInput4 = ({input}) => {
        // console.log("i am field", field)
        return (
            <div className="custom-file">
                <input {...input} type="file" value={this.props.selectedFile4} onChange={this.onFileInputChange4} className="custom-file-input" id="customFile4"/>
                <label className="custom-file-label" for="customFile4">Choose File</label>
            </div>

        )
    }

    renderPhotoInput5 = ({input}) => {
        // console.log("i am field", field)
        return (
            <div className="custom-file">
                <input {...input} type="file" value={this.props.selectedFile5} onChange={this.onFileInputChange5} className="custom-file-input" id="customFile5"/>
                <label className="custom-file-label" for="customFile5">Choose File</label>
            </div>

        )
    }

    renderPhotoInput6 = ({input}) => {
        // console.log("i am field", field)
        return (
            <div className="custom-file">
                <input {...input} type="file" value={this.props.selectedFile6} onChange={this.onFileInputChange6} className="custom-file-input" id="customFile6"/>
                <label className="custom-file-label" for="customFile6">Choose File</label>
            </div>

        )
    }

    onSubmitPhoto1 = (formValues) => {
        console.log(formValues.myFile[0])
        formValues.id = this.props.itemDetails.item_id
        this.props.uploadSaleItemSinglePhoto1(formValues)
    }

    onSubmitPhoto2 = (formValues) => {
        console.log(formValues.myFile[0])
        formValues.id = this.props.itemDetails.item_id
        this.props.uploadSaleItemSinglePhoto2(formValues)
    }

    onSubmitPhoto3 = (formValues) => {
        console.log(formValues.myFile[0])
        formValues.id = this.props.itemDetails.item_id
        this.props.uploadSaleItemSinglePhoto3(formValues)
    }

    onSubmitPhoto4 = (formValues) => {
        console.log(formValues.myFile[0])
        formValues.id = this.props.itemDetails.item_id
        this.props.uploadSaleItemSinglePhoto4(formValues)
    }

    onSubmitPhoto5 = (formValues) => {
        console.log(formValues.myFile[0])
        formValues.id = this.props.itemDetails.item_id
        this.props.uploadSaleItemSinglePhoto5(formValues)
    }

    onSubmitPhoto6 = (formValues) => {
        console.log(formValues.myFile[0])
        formValues.id = this.props.itemDetails.item_id
        this.props.uploadSaleItemSinglePhoto6(formValues)
    }

    componentDidMount () {
        this.props.fetchSingleSaleItem(this.props.match.params.itemid)
        this.props.fetchCurrentUserId();
        $(".custom-file-input").on("change", function() {
            var fileName = $(this).val().split("\\").pop();
            $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
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

    renderDate = ({input, label, max, min, style, type,meta, value}) => {
        return (
            <div>
                <label>{label}</label><br/>
                <input {...input} type={type} max={max} min={min} className={style} value={value}></input>
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

    onSubmit = (formValues) => {
        formValues.id = this.props.itemDetails.item_id
        if(!formValues.itemName) formValues.itemName = ""
        if(!formValues.item_category) formValues.item_category = ""
        if(!formValues.item_desc) formValues.item_desc = ""
        if(!formValues.item_dop) formValues.item_dop = ""
        if(!formValues.item_price) formValues.item_price = ""
        console.log("asds", formValues);
        this.props.updateSaleItemDetail(formValues);
        window.history.back();
    }

    render() {
        console.log("detail", this.props.itemDetails)
        const images = require.context('../../public/images', true);
        // const userPhoto = images(this.props.userDetail ? "./" + `${ig}`: "./default.png");
        return(
            <div>
                <div className="container-fluid">
                    <Header/>
                </div><br/><br/><br/>
                <div className="container">
                    <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                        <br/><h1>Editing For Sale Ad...</h1><br/>
                        <ul class="nav nav-pills justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#details">Details</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  data-toggle="tab" href="#images">Images</a>
                            </li>
                        </ul>
                        <br/>
                        <div style={{marginLeft: "20pt", marginRight: "20pt"}}>
                            <div class="tab-content">
                                <div class="tab-pane container active" id="details">
                                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} id="DetailsForm">
                                        <div className="form-group">
                                            <Field name="itemName" component={this.renderInput} label="Name" style="form-control" type="text" placeholder={this.props.itemDetails ? this.props.itemDetails.item_name : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Category</label>
                                            <Field name="itemCategory" categoryName="Category" classname="custom-select" component={this.renderSelector} selected = { this.props.itemDetails ? this.props.itemDetails.item_category : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="itemDescription" component={this.renderField} label="Description" style="form-control" rows="4" type="text" placeholder={this.props.itemDetails ? this.props.itemDetails.item_desc : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="itemPurDate" component={this.renderDate} label="Date of Purchase" max="3000-12-31" min="1000-01-01" style="form-control" type="date" value={this.props.itemDetails ? this.props.itemDetails.item_dop : ''}/>
                                        </div>
                                        <div className="form-group">
                                            <Field name="itemPrice" component={this.renderInput} label="Price" style="form-control" type="text" placeholder={this.props.itemDetails ? this.props.itemDetails.item_price : ''}/>
                                        </div>
                                        <br/>
                                        <br/>
                                        <div style={{textAlign:"center", marginBottom:"50pt"}}>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-pane container fade" id="images">
                                    <h3>Uploaded Images</h3>
                                        <br/>
                                        <div className = "row" style={{marginBottom:"5pt"}}>
                                            <div className="col-sm-6">
                                                <div className="card" style={{width:"100%", height:"auto"}}>
                                                {/* <img className="card-img-top" src={images(this.props.itemDetails ? (this.props.itemDetails.image1 !== null ? "./" + `${this.props.itemDetails.image1}`  : noImage) :  noImage)} alt="Card image" style={{width:"100%"}}/> */}
                                                </div>
                                                <form onSubmit={this.props.handleSubmit(this.onSubmitPhoto1)}>
                                                    <Field name="myFile" component={this.renderPhotoInput1}/><br/>
                                                    <input type="submit" value="Upload a file" className="btn btn-primary"/>
                                                </form>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card" style={{width:"100%", height:"auto"}}>
                                                    {/* <img className="card-img-top" src={images(this.props.itemDetails ? (this.props.itemDetails.images2 !== null ? "./" + `${this.props.itemDetails.image2}` :  "./noImage.png" ): "./noImage.png")} alt="Card image" style={{width:"100%"}}/> */}
                                                </div>
                                                <form onSubmit={this.props.handleSubmit(this.onSubmitPhoto2)}>
                                                    <Field name="myFile" component={this.renderPhotoInput2}/><br/>
                                                    <input type="submit" value="Upload a file" className="btn btn-primary"/>
                                                </form>
                                            </div>
                                        </div>
                                        <div className = "row" style={{marginBottom:"15pt"}}>
                                            <div className="col-sm-6">
                                                <div className="card" style={{width:"100%", height:"auto"}}>
                                                {/* <img className="card-img-top" src={images(this.props.itemDetails ? (this.props.itemDetails.images3 !== null ? "./" + `${this.props.itemDetails.image3}` :  "./noImage.png" ): "./noImage.png")} alt="Card image" style={{width:"100%"}}/> */}
                                                </div>
                                                <form onSubmit={this.props.handleSubmit(this.onSubmitPhoto3)}>
                                                    <Field name="myFile" component={this.renderPhotoInput3}/><br/>
                                                    <input type="submit" value="Upload a file" className="btn btn-primary"/>
                                                </form>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card" style={{width:"100%", height:"auto"}}>
                                                {/* <img className="card-img-top" src={images(this.props.itemDetails ? (this.props.itemDetails.image4 === null ? './noImage.png' : this.props.itemDetails.image4) : "./noImage.png")} style={{width:"100%"}}/> */}
                                                </div>
                                                <form onSubmit={this.props.handleSubmit(this.onSubmitPhoto4)}>
                                                    <Field name="myFile" component={this.renderPhotoInput4}/><br/>
                                                    <input type="submit" value="Upload a file" className="btn btn-primary"/>
                                                </form>
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className="col-sm-6">
                                                <div className="card" style={{width:"100%", height:"auto"}}>
                                                    {/* <img className="card-img-top" src={images(this.props.itemDetails ? (this.props.itemDetails.image5 === null ? './noImage.png' : this.props.itemDetails.image5) : "./noImage.png")} style={{width:"100%"}}/> */}
                                                </div>
                                                <form onSubmit={this.props.handleSubmit(this.onSubmitPhoto5)}>
                                                    <Field name="myFile" component={this.renderPhotoInput5}/><br/>
                                                    <input type="submit" value="Upload a file" className="btn btn-primary"/>
                                                </form>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card" style={{width:"100%", height:"auto"}}>
                                                {/* <img className="card-img-top" src={images(this.props.itemDetails ? (this.props.itemDetails.image6 === null ? './noImage.png' : this.props.itemDetails.image6) : "./noImage.png")} style={{width:"100%"}}/> */}
                                                 </div>
                                                <form onSubmit={this.props.handleSubmit(this.onSubmitPhoto6)}>
                                                    <Field name="myFile" component={this.renderPhotoInput6}/><br/>
                                                    <input type="submit" value="Upload a file" className="btn btn-primary"/>
                                                </form>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
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

const mapStateToProps = (state) => {
    return {
        itemDetails: state.auth.singleSaleItem,
        userid: state.auth.userid
    }
}


export default requireAuth(connect(mapStateToProps, actions )(formWrapped));