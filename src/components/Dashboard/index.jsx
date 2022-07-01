import React from "react";
import "../../styles/Dashboard.css";
import ProfileContainer from "../ProfileContainer/ProfileContainer";
import CardContainer from "../../components/CardContainer/CardContainer";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <ProfileContainer />
      <CardContainer />
    </div>
  );
};

export default Dashboard;
