import React, { Component } from 'react';
import requireAuth from './requireAuth';
import Header from './Header';
import { Link } from 'react-router-dom';
class Dashboard extends Component {
    render() {
        var well={
            boxShadow: "1px 3px 1px #9E9E9E",
            width: "0% 15%"
            }
        return(
            <div>
                <Header/>
                This is Dashboard
                <div className="card" style={well}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/" className="card-link">Card link</Link>
                        <Link to="/" className="card-link">Another link</Link>
                    </div>
                </div>
                <div className="card" style={well}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/" className="card-link">Card link</Link>
                        <Link to="/" className="card-link">Another link</Link>
                    </div>
                </div>
                <div className="card" style={well}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/" className="card-link">Card link</Link>
                        <Link to="/" className="card-link">Another link</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default requireAuth(Dashboard);