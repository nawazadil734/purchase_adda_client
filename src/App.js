import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import './App.css';

// import SignIn from './Components/SignIn';
import SignIn2 from './Components/SignIn2';

// import SignUp from './Components/SignUp';
import SignUp2 from './Components/SignUp2';


import userItems from './Components/userItems';
// import Dashboard from './Components/Dashboard';
// import Verificatiion from './Components/Verification';
import newRequestForm from './Components/newRequestForm';
import Setting from './Components/EditProfile';
import ForSaleForm from './Components/ForSaleForm';
import ForRentForm from './Components/ForRentForm';

import SaleItems from './Components/SaleItems';
import RentItems from './Components/RentItems';

import SaleItemPage from './Components/SaleItemPage';
import RentItemPage from './Components/RentItemPage';

import RequestWTBPage from './Components/RequestWTBPage';
import RequestWTRPage from './Components/RequestWTRPage';

import EditForSaleForm from './Components/EditForSaleForm';
import EditForRentForm from './Components/EditForRentForm';
import EditWTBRequestForm from './Components/EditWTBRequestForm';
import EditWTRRequestForm from './Components/EditWTRRequestForm';

import requestItemWtb from './Components/requestItemWtb';
import requestItemWtr from './Components/requestItemWtr';

import LandingPage from './Components/LandingPage';
import Inbox from './Components/Inbox';
import Outbox from './Components/Outbox';
import forSaleMessageForm from './Components/forSaleMessageForm';
import forRentMessageForm from './Components/forRentMessageForm';
import viewForRentMessage from './Components/viewForRentMessage';
import viewForSaleMessage from './Components/viewForSaleMessage';

import SaleItemDeleteModal from './Components/SaleItemDeleteModal';
import RentItemDeleteModal from './Components/RentItemDeleteModal';
import WtbItemDeleteModal from './Components/WtbItemDeleteModal';
import WtrItemDeleteModal from './Components/WtrItemDeleteModal';

import ChatBox from './Components/ChatBox';
// import OtherProfile from './Components/otherUserProfile';
import history from "./history";

import AboutSales from './Components/AboutSales';
import * as actions from './actions/index';
// import forSaleWizard from './Components/forSaleWizard';
import { connect } from 'react-redux';
import otherUserProfile from './Components/otherUserProfile';

import SearchResults from './Components/SearchResults';





import ForgotPassword from './Components/ForgotPassword';
import Verification2 from './Components/Verification2';
import ResetPassword from './Components/ResetPassword'
class App extends Component {
    render() {
        return(
            <div >
                <Router history={history}>
                    <div>
                    <Route path="/" exact component={this.props.authenticated ? LandingPage : SignIn2}/>
                    <Route path="/signup" exact component={this.props.authenticated ? LandingPage : SignUp2}/>
                    <Route path="/dashboard" exact component={LandingPage}/>

                    <Route path="/verification" exact component={Verification2}/>

                    <Route path="/reset/:token" exact component={ResetPassword} />
                    <Route path="/forsell" exact component={ForSaleForm}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/setting" exact component={Setting}/>
                    <Route path="/saleItems" exact component={SaleItems}/>


                    <Route path="/saleitem/:ownerid/:itemid" exact component={SaleItemPage} />
                    <Route path="/rentitem/:ownerid/:itemid" exact component={RentItemPage} />
                    <Route path="/requestWtb/:ownerid/:itemid" exact component={requestItemWtb}/>
                    <Route path="/requestWtr/:ownerid/:itemid" exact component={requestItemWtr}/>

                    <Route path="/forrent" exact component={ForRentForm}/>
                    <Route path="/rentItems" exact component={RentItems}/>
                    <Route path="/newRequestForm" exact component={newRequestForm}/>
                    <Route path="/myitems" exact component={userItems}/>
                    <Route path="/otherUser/:id" exact component={otherUserProfile}/>

                    <Route path="/requestedWTBItems" exact component={RequestWTBPage}/>
                    <Route path="/requestedWTRItems" exact component={RequestWTRPage}/>

                    <Route path="/editSaleItem/:userid/:itemid" exact component={EditForSaleForm}/>
                    <Route path="/editRentItem/:userid/:itemid" exact component={EditForRentForm}/>
                    <Route path="/editReqBuyItem/:userid/:itemid" exact component={EditWTBRequestForm}/>
                    <Route path="/editReqRentItem/:userid/:itemid" exact component={EditWTRRequestForm}/>

                    
                    <Route path="/knowMore" exact component={AboutSales}/>
                    <Route path="/inbox" exact component={Inbox}/>
                    <Route path="/outbox" exact component={Outbox}/>
                    <Route path="/forSaleMessageForm" exact component={forSaleMessageForm}/>
                    <Route path="/forRentMessageForm" exact component={forRentMessageForm}/>
                    <Route path="/viewForRentMessage" exact component={viewForRentMessage}/>
                    <Route path="/viewForSaleMessage" exact component={viewForSaleMessage}/>
                    <Route path="/ChatBox/:currUser/:owner" exact component={ChatBox}/>

                    <Route path="/deleteSaleItem/:itemId" exact component={SaleItemDeleteModal}/>
                    <Route path="/deleteRentItem/:itemId" exact component={RentItemDeleteModal}/>
                    <Route path="/deleteWtbItem/:itemId" exact component={WtbItemDeleteModal}/>
                    <Route path="/deleteWtrItem/:itemId" exact component={WtrItemDeleteModal}/>

                    <Route path="/query" exact component={SearchResults}/>

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
