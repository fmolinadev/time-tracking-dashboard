import React from "react";
import "../../styles/Card.css";
import WorkIcon from "../../images/icon-work.svg";
import PlayIcon from "../../images/icon-play.svg";
import StudyIcon from "../../images/icon-study.svg";
import ExerciseIcon from "../../images/icon-exercise.svg";
import SocialIcon from "../../images/icon-social.svg";
import SelfcareIcon from "../../images/icon-self-care.svg";

// import { connect } from "react-redux";

export const Card = ({ info }) => {
  const daily = info.timeframes.daily;
  // const monthly = info.timeframes.monthly;
  // const weekly = info.timeframes.weekly;

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
          <h2>{daily.current} hrs</h2>
          <h5>Last Week - {daily.previous}hrs</h5>
        </div>
      </div>
    </div>
  );
};
