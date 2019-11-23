import React from 'react';
import ReactDOM from 'react-dom';
import './LinkButton.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import App from './App';

class LinkButton extends React.Component {
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

    // LinkButton, you pass in two arguments, textContent should have matching names to a jsx file, and className
    render() {
        return (
            <div className={this.props.className} onClick={this.loadPage}>
                    {this.props.textContent}
            </div>
        );
    }
}

export default LinkButton;