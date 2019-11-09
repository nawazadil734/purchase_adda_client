import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from '../actions/index';
class Header extends Component {
    render() {
        return(
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-light fixed-top " style={{ backgroundColor: "whitesmoke"}}>
                    <Link className="navbar-brand" to="/" style={{marginLeft:"15pt", marginRight:"15pt"}}>PurchaseAdda</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/saleItems" style={{marginLeft:"10pt", marginRight:"10pt"}}>Buy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rentItems" style={{marginLeft:"10pt", marginRight:"10pt"}}>Lend</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forsell" style={{marginLeft:"10pt", marginRight:"10pt"}}>Sell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forrent" style={{marginLeft:"10pt", marginRight:"10pt"}}>Rent</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/requestedItems" style={{marginLeft:"10pt", marginRight:"10pt"}}>Requested Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/knowMore" style={{marginLeft:"10pt", marginRight:"10pt"}}>Know More</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mr-1">
                        <form className="form-inline" action="/action_page.php">
                        <input className="form-control mr-sm-2" type="text" style={{width: "300px"}} placeholder="Search"></input>
                        <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbardrop" data-toggle="dropdown">
                                <i className="far fa-user" style={{paddingRight: "3px"}}></i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to="/profile">Profile</Link>
                                <Link className="dropdown-item" to="/setting">Settings</Link>
                                <Link className="dropdown-item" to="/newRequestForm">New Request</Link>
                                <button className="dropdown-item" onClick={() => this.props.signout()}>Log Out</button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default connect(null, actions)(Header);