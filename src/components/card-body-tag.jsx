import React from 'react';

const CardsBodyTag = props => {
  const icon = props.icon || props.iconCustom;

  return (
    <div className="media-body media-body-tag">
      { icon ? (<i className={`fa ${props.icon || props.iconCustom}`} aria-hidden="true" />) : ('') }
    </div>
  );
};

export default CardsBodyTag;
