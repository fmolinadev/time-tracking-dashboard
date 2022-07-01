import React from "react";
import "../../styles/ProfileContaier.css";
import Photo from "../Photo/Photo";
import { viewDaily, viewWeekly, viewMonthly } from "../../redux/actions";
import "../../styles/ProfileContaier.css";

const ProfileContainer = () => {
  return (
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
          <li
            onClick={() => {
              console.log("CLICK EN DAYLI", viewDaily());
            }}
          >
            Daily
          </li>
          <li
            onClick={() => {
              console.log("CLICK EN WEEKLY", viewDaily());
            }}
          >
            Weekly
          </li>
          <li
            onClick={() => {
              console.log("CLICK EN MONTHLY", viewMonthly());
            }}
          >
            Monthly
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ProfileContainer;
