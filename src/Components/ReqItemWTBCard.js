import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import { Link} from 'react-router-dom';

class RenderReqCard extends Component {

    componentDidMount() {
        this.props.fetchReqWTBItems();
        // this.props.fetchOwnerProfile()
        // setInterval(() => this.props.fetchReqItems(), 1000);
    }


    renderReqCard = () => {
        return this.props.reqItems.map(item => {
            // console.log(item)
            return (
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-block">
                                    <h4 className="card-title">{item.item_name}</h4>
                                <div className="card-text">
                                    <b>Pricing</b>: Rs {item.item_price} <br/>
                                    {/* <b><i className='fas fa-map-marker-alt'></i></b> */}
                                </div>
                                </div>
                                <div className="card-footer" style={{textAlign:"center"}}>
                                    <small className="float-left">{item.item_category}</small>
                                    <small><b>Want To Buy</b></small>
                                    <Link className="btn btn-primary float-right btn-sm" to={`/requestWtb/${item.user_id}/${item.item_id}`}>View</Link>
                                </div>
                            </div><br/>
                    </div>
            );
        }) 
    }
    render() {
        return (
           
            <div className="right_content col-sm-12">
            <div className="row">
                        <div className="col-sm-12">
                            <div className="shadow p-3 mb-5 bg-white rounded">
                                <h1 style={{width:"100%"}}>WTB Requested Items<Link to="/newRequestForm" className="btn btn-primary" style={{float:"right", marginTop:"5px"}}>Request Item</Link></h1>
                            </div>
                        </div>
            </div>
                    <div className="row">
                    {this.props.reqItems ? this.renderReqCard() : ''}

                </div></div> 
        );
    }
}

const mapStateToProps = (state) => {
    return { reqItems: state.auth.reqItems}
}

export default connect(mapStateToProps, action)(RenderReqCard);
