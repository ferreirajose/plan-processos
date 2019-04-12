import React, { Component } from 'react';

class CardsBodyTag extends Component {
  constructor(props) {
    super(props)
    this.icon = this.props.icon || this.props.iconCustom;
  }

  showTags() {

    // let a;
    
    // const tags1 = this.props.tagsCards.map(id => {
    //   return a = {id};
    // });

    const index = this.props.tagsCards.length -1 > 0 ? this.props.tagsCards.length -1 : this.props.tagsCards.length; 

    const tagsCards = this.props.tags.filter((val, idx) => {
      return parseInt(val.id, 10) === this.props.tagsCards[0];
    });

    // const tagsCards = tags1.map(tag => {
    //   return this.props.tags.filter(val => { 
    //       return val.id == tag.id;
    //   });
    // });
    
    // console.log(tagsCards);
    return tagsCards;   

  }

  renderTags() {
    const a = this.showTags();
    return a.map((val, idx) => {
      return (
        <span className="tag" key={val.id || idx}>
          <small style={{background: val.background}} className="label">{val.name}</small>
        </span>
      )
    })
  }

  render() {
    return (
      <div className="media-body media-body-tag">
        { this.icon ? (<i className={`fa ${this.icon}`} aria-hidden="true" />) : ('') }

        { this.renderTags() }
      </div> 
    )
  }
}

export default CardsBodyTag;
