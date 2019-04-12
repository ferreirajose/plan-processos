import React from 'react';

const CardsBodyMiddle = props => {
  const icon = props.icon || props.iconCustom;

  return (
    <div className="media-body media-body-middle">
      { icon ? (<i className={`fa rotatio-left ${props.icon || props.iconCustom}`} />) : ('')}{' '} {props.label}
      <span className="text-middle">Abrir Pasta</span>
    </div>
  );
};

export default CardsBodyMiddle;
