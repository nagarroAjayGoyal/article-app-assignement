import React from "react";
import "./Loader.css";

const Loader = (isLoading) => {
  return (
    <>
      {isLoading ? (
        <>
          <div className="loader-conatiner">
            <div className="img-container">
              <img src="././loader.svg" />
              <p>Loading...</p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Loader;
