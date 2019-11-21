import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './Nav.css';
import Home from './Home';

class Nav extends React.Component {
    loadPage(event) {
        const root = document.getElementById('root');
        alert(event.target.innerHTML);
        ReactDOM.render(<Home />, root)
    }

    render() {
        return (
            <div className="nav">
                <div className="left-nav">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="right-nav">
                    <button onClick={this.loadPage} className="link-button">Home</button>
                    <button onClick={this.loadPage} className="link-button">About</button>
                    <button onClick={this.loadPage} className="link-button">Portfolio</button>
                    <button onClick={this.loadPage} className="link-button">CV</button>
                    <button onClick={this.loadPage} className="link-button">Contact</button>
                </div>
            </div>
        );
    }
}

export default Nav;