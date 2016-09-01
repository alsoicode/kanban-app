import React, { PropTypes } from 'react';
import Card from './Card';

export default class List extends React.Component {
  constructor() {
    super(...arguments);
  }

  static propTypes() {
    return {
      title: PropTypes.string.isRequired,
      cards: PropTypes.arrayOf(PropTypes.object)
    }
  }

  render() {
    var cards = this.props.cards.map((card, index) => {
      return <Card id={card.id} title={card.title} description={card.description} color={card.color} tasks={card.tasks} key={index} />
    });

    return (
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
}
