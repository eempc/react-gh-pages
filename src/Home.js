import React from 'react';
import './Home.css';
import LinkButton from './Components/LinkButton';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-main">
                    <h1>Evelyn Cheng</h1>
                    <p>Under construction</p>
                    <div className="buttons-row hidden">
                        <LinkButton textContent={'About'} className={'main-button'} />
                        <LinkButton textContent={'Contact'} className={'main-button'} />
                        <LinkButton textContent={'Portfolio'} className={'main-button'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;