import React from 'react';

const CardsBodyInfo = props => {

  const { tag, classe, numero, tarja, data, competencia, partes: { ativa, passiva } } = props.cards || {};

  return (
    <div className="media-body media-body-info">
      <div className="box-top box-inline">
        <i className="fa fa-plus-circle text-success" aria-hidden="true" />
        <span>{ativa.name} </span>
        <strong> { tag[0] ? ` + ${tag[0]}`: ''}</strong>
      </div>
      <div className="box-top box-inline">
        <i className="fa fa-minus-circle text-danger" aria-hidden="true" />
        <span>{passiva.name} </span>
        <strong> { tag[1] ? ` + ${tag[1]}`: ''}</strong>
      </div>

      <div className="box-bottom">
        <p>
          <span>{classe}</span> {' - '}
          <strong>{competencia}</strong>
        </p>
        <span className="mr color-numero">{numero}</span>

        {data ? <span className="mr">{data}</span> : ''}

        {
          tarja.map((val, idx) => 
            <span className="mr" key={val.id || idx}>
              <small className="label" style={{background: val.background, color: val.color}} >{val.name}</small>
            </span>
          )
        }

      </div>
    </div>
  );
};

export default CardsBodyInfo;
