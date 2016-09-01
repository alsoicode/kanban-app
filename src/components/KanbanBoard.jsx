import React from 'react';
import List from './List';

export default class KanbanBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <List id="todo" title="To Do" cards={this.props.cards.filter((card) => card.status === 'todo')} />
        <List id="in-progress" title="In Progress" cards={this.props.cards.filter((card) => card.status === 'in-progress')} />
        <List id="done" title="Done" cards={this.props.cards.filter((card) => card.status === 'done')} />
      </div>
    );
  }
}
