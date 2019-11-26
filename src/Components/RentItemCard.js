import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import { Link} from 'react-router-dom';

class RenderSaleCard extends Component {
    componentDidMount() {
        this.props.fetchRentItems();
        // setInterval(() => this.props.fetchRentItems(), 1000);
    }

    renderRentCard = () => {
        return this.props.rentItems.map(item => {
            const images = require.context('../../public/images', true);
            const userPhoto = images("./" + `${item.image1}`);
            return ( 
                <div className="col-sm-4">
                <div className="card">
                        <img className="card-img-top" src={userPhoto} alt="iamge" style={{width:"190pt",height:"120pt"}}></img>
                        <div className="card-block">
                            <h4 className="card-title">{item.item_name}</h4>
                        <div className="card-text">
                            <b>Rating</b>: {item.rating === null ? 'Unrated' : item.rating}<br/>
                            <b>Rate: ₹     </b> {item.rent_rate}
                        </div>
                        </div>
                        <div className="card-footer">
                            <small>{item.item_category}</small>
                        <Link className="btn btn-primary float-right btn-sm" to={`/rentitem/${item.user_id}/${item.item_id}`}>View</Link>
                        </div>
                        </div>
                        <br/>
                </div>
            );
        }) 
    }
    render() {

        console.log("adil", this.props.rentItems)
        return (
            <div className="right_content col-sm-12" style={{paddingLeft: "300px", margin: "1% 0%"}}>
                <div className="row" style={{ width: "830px", marginLeft: "-15px"}}>
                    <div className="col-sm-12">
                        <div className="shadow p-3 mb-5 bg-white rounded">
                            <h1 style={{width:"100%"}}>Items for Rent<Link to="/forrent" className="btn btn-primary" style={{float:"right", marginTop:"5px"}}>Add New Rent Item</Link></h1>
                        </div>
                    </div>
                </div>
                <div className="shadow p-3 mb-5 bg-white rounded">
                    <div className="row">     
                        {this.props.rentItems ? this.renderRentCard() : ''}
                                      
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { rentItems: state.auth.rentItems}
}

export default connect(mapStateToProps, action)(RenderSaleCard);
