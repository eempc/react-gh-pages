import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="my-name">Evelyn Cheng</div>
                <div className="buttons">
                    <button onClick={this.loadPage} className="main-button">CV</button>
                    <button onClick={this.loadPage} className="main-button">Contact</button>
                </div>

            </div>
        );
    }
}

export default Home;