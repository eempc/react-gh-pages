import React from 'react';
import './Nav.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <h2>Portfolio</h2>
                <div className="portfolio-row">
                    <div className="project-box">
                        <h3>ASP Web App</h3>
                    </div>
                    <div className="project-box">
                        <h3>Xamarin Android App</h3>
                    </div>
                    <div className="project-box">
                        <h3>Something else</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;