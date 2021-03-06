import React, { Component } from 'react';

import PubSub from 'pubsub-js';

import MenuItem from './menu-item';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: false,
      text: '',
      cards: [], produto: '', tags: [], tarja: [], usuario: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.listeningMessages = this.listeningMessages.bind(this);
    
  }

  componentWillMount() {
    PubSub.subscribe('INIT_CARDS', this.listeningMessages)   
  }

  listeningMessages(channel, data) {
    const { tags, cards } = data;
    this.setState({tags, cards})
  };

  handleClick() {
    this.setState({input: true})
  }

  handleChange(e) {
    this.setState({text: e.target.value});  
  }

  handleAdd() {
    
    this.setState({
      input: false,
      text: '',
      tags: [ ...this.state.tags, { 'name': this.state.text }],
    });

  }

  render() {  
    const total = this.state.cards.length;

    return (
      <ul className="sidebar-menu tree" data-widget="tree">
        <MenuItem path={`#`} label="Processo" />
        <MenuItem path="/cards" active="active" total={total} label="Todos os Processo" iconCustom="bookmarks" />
        <MenuItem path={`#`} label="Etiquetas" active="active">
          {
            this.state.tags.map((item, idx) => <MenuItem key={idx} path="#" bg={item.background} label={item.name} />)
          }
        </MenuItem>
        <MenuItem path={`#`} label="Criar Etiqueta" iconCustom="tag-outline" 
          text={this.state.text} 
          input={this.state.input}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleClick={this.handleClick} />
        <MenuItem path={`#`} label="Feitos" />
      </ul>
    );
  }
}

export default Menu;
