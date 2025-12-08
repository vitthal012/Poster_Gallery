import React from 'react';
import Cards from './Cards';

function Cardslist(props) {
    const cards = props.posters.map((obj) => (
        <li className="cards-list__item">
            <Cards img={obj.image}  />
        </li>
    ));

    return (
        <section className="cards-list" aria-label="Poster gallery">
            <ul className="cards-list__grid">{cards}</ul>
        </section>
    );
}

export default Cardslist;