import React from "react";

const Landing = () => {
  return(
    <div>
      <div className="card">
        <div className="card-image">
          <img src="./banner.jpg" alt="banner" />
          <span className="card-title">Feedback Collector</span>
        </div>
        <div className="card-content">
          <p>Collect feedback from your customers</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
};

export default Landing;