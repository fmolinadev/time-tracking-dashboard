import React from "react";
import "../../styles/Card.css";

export const Card = ({ info }) => {
  const daily = info.timeframes.daily;
  const monthly = info.timeframes.monthly;
  const weekly = info.timeframes.weekly;

  return (
    <div className="card-container">
      <div className="card-content-top">
        <img src="" alt="" className="card-img" />
      </div>
      <div className="card-content-info">
        <div className="card-content-info-text">
          <h3>{info.title}</h3>
          <span>...</span>
        </div>
        <div className="card-content-info-details">
          <h2>{daily.current} hrs</h2>
          <h5>Last Week - {daily.previous}hrs</h5>
        </div>
      </div>
    </div>
  );
};
