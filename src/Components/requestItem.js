import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import '../css/item.css'

class RequestItem extends Component {

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
            <br/><br/><br/>
            <div className="container">
                    <div classname="container-flex" style={{marginTop:"20px"}}>
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h2> WTB/WTR : Some Title </h2>
                        </div>
                    </div>
                <div className="row">
                    <div className = "col-md-8">
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h2>₹ 45000</h2><br/>
                                    <label>userSelectedCategory</label><br/>
                                    <label>userDefinedDuration</label><br/>
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
                                    <h2 style={{ margin : "10px"}}>Description</h2>
                                        <textarea rows="15" cols="0" className="form-control shadow-none" style={{border: "none",
                                            backgroundColor: "transparent",
                                            resize: "none",
                                            outline: "none",
                                            overflowY: "scroll"
                                            }} readOnly>
                                            Forerunner 30 is your new everyday watch, thanks to its activity tracking features. That includes steps, calories, distance, sleep¹ and intensity minutes, not to mention 24/7 heart rate monitoring. It also watches out for periods of inactivity and gives you vibration alerts when it’s time to move. We’re making activity tracking even smarter with our Move IQ feature, which automatically detects when you start moving and classifies your activity as a walk, run or bike. In addition, cardio is used to identify all of your other general fitness activities that don’t fall into the other categories.Forerunner 30 is your new everyday watch, thanks to its activity tracking features. That includes steps, calories, distance, sleep¹ and intensity minutes, not to mention 24/7 heart rate monitoring. It also watches out for periods of inactivity and gives you vibration alerts when it’s time to move. We’re making activity tracking even smarter with our Move IQ feature, which automatically detects when you start moving and classifies your activity as a walk, run or bike. In addition, cardio is used to identify all of your other general fitness activities that don’t fall into the other categories.
                                        </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                <h4>Location</h4>
                                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="fi" marginwidth="0" style={{width:"100%", height:"385px"}}></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="container">
                                <div className="shadow p-3 mb-5 bg-white rounded">
                                    <h4>Requester Profile</h4><br/>
                                    <div class="card card-inverse card-info">
                                        <div class="card-block">
                                            <figure class="profile profile-inline">
                                                <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                                            </figure>
                                        <h4 class="card-title">Tawshif Ahsan Khan</h4>
                                        </div>
                                        <div class="card-footer">
                                            <button class="btn btn-info btn-sm" style={{ float:"left"}}>View Profile</button>
                                            <button class="btn btn-info btn-sm" style={{ float:"right"}}>Chat with Requester</button>
                                        </div>
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
    form: 'RequestItem',
    validate: validate
})(RequestItem);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage};
}

export default connect(mapStateToProps, actions)(wrappedForm);

