import React, { Component } from 'react';

import MenuItem from './menu-item';
import MenuTree from './menu-tree';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: false,
      text: '',
      itemMenu: [
        {
          name: 'Energia Eletrica'
        }
      ]
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    
  }

  handleClick() {
    this.setState({input: true})
  }

  handleChange(e) {
    this.setState({text: e.target.value });
  }

  handleAdd() {
    this.setState({input: false})
  }

  render() {
    
    return (
      <ul className="sidebar-menu tree" data-widget="tree">
        <MenuItem path="#" label="Processo" />
        <MenuItem path="#cards" label="Todos os Processo" iconCustom="bookmarks" />
        <MenuTree label="Etiquetas">
          {
            this.state.itemMenu.map((item, idx) => <MenuItem key={idx} path="#" label={item.name} />)
          }
        </MenuTree>
        <MenuItem path="#" label="Criar Etiqueta" iconCustom="tag-outline" 
          text={this.state.text} 
          input={this.state.input}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleClick={this.handleClick} />
        <MenuItem path="#" label="Feitos" />
      </ul>
    );
  }
}

export default Menu;
