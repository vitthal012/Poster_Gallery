import React from "react";

const PosterCard = ({ image }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={image} alt="poster" />
      </div>
      <div className="content">
        <div className="header">My Poster</div>
      </div>
    </div>
  );
};

export default PosterCard;
