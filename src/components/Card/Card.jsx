import React from "react";
import WorkIcon from "../../images/icon-work.svg";
import PlayIcon from "../../images/icon-play.svg";
import StudyIcon from "../../images/icon-study.svg";
import ExerciseIcon from "../../images/icon-exercise.svg";
import SocialIcon from "../../images/icon-social.svg";
import SelfcareIcon from "../../images/icon-self-care.svg";
import "../../styles/Card.css";

export const Card = ({ info, timeframe }) => {
  const workStyle = {
    background: "var(--primary-light-work)",
  };
  const playStyle = {
    background: "var(--primary-soft-play)",
  };
  const studyStyle = {
    background: "var(--primary-light-study)",
  };
  const exerciseStyle = {
    background: "var(--primary-lime-exercise)",
  };
  const socialStyle = {
    background: "var(--primary-violet-social)",
  };
  const selfcareStyle = {
    background: "var(--primary-soft-selfcare)",
  };

  let dataTime = "day";
  switch (timeframe) {
    case "daily":
      dataTime = "day";
      break;
    case "weekly":
      dataTime = "week";
      break;
    case "monthly":
      dataTime = "month";
      break;
    default:
      break;
  }

  return (
    <div className="card-container">
      <div
        className="card-content-top"
        style={
          info.title === "Work"
            ? workStyle
            : info.title === "Play"
            ? playStyle
            : info.title === "Study"
            ? studyStyle
            : info.title === "Exercise"
            ? exerciseStyle
            : info.title === "Social"
            ? socialStyle
            : info.title === "Self Care"
            ? selfcareStyle
            : ""
        }
      >
        <img
          src={
            info.title === "Work"
              ? WorkIcon
              : info.title === "Play"
              ? PlayIcon
              : info.title === "Study"
              ? StudyIcon
              : info.title === "Exercise"
              ? ExerciseIcon
              : info.title === "Social"
              ? SocialIcon
              : info.title === "Self Care"
              ? SelfcareIcon
              : "icon"
          }
          alt="icon background"
          className="card-img"
        />
      </div>
      <div className="card-content-info">
        <div className="card-content-info-text">
          <h3>{info.title}</h3>
          <span>...</span>
        </div>
        <div className="card-content-info-details">
          <h2>
            {info.timeframes[`${timeframe}`].current
              ? info.timeframes[`${timeframe}`].current
              : "0"}{" "}
            hrs
          </h2>
          <h5>
            Last {dataTime} -
            {info.timeframes[`${timeframe}`].previous
              ? info.timeframes[`${timeframe}`].previous
              : "0"}{" "}
            hrs
          </h5>
        </div>
      </div>
    </div>
  );
};
