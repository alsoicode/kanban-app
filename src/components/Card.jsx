import React from 'react';
import CheckList from './CheckList';

export default class Card extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      showDetails: false
    };

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }

    return (
      <div className="card">
        <div className="card__title" onClick={this.toggleDetails}>{this.props.title}</div>
        {cardDetails}
      </div>
    );
  }
}
