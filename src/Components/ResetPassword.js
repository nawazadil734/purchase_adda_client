import React, { Component } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom'
import bgpng from './final.jpg';
import history from '../history';
const loading = {
    margin: '1em',
    fontSize: '24px'    
};

export default class ResetPassword extends Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            update: false,
            isLoading: true,
            error: false
        };
    }

    async componentDidMount() {
        console.log(this.props.match.params.token);
        await axios.get('http://localhost:5000/reset/', {
                params: {
                    resetPasswordToken: this.props.match.params.token
                },
            })
            .then(response => {
                console.log(response);
                if(response.data.message === 'password reset link a-ok') {
                    this.setState({
                        userName: response.data.userName,
                        update: false,
                        isLoading: false,
                        error: false
                    });
                } else {
                    this.setState({
                        update: false,
                        isLoading: false,
                        error: true
                    });
                }
            })
            .catch(error => {
                console.log(error.data);
            });
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    updatePassword = e => {
        e.preventDefault();
        axios.put('http://localhost:5000/updatePasswordViaEmail', {
                userName: this.state.userName,
                password: this.state.password
            })
            .then(response => {
                console.log(response.data);
                if (response.data.message === 'password updated') {
                    this.setState({
                        updated: true,
                        error: false
                    });
                    alert("Password Updated")
                    history.push("/")
                } else {
                    this.setState({
                        updated: false,
                        error: true
                    });
                }
            })
            .catch(error => {
                console.log(error.data);
            });
    };

    render() {
        const {password, error, isLoading} = this.state;

        if(error) {
            return (
                <div className="myImage">
                <img src={bgpng} id="bg" alt="" style={{ position: "fixed",width:"1850px"}}/>
                <div className="container" style={{alignContent:"center", backgroundColor:"#000000"}}>
                    <div style={{borderRadius:"15px", border:"1px solid #808080", position:"absolute", padding:"20pt", width:"500pt", height:"250pt", top:"50%", transform:"translate(-50%, -50%)", left: "50%", backgroundColor:"white"}}>
                        <div className="row" style={{textAlign:"center"}}>
                            <div className="col-sm-12">
                                <label style={{fontSize:"33pt", fontFamily:"'Cabin', sans-serif"}}>Purchase</label><label style={{fontSize:"33pt", color:"#0275d8", fontFamily:"'Cabin', sans-serif"}}>Adda</label>
                            </div> 
                        </div>
                        <hr/>
                        <div className="row" style={{textAlign:"center"}}>
                            <div className="col-sm-12">
                                <label style={{fontSize:"20pt", fontFamily:"'Cabin', sans-serif", marginBottom:"4pt"}}>Password Reset Link Expired</label><br/>
                                <label style={{fontSize:"15pt", fontFamily:"'Open Sans', sans-serif", marginBottom:"15pt"}}>This link has been used once.</label><br/>
                                <Link to="/" style={{fontSize:"13pt", fontWeight:"bold"}}>Go back to Sign In</Link><br/><br/>
                                <Link to="/verification" style={{fontSize:"13pt", fontWeight:"bold"}}>Send a new reset link</Link><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            );
        } else if(isLoading) {
            return (
                <div  style={{alignContent:"center", backgroundColor:"#000000"}}>
                <img src={bgpng} id="bg" alt="" style={{ position: "fixed",width:"1850px"}}/>
                <div style={{borderRadius:"15px", border:"1px solid #808080", position:"absolute", padding:"20pt", width:"350pt", height:"200pt", top:"50%", transform:"translate(-50%, -50%)", left: "50%", backgroundColor:"white"}}>
                    <div className="row" style={{textAlign:"center"}}>
                    <label style={{fontSize:"33pt", color:"#0275d8", fontFamily:"'Cabin', sans-serif",alignContent:"center" }}>Password Reset Screen</label><br/><br/>
                    
                    <div style={loading}>Loading User Data...</div>
                </div>
                </div></div>
            );
        } else {
            return (
                <div  style={{alignContent:"center", backgroundColor:"#000000"}}>
                <img src={bgpng} id="bg" alt="" style={{ position: "fixed",width:"1850px"}}/>
                <div style={{borderRadius:"15px", border:"1px solid #808080", position:"absolute", padding:"20pt", width:"350pt", height:"200pt", top:"50%", transform:"translate(-50%, -50%)", left: "50%", backgroundColor:"white"}}>
                    <div className="row" style={{textAlign:"center"}}>
                    
                    <form onSubmit={this.updatePassword}>
                    <label style={{fontSize:"33pt", color:"#0275d8", fontFamily:"'Cabin', sans-serif",alignContent:"center" }}>Password Reset Screen</label><br/><br/>
                    <div className="form-group" style={{marginLeft:"15%", marginRight:"15%"}}>
                        <input id="password" label="password" onChange={this.handleChange('password')} value={password} type="password" className="form-control"/>
                        </div>
                        <div style={{ textAlign : "center"}}>
                                        <button type="submit" className="btn btn-primary">Update Password</button><br/>
                                    </div>
                        {/* <button type="submit">Update Password</button> */}
                    </form>
                    </div>
                    </div>
                </div>
            )
        }
    }
}