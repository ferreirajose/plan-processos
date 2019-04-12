import React, { Component } from 'react';

import PubSub from 'pubsub-js';

import CardsBodyInfo from './cards-body-info';
import CardsBodyMiddle from './card-body-middle';
import CardsBodyTag from './card-body-tag';

import '../assets/css/cards.css';

class CardsLista extends Component {
  constructor(props) {
    super(props);
    
    this.state = { cards: [], produto: '', tags: [], tarja: [], usuario: [] };
    this.renderCards = this.renderCards.bind(this);
    this.listeningMessages = this.listeningMessages.bind(this);
  }

  componentWillMount(){
    PubSub.subscribe('INIT_CARDS', this.listeningMessages);
    PubSub.subscribe('FILTER_CARDS', this.listeningMessages);
  }

  listeningMessages(channel, data) {
    channel === 'INIT_CARDS' ? this.setState(data): this.setState({cards: data});
  };

  renderCards() {
    const { cards } = this.state;

    const listaCards = cards.map((data, idx) => {
      return (
        <div className="box box-solid" key={data.id || idx}>
          <div className="box-body box-cards">
            <div className="media">
              <CardsBodyInfo cards={data} />
              <CardsBodyMiddle iconCustom="folder-open-o" />
              <CardsBodyTag iconCustom="tag-outline" />
            </div>
          </div>
        </div>
      );
    });

    return listaCards;
  }

  render() {
    return <div>{this.renderCards()}</div>;
  }

}

export default CardsLista;
