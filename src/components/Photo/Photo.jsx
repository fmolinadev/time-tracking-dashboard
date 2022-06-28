import React from "react";
import "../../styles/Photo.css";
import Pic from "../../images/image-jeremy.png";

const Photo = () => {
  return (
    <div className="photo-container">
      <img
        src={Pic}
        alt="profile pic"
        aria-label="profile picture"
        className="photo-image"
      />
    </div>
  );
};

export default Photo;
