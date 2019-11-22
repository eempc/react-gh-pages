import React from 'react';
import './Nav.css';
import LinkButton from './LinkButton';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Evelyn Cheng</h1>
                <div className="buttons-row">
                    <LinkButton textContent={'Portfolio'} className={'main-button'} />
                    <LinkButton textContent={'Contact'} className={'main-button'} />
                </div>
            </div>
        );
    }
}

export default Home;