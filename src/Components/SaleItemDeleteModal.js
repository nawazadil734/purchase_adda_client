import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../actions/index';
import { connect } from 'react-redux'; 
import history from '../history';
import requireAuth from './requireAuth';

class DeletePostModal extends Component {
    render() {
        const id = this.props.match.params.itemId;
        return ReactDOM.createPortal(
            <div className="ui dimmer modals visible active">
                {/* <div className="ui standard modal visible active"> */}
                <div className="ui icon header">
                        <i className="archive icon"></i>
                        Delete Post
                    </div>
                    <div className="content">
                        <p>Are you sure you want to delete the post permanentaly, Click yes to continue</p>
                    </div><br/><br/>
                    <div className="actions">
                        <div className="ui red basic cancel inverted button" onClick={() => history.push("/myitems")} >
                        <i className="remove icon"></i>
                        No
                        </div>
                        <div className="ui green ok inverted button" onClick={ () => this.props.deleteSaleItem(id)}>
                        <i className="checkmark icon"></i>
                        Yes
                        </div>
                    </div>
                {/* </div> */}
            </div>, document.querySelector('#modal')
        );
    }
}

export default requireAuth(connect(null, actions)(DeletePostModal));