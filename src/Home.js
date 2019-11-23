import React from 'react';
import './Nav.css';
import LinkButton from './LinkButton';

class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-main">
                    <h1>Evelyn Cheng</h1>
                    <div className="buttons-row hidden">
                        <LinkButton textContent={'Contact'} className={'main-button'} />
                        <LinkButton textContent={'Portfolio'} className={'main-button'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;