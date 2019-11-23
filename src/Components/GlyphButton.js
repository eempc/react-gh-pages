import React from 'react';
import ReactDOM from 'react-dom';
import './GlyphButton.css';
import github from './images/github.png';
import azure from './images/azure.png';
import xunit from './images/xunit.png';

class GlyphButton extends React.Component {
    render() {
        let img;

        switch (this.props.glyphName) {
            case 'GitHub':
                img = <img className="glyph-button" src={github} />;
                break;
            case 'Azure':
                img = <img className="glyph-button" src={azure} />;
                break;
            default:
                img = <img className="glyph-button" src={xunit} />;
        }

        return (
            <a href={this.props.url} target="_blank">
                {img}
            </a>
        );
    }
}

export default GlyphButton;