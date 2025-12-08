import React from "react";
import PosterCard from "./newcards";

const Cardslist = ({ posters }) => {
  return (
    <div className="ui three stackable cards container" style={{ marginTop: "80px" }}>
      {posters.map((p, index) => (
        <PosterCard key={index} image={p.image} />
      ))}
    </div>
  );
};

export default Cardslist;
