import { CSSTransitionGroup } from 'react-transition-group';
import React from 'react';
import './ToDo.css';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: ['hello', 'world', 'click', 'me'] };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter some text')
        ]);
        this.setState({ items: newItems });
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({ items: newItems });
    }

    render() {
        // For each item, add this onClick handler
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ));

        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={1500}
                    transitionLeaveTimeout={1300}>
                    {items}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default ToDo;