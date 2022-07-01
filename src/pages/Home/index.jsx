import React from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import Dashboard from "../../components/Dashboard/";
import "../../styles/Home.css";
const Home = () => {
  return (
    <div className="home">
      <Dashboard />
      <CardContainer />
    </div>
  );
};

export default Home;
