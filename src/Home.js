import React from 'react';
import './Nav.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Evelyn Cheng</h1>
                <div className="buttons-row">
                    <button onClick={this.loadPage} className="main-button">CV</button>
                    <button onClick={this.loadPage} className="main-button">Contact</button>
                </div>
            </div>
        );
    }
}

export default Home;