import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm} from 'redux-form';
import { connect} from 'react-redux';
import * as actions from '../actions/index';
// import profileImg from './doe.jpg';
import '../css/item.css';
import Header from './Header'
class ChatBox extends Component {

    componentDidMount() {
        this.props.fetchMessage(this.props.match.params.currUser, this.props.match.params.owner);
        this.props.fetchCurrentUserId();
        setInterval(() => this.props.fetchMessage(this.props.match.params.currUser, this.props.match.params.owner), 1000)
    }


    renderMessage = () => {
        // console.log("i am render")
        return (
            this.props.messege.map(mes => {
                // console.log("worl" ,mes)
                return (
                    this.props.workingUser ===  mes.sender_id ?
                    <div className="row" style={{marginLeft:"5px"}}>
                                    <div className="col-sm-6">
                                        
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="shadow p-3 mb-5 bg-white rounded" style={{ textAlign:"right", width:"intrinsic"}}>{mes.message}</div>
                                    </div>
                    </div> 
                    :
                    <div className="row" style={{justifyContent:"right", marginRight:"5px"}}>
                        <div className="col-sm-6">
                            <div className="shadow p-3 mb-5 bg-white rounded">{mes.message}</div>
                        </div>
                        <div className="col-sm-6">  
                        </div>
                    </div>
                );
            })
        );
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

    renderInput = ({input, type, label, meta, style}) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input}
                    autoComplete="off"
                    className={style}
                    type={type}
            />
            {console.log("meayt", meta)}
            {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        formValues.currentUser =  this.props.match.params.currUser;
        formValues.owner = this.props.match.params.owner;
        this.props.messageOwner(formValues);
    }
    
    render(){
        console.log("i am user" ,this.props.workingUser);
        return (
            <div className="container">
                <Header/>
                <br/><br/>
                <h2 className="header" style={{marginTop:"40px", marginBottom:"40px"}}>Chat<hr/></h2>
                <div className="shadow p-3 mb-5 bg-white rounded">
                        <div className="card card-inverse card-info">
                            <div className="card-title">
                                <figure class="profile profile-inline" style={{ marginLeft:"10px", marginTop:"10px"}}>
                                <img src="https://picsum.photos/200/150/?random" class="profile-avatar" alt=""></img>
                            </figure>
                            <h4 className="card-title" style={{ marginTop:"10px"}}>Tawshif Ahsan Khan</h4>
                            </div>


                            <div className="card-block" style={{overflowY:"auto", maxHeight:"450px", flexDirection: "column-reverse", display: "flex"}}>
                                {this.props.messege ? this.renderMessage() : ''}
                            </div>
                            <div class="card-footer">
                                <form onSubmit={this.props.handleSubmit(this.onSubmit)} style={{ width:"inherit"}}>
                                <div className="d-flex">
                                    <Field name="message" component={this.renderInput} label="message" style="form-control"/><br/><br/>
                                    {/* <textarea class="form-control mr-1" rows="1" style={{ resize :"none", overflow:"auto"}}></textarea> */}
                                    <button className="btn btn-primary">Send</button>
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
    const errors = {}
    
    return errors;
}

const wrappedForm = reduxForm({
        form: 'chat',
        validate: validate
})(ChatBox);

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage,
            messege: state.auth.messege,
            workingUser: state.auth.userid
        };
}

export default connect(mapStateToProps, actions)(wrappedForm);