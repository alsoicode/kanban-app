import React from 'react';
import marked from 'marked';
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
          <span dangerouslySetInnerHTML={{__html: marked(this.props.description)}} />
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }

    return (
      <div className="card">
        <div className={(this.state.showDetails ? "card__title--is-open " : "") + "card__title"} onClick={this.toggleDetails}>{this.props.title}</div>
        {cardDetails}
      </div>
    );
  }
}
