import React from "react";
import { Card } from "../Card/Card";
import allData from "../../JSON/data.json";

const CardContainer = () => {
  const dataCard = allData;

  return (
    <div>
      {dataCard.map((ele) => {
        console.log(ele);
        return <Card info={ele} key={ele.title} />;
      })}
    </div>
  );
};

export default CardContainer;
