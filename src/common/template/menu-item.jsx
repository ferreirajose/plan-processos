import React, { Component } from 'react';

class MenuItem extends Component {

  constructor(props) {
    super(props);
    
    this.icon = this.props.icon || this.props.iconCustom;
    this.total = this.props.total || 1; 
    this.bg = this.props.bg || ''; 
  
  }

  createInput() {
    const input = <a>
                    <div className="input-group input-group-custom input-group-sm">
                      <input type="text" value={this.props.text} onChange={this.props.handleChange} className="form-control input-custom" />
                      <span className="input-group-btn">
                        <button type="button" onClick={this.props.handleAdd} className="btn btn-flat">
                        <i className="fa check"></i>
                      </button>
                      </span>
                    </div>
                  </a>;

    return input;
  }  

  render() {
    
    return (
      <li>
        { this.props.input ? (this.createInput()) : ('')}

        <a href={this.props.path} className={ this.props.input ? ('hide'): ''} onClick={this.props.handleClick}>
          { this.bg ? (<small style={{background: this.bg}} className="label-custom">Justiça Gratuita</small>): ('') }  
          { this.icon ? ( <i className={`fa ${this.icon || this.props.iconCustom}`} /> ) : ('') }
          <span>{ this.props.label }</span>
          { this.total ? (<span className="pull-right total-processos">{this.total}</span>) : ('') }
        </a>
      </li>
    );
  }
}

export default MenuItem;
