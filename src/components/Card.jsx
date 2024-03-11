import React from "react";
import "./style.css";
import bg_image from "/home/X9Z0/100cdev/react_questions_week_7/profile-component/src/components/bg_image.jpg";
import profile_pic from "./profile_img.jpeg";

const Card = () => {
  return (
    <div className="card">
      <div className="top-img"></div>
      <div className="profile-info">
        <div className="profile">
          <div className="profile-img">
            <img src={profile_pic} alt="profile" />
          </div>
          <p className="name">
            <span>Meow Correia</span> 36
          </p>
          <p className="location">London</p>
        </div>
        <div className="status-info">
          <div className="followers">
            <p className="number">80K</p>
            <p>Followers</p>
          </div>
          <div className="Likes">
            <p className="number">803K</p>
            <p>Likes</p>
          </div>
          <div className="Photos">
            <p className="number">1.4K</p>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
