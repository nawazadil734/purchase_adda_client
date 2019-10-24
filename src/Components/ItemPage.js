import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import '../css/item.css'

class ItemPage extends Component {

    onSubmit = (formValues) => {
        console.log(formValues);
    }

    renderSpinner = ({input, meta, type, classname, step, min, max,divStyle}) => {
        return(
            <div>
            <input {...input}
                class={classname}
                type={type}
                style={divStyle}
                autoComplete="off"
                max={max}
                min={min}
                step={step}
            // onChange={formProps.input.onChange} 
            // value={formProps.input.value}
            />
            </div>
        );
    }

    renderInput = ({input , classname, typename}) => {
        return (
            <div>
                <input {...input} className={classname} type={typename} />
            </div>
        );
    }

    renderTextArea = ({classname,input ,meta, rows, cols,id}) => {
        return (
            <div class="form-group">
                <textarea {...input} className={classname} id={id} rows={rows} cols={cols} />
            </div>
        );
    }

    render() {
        return (
            <div>
            <div className="container-fluid">
                <Header/>
            </div>

            <div className="container">
                    <div classname="container-flex" style={{marginTop:"10px"}}>
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h2> Some Title </h2>
                        </div>
                    </div>
                <div className="row">
                    <div className = "col-md-8">
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <div id="demo" class="carousel slide" data-ride="carousel">
                                        <ul class="carousel-indicators">
                                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                                            <li data-target="#demo" data-slide-to="1"></li>
                                        </ul>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                            <img src="https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Los Angeles" width="1100" height="500"></img>
                                            </div>
                                            <div class="carousel-item">
                                            <img src="https://images.pexels.com/photos/1481451/pexels-photo-1481451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Chicago" width="1100" height="500"></img>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                            <span class="carousel-control-prev-icon"></span>
                                        </a>
                                        <a class="carousel-control-next" href="#demo" data-slide="next">
                                            <span class="carousel-control-next-icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <div className="card">
                                        <h2 style={{ margin : "10px"}}>Description</h2>
                                        <textarea rows="4" cols="0" className="form-control shadow-none" style={{border: "none",
                                            backgroundColor: "transparent",
                                            outline: "none",
                                            overflow: "hidden",
                                            }} readOnly>
                                            Forerunner 30 is your new everyday watch, thanks to its activity tracking features. That includes steps, calories, distance, sleep¹ and intensity minutes, not to mention 24/7 heart rate monitoring. It also watches out for periods of inactivity and gives you vibration alerts when it’s time to move. We’re making activity tracking even smarter with our Move IQ feature, which automatically detects when you start moving and classifies your activity as a walk, run or bike. In addition, cardio is used to identify all of your other general fitness activities that don’t fall into the other categories.Forerunner 30 is your new everyday watch, thanks to its activity tracking features. That includes steps, calories, distance, sleep¹ and intensity minutes, not to mention 24/7 heart rate monitoring. It also watches out for periods of inactivity and gives you vibration alerts when it’s time to move. We’re making activity tracking even smarter with our Move IQ feature, which automatically detects when you start moving and classifies your activity as a walk, run or bike. In addition, cardio is used to identify all of your other general fitness activities that don’t fall into the other categories.
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h2>₹ 45000</h2><br/>
                                    <textarea rows="2" cols="0" style={{border: "none",
                                            backgroundColor: "transparent",
                                            resize: "none",
                                            outline: "none",
                                            overflow: "hidden",
                                            width: "100%",
                                            color: "grey" }} readOnly>
                                            H. No. 42/A, Dramapur, Salcette, Goa, India, World, Universe
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h4>Seller/Requestee Profile</h4><br/>
                                    <div class="card card-inverse card-info">
                                        <img class="card-img-top" src="https://picsum.photos/200/150/?random"></img>
                                        <div class="card-block">
                                            <figure class="profile profile-inline">
                                                <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                                            </figure>
                                        <h4 class="card-title">Tawshif Ahsan Khan</h4>
                                        <div class="card-text">
                                            Tawshif is a web designer living in Bangladesh.
                                        </div>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn btn-info btn-sm" style={{ float:"left"}}>View Profile</button>
                                            <button class="btn btn-info btn-sm" style={{ float:"right"}}>Chat with Seller</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div classname="container-flex">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h2 style={{paddingBottom:"20px"}}> Customer Reviews </h2>
                            <div className="container">
                            <form className="form-group" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div class="form-group" style={{paddingBottom:"20px"}}>
                                    <h4 for="comment"><b>Create Your Review:</b></h4>
                                    <div className="form-group">
                                        <label>Rating</label><br/>
                                        <Field name="Rating" component={this.renderSpinner} classname="form-control" divStyle={{width:"80px"}} SelId="Rating" type="number" min="1" max="5" step="0.5"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Title</label><br/>
                                        <Field name="Title" component={this.renderInput} typename="text" classname="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label><br/>
                                        <Field name="Description" component={this.renderTextArea} classname="form-control" rows="2" id="desc"/>
                                    </div>
                                    <button className="btn btn-primary" style={{marginTop:"10px"}} type="submit">Publish</button>
                                </div>
                            </form>
                            </div>
                            <div className="container">
                                <div class="card card-inverse card-info" style={{marginTop:"20px", marginBottom:"20px"}}>
                                    <div class="card-block">
                                        <figure class="profile profile-inline">
                                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                                        </figure>
                                    <h4 class="card-title">Tawshif Ahsan Khan</h4>
                                    <div class="card-text">
                                        <label>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star-half checked"></i>
                                        </label><br/>
                                        <label><b>Title</b></label><br/>
                                        Tawshif is a web designer living in Bangladesh.
                                    </div>
                                    </div>
                                </div>
                                <div class="card card-inverse card-info" style={{marginTop:"20px", marginBottom:"20px"}}>
                                    <div class="card-block">
                                        <figure class="profile profile-inline">
                                            <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                                        </figure>
                                    <h4 class="card-title">Tawshif Ahsan Khan</h4>
                                    <div class="card-text">
                                        <label>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star checked"></i>
                                            <i class="fa fa-star-half checked"></i>
                                        </label><br/>
                                        <label><b>Title</b></label><br/>
                                        Tawshif is a web designer living in Bangladesh.
                                        <i class="fa fa-star-half-o"></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
};

const validate = (formValues) => {
    const errors = {}
    
    return errors;
}

const wrappedForm = reduxForm({
    form: 'itempage',
    validate: validate
})(ItemPage);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions)(wrappedForm);