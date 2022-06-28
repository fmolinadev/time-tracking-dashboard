import React from "react";
import "../../styles/ProfileContaier.css";
import Photo from "../Photo/Photo";
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
          <li>Dayli</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </aside>
  );
};

export default ProfileContainer;
