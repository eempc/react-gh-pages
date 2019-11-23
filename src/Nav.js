import React from 'react';
import logo from './logo.svg';
import './Nav.css';
import LinkButton from './Components/LinkButton';
import GlyphButton from './Components/GlyphButton';
import ReactDOM from 'react-dom';
import Home from './Home';

class Nav extends React.Component {
    goHome() {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    render() {
        return (
            <div className="nav">
                <img src={logo} className="logo rotate-hover" alt="logo" onClick={this.goHome} />
                <nav>
                    <LinkButton textContent={'Home'} className={'link-button link-hover'} />
                    <LinkButton textContent={'About'} className={'link-button link-hover'} />
                    <LinkButton textContent={'Contact'} className={'link-button link-hover'} />
                    <LinkButton textContent={'Portfolio'} className={'link-button link-hover'} />
                    <GlyphButton glyphName={'GitHub'} url={'https://www.github.com'} />
                    <GlyphButton glyphName={'Azure'} url={'https://www.azure.com'} />
                </nav>
            </div>
        );
    }
}

export default Nav;