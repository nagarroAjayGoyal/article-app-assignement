import React from "react";
import "./StoriesList.css";
import StoriesCard from "../StoriesCard/StoriesCard";

const StoriesList = ({ articles }) => {
  const StoriesCards = articles?.map((article, index) => {
    return (
      <StoriesCard
        key={index}
        id={article.id}
        title={article.title}
        abstract={article.abstract}
        multimedia={article.media[0]}
        // short_url={article.short_url}
      />
    );
  });
  return <div className="stories-list">{StoriesCards}</div>;
};

export default StoriesList;
