import React from 'react';

const Cards = (props) => {
  const { img, alt = 'Poster' } = props;

  return (
    <article className="card">
      <figure className="card__figure">
        <img className="card__img" src={img} alt={alt} />
        <figcaption className="card__caption">{alt}</figcaption>
      </figure>
    </article>
  );
};

export default Cards;