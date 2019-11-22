import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './Nav.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

class Nav extends React.Component {
    loadPage(event) {
        const root = document.getElementById('root');
        let buttonText = event.target.innerHTML;

        switch (buttonText) {
            case 'Home':
                ReactDOM.render(<Home />, root);
                break;
            case 'About':
                ReactDOM.render(<About />, root);
                break;
            case 'Contact':
                ReactDOM.render(<Contact />, root);
                break;
            case 'Portfolio':
                ReactDOM.render(<Portfolio />, root);
                break;
            default:
                ReactDOM.render(<Home />, root);
        }


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