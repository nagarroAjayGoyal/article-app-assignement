import "./StoriesDetail.scss";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

const StoriesDetail = () => {
  const { data } = useSelector((state) => state.stories);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data, navigate]);

  if (!data) {
    return null; // or loading indicator
  }

  const selectedArticle = data?.find(
    (article) => article?.id.toString() === id
  );
  const {
    title,
    abstract,
    byline,
    media,
    section,
    subsection,
    url,
    published_date,
  } = selectedArticle;

  return (
    <div className="details-viewpage">
      <Header />
      <div className="back-btn-container">
        <Link to="/">
          <button className="back-btn">Go Back</button>
        </Link>
      </div>
      <div className="article-details">
        <div className="details-container">
          <h1>{title}</h1>
          <p>{abstract}</p>
          <a
            className="article-link"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Read More...
          </a>
          <p>{byline}</p>
          <p>{published_date}</p>
          <p>
            {section} {subsection}
          </p>
        </div>
        <div>
          <img src={media[0]["media-metadata"][2].url} alt={media[0].caption} />
        </div>
      </div>
    </div>
  );
};

export default StoriesDetail;
