import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ResetPassword from './Components/ResetPassword'
import userItems from './Components/userItems';
import Dashboard from './Components/Dashboard';
import Verificatiion from './Components/Verification';
import newRequestForm from './Components/newRequestForm';
import Setting from './Components/EditProfile';
// import ForSale from './Components/ForSale';
import forRentWizard from './Components/forRentWizard';
import Items from './Components/Items';
import ItemPage from './Components/ItemPage';
import history from "./history";
import ForgotPassword from './Components/ForgotPassword';
import * as actions from './actions/index';
import forSaleWizard from './Components/forSaleWizard';
import { connect } from 'react-redux';


class App extends Component {
    render() {
        return(
            <div >
                <Router history={history}>
                    <div>
                    <Route path="/" exact component={this.props.authenticated ? Items : SignIn}/>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/dashboard" exact component={Items}/>
                    <Route path="/verification" exact component={ForgotPassword}/>
                    <Route path="/reset/:token" exact component={ResetPassword} />
                    <Route path="/forsell" exact component={forSaleWizard}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/setting" exact component={Setting}/>
                    <Route path="/items" exact component={Items}/>
                    <Route path="/itempage" exact component={ItemPage} />
                    <Route path="/forrent" exact component={forRentWizard}/>
                    <Route path="/itemsRent" exact component={Items}/>
                    <Route path="/newRequestForm" exact component={newRequestForm}/>
                    <Route path="/myitems" exact component={userItems}/>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps, actions)(App);
