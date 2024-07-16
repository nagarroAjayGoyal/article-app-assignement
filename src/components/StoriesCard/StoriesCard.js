import React from "react";
import "./StoriesCard.scss";
import { Link } from "react-router-dom";

const StoriesCard = ({ title, abstract, id, multimedia }) => {
  return (
    <Link to={`stories/${id}`}>
      <article className="stories-card" data-testid={`articleCard-${id}`}>
        <h2 className="title">{title}</h2>
        <p>{abstract}</p>
        {multimedia && multimedia["media-metadata"][1] && (
          <img
            className="article-img"
            width="350"
            src={multimedia["media-metadata"][1].url}
            alt={multimedia.caption}
          />
        )}
      </article>
    </Link>
  );
};

export default StoriesCard;
