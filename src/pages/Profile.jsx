import React from "react";
import "../assets/style/profile.css";
import cover from "../assets/img/Cover_photo1.png";
import logo from "../assets/img/zaro.jpg";

const Profile = () => {
  return (
    <div className="profile-page">
      {/* Cover */}
      <div className="cover-photo">
        <img src={cover} alt="Cover" />
        <div className="profile-image">
          <img src={logo} alt="Profile" />
        </div>
      </div>

      {/* Info and Buttons */}
      <div className="profile-info">
        <div className="brand-details">
          <h1>Khmer Style Tees</h1>
          <p>37 likes • 73 followers</p>
        </div>
        <div className="buttons">
          <button className="story-btn">Add to story</button>
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        <button className="active">Posts</button>
        <button>About</button>
        <button>Photos</button>
        <button>More</button>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="card">
          <h2>Welcome to Khmer Style Tees</h2>
          <p>
            “Drawn from Stone — Worn with Fire.” ZARO is a streetwear brand born
            from creativity and culture. Join our mission to make Khmer fashion
            global.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
