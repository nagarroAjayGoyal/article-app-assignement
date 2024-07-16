import "./Dashboard.scss";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import StoriesList from "../components/StoriesList/StoriesList";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";
import Loader from "../components/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopStories } from "../Slices/storiesSlice";
import { FILTER_OPTIONS } from "../config/constant";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [days, setdays] = useState(FILTER_OPTIONS[0].value);
  const dispatch = useDispatch();
  const storiesData = useSelector((state) => state.stories);

  useEffect(() => {
    dispatch(fetchTopStories(days));
  }, [dispatch]);

  useEffect(() => {
    if (storiesData && storiesData?.data && storiesData?.data.length > 0) {
      setArticles(storiesData?.data);
    }
  }, [storiesData]);

  if (storiesData.loading) {
    // Display loader while data is loading
    return <Loader isLoading={storiesData.loading}></Loader>;
  }

  const handleSelect = (day) => {
    setdays(day);
    dispatch(fetchTopStories(day));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="h3-label">
        <h3> Most Popular Articles</h3>
      </div>
      {articles.length > 0 && (
        <>
          <div className="dropdown-container">
            <span className="left-header">{`20 Popular Articles From Last ${days}  ${
              days > 1 ? "days" : "day"
            }`}</span>
            <Dropdown
              options={FILTER_OPTIONS}
              defaultOption={days}
              onSelect={handleSelect}
            />
          </div>

          <hr className="horizontal-divider" />

          <StoriesList articles={articles} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Dashboard;
