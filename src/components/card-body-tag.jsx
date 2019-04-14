import React, { Component } from 'react';

import '../assets/css/tag.css';
class CardsBodyTag extends Component {
  constructor(props) {
    super(props);
    this.state = {class: 'none' }

    this.icon = this.props.icon || this.props.iconCustom;
    this.handerOpenPopup = this.handerOpenPopup.bind(this);
    this.handerClosePopup = this.handerClosePopup.bind(this);
  }

  showTags() {

    const tagsCards = this.props.tags.filter((val, idx) => {
      return parseInt(val.id, 10) === this.props.tagsCards[0];
    });

    return tagsCards;   
    
  }

  handerOpenPopup() {
    this.setState({class: 'block'});
  }

  handerClosePopup() {
    this.setState({class: 'none'});
  }

  renderPopup() {
    return(
      <div id="popup" className={`form-popup ${this.state.class}`}>
        <div className="form-container">
          <p className="text">Etiquetar como: </p>
          <span onClick={this.handerClosePopup} className="tag">
            <small className="label bg-green">Energia Eletrica</small>
          </span>
        </div>
      </div>
    )
  }

  renderTags() {
    const tag = this.showTags();
    return tag.map((val, idx) => {
      return (
        <span className="tag" key={val.id || idx}>
          <small style={{background: val.background}} className="label">{val.name}</small>
        </span>
      )
    });
  }

  render() {
    return (
      <div className="media-body media-body-tag">
        <a href={`#`} className="relative">
          { this.icon ? (<i className={`fa ${this.icon}`} onClick={this.handerOpenPopup} aria-hidden="true" />) : ('') }
          { this.renderPopup() }
        </a>
        { this.renderTags() }
        
      </div> 
    )
  }
}

export default CardsBodyTag;
