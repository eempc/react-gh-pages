import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="portfolio-container">
                <h2>Portfolio</h2>
                <div className="portfolio-row">
                    <div className="project-box">
                        <h3>ASP.NET Core 3.0</h3>
                    </div>
                    <div className="project-box">
                        <h3>Xamarin Android</h3>
                    </div>
                    <div className="project-box">
                        <h3>Maybe WPF/Winforms</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;