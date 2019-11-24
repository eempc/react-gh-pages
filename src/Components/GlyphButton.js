import React from 'react';
import './GlyphButton.css';
import github from './images/github.png';
import azure from './images/azure.png';
import xunit from './images/xunit.png';

class GlyphButton extends React.Component {
    render() {
        let img;

        switch (this.props.glyphName) {
            case 'GitHub':
                img = <img className="glyph-button link-hover" src={github} alt="github logo" />;
                break;
            case 'Azure':
                img = <img className="glyph-button link-hover" src={azure} alt="azure logo" />;
                break;
            default:
                img = <img className="glyph-button link-hover" src={xunit} alt="xunit logo" />;
        }

        return (
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                {img}
            </a>
        );
    }
}

export default GlyphButton;