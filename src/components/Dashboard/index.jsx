import React from "react";
import { useState } from "react";
import "../../styles/Dashboard.css";
import "../../styles/ProfileContaier.css";
import "../../styles/CardContainer.css";
import { Card } from "../Card/Card";
import Photo from "../Photo/Photo";
import jsonData from "../../JSON/data.json";

const Dashboard = () => {
  const dataCard = jsonData;
  const [timeframe, setTimeframe] = useState("daily");
  return (
    <div className="dashboard">
      <aside className="profile-container">
        <div className="profile-hero">
          <Photo />
          <div className="profile-hero-text">
            <h4>Report of</h4>
            <h2>Jeremy Robson</h2>
          </div>
        </div>
        <div className="profile-options">
          <ul>
            <li onClick={() => setTimeframe("daily")}>Daily</li>
            <li onClick={() => setTimeframe("weekly")}>Weekly</li>
            <li onClick={() => setTimeframe("monthly")}>Monthly</li>
          </ul>
        </div>
      </aside>
      <div className="allCard-container">
        {dataCard.map((ele) => {
          return <Card info={ele} key={ele.title} timeframe={timeframe} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
