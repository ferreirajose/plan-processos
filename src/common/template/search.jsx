import React, { Component } from 'react';
import axios from 'axios';

import PubSub from 'pubsub-js';

class Search extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { search: '', cards: []};
    this.updateSearch = this.updateSearch.bind(this);
    this.filterCards = this.filterCards.bind(this);
  }

  componentWillMount() {
    const URI = 'http://www.mocky.io/v2/5ca8e4f73700009003492df6';
  
    axios.get(URI)
      .then(res => {
        this.setState(res.data);
        PubSub.publish( 'INIT_CARDS', res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value});
    PubSub.publish('FILTER_CARDS', this.filterCards());
  }

  filterCards() {

    const { search, cards } = this.state;
  
    let filter = cards.filter(val => {
      return val.competencia.toLowerCase().match(search.toLowerCase());
    });

    return filter;

  }

  render() {

    return (
      <div className="input-group input-group-lg">
        <span className="input-group-btn">
          <button type="submit" className="btn btn-flat">
            <i className="fa fa-search" />
          </button>
        </span>
        <input type="text" className="form-control input-search" value={this.state.search} onChange={this.updateSearch} placeholder="Buscar" />
      </div>
    );
  }
}

export default Search;
