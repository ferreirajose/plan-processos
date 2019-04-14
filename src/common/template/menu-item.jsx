import React, { Component } from 'react';

class MenuItem extends Component {

  constructor(props) {
    super(props);

    this.icon = this.props.icon || this.props.iconCustom;
    this.bg = this.props.bg || '';

  }

  createInput() {
    return (<a>
      <div className="input-group input-group-custom input-group-sm">
        <input type="text" value={this.props.text} onChange={this.props.handleChange} className="form-control input-custom" />
        <span className="input-group-btn">
          <button type="button" onClick={this.props.handleAdd} className="btn btn-flat">
            <i className="fa check"></i>
          </button>
        </span>
      </div>
    </a>);
  }

  render() {
    const total = this.props.total;
    const active = this.props.active || '';

    return (
      <li className={`treeview ${active}`}>
        {this.props.input ? (this.createInput()) : ('')}

        <a href={this.props.path} className={this.props.input ? ('hide') : ''} onClick={this.props.handleClick}>
          {this.bg ? (<small style={{ background: this.bg }} className="label-custom"></small>) : ('')}
          {this.icon ? (<i className={`fa ${this.icon || this.props.iconCustom}`} />) : ('')}
          <span>{this.props.label}</span>
          {total ? (<span className="pull-right total-processos">{total}</span>) : ('')}
        </a>
        <ul className='treeview-menu'>
          {this.props.children}
        </ul>
      </li>
    );
  }
}

export default MenuItem;
