import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import { Link} from 'react-router-dom';

class RenderSaleCard extends Component {
    componentDidMount() {
        this.props.fetchSaleItems();
        // setInterval(() => this.props.fetchSaleItems(), 1000);
    }

    renderSaleCard = () => {
        return this.props.saleItems.map((item, key) => {
            const images = require.context('../../public/images', true);
            const userPhoto = images("./" + `${item.image1}`);
            return ( 
                <div className="col-sm-4" key={key}>
                <div className="card">
                        <img className="card-img-top" src={userPhoto} alt="iamge" style={{width:"190pt",height:"120pt"}}></img>
                        <div className="card-block">
                            <h4 className="card-title">{item.item_name}</h4>
                        <div className="card-text">
                            {/* <b>Rating</b>: {item.rating === null ? 'Unrated' : item.rating}<br/> */}
                            <b>Price: ₹     </b> {item.item_price}
                        </div>
                        </div>
                        <div className="card-footer">
                            <small>{item.item_category}</small>
                        <Link className="btn btn-primary float-right btn-sm" to={`/saleitem/${item.user_id}/${item.item_id}`}>View</Link>
                        </div>
                        </div>
                        <br/>
                </div>
            );
        }) 
    }
    render() {
            // console.log("details",this.props.saleItems)
        return (
            <div className="right_content col-sm-12" style={{ paddingLeft: "300px", margin: "0% 0%"}}>
                <div className="shadow p-3 mb-5 bg-white rounded">
                    <div className="row"> 

                            
                        {this.props.saleItems ? this.renderSaleCard() : ''}
                                      
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { saleItems: state.auth.saleItems}
}

export default connect(mapStateToProps, action)(RenderSaleCard);
