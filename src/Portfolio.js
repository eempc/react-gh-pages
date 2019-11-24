import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="portfolio-container">
                <h2>Portfolio</h2>
                <p>Empty</p>
                <div className="portfolio-row hidden">
                    <div className="project-box">
                        <h3>ASP.NET Core 3.0</h3>
                        <p>Because nobody uses desktop apps anymore</p>
                    </div>
                    <div className="project-box">
                        <h3>Xamarin Android</h3>
                        <p>Lorum ipsum etc</p>
                    </div>
                    <div className="project-box">
                        <h3>Maybe WPF/Winforms</h3>
                        <p>Because why not</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;