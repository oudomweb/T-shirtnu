import React, {useEffect} from "react";
import "../profile/profile.css";
import userImage from "../../assets/img/btb.jpg"; // make sure the path is correct
import {useSelector} from "react-redux";

const Profile = () => {
  const form = useSelector((state) => state.form);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(form));
    console.log("Form changed:", {name, phone, email, subject, message});

    // You can do something else here like syncing to localStorage or triggering side effects
  }, []);
  const {name, phone, email, subject, message, image} = form;

  return (
    <div className="form-container-profile">
      <h2>Send Us a Message</h2>

      <div className="profile">
        <img src={image} alt="User" />
      </div>

      <form className="form-profile">
        <div className="row-profile">
          <div className="field">
            <label>Name:</label>
            <input type="text" value={name} disabled />
          </div>
          <div className="field">
            <label>Phone Number:</label>
            <input type="text" value={phone} disabled />
          </div>
        </div>

        <div className="field">
          <label>Email:</label>
          <input type="email" value={email} disabled />
        </div>

        <div className="field">
          <label>Subject:</label>
          <input type="text" value={subject} disabled />
        </div>

        <div className="field">
          <label>Message:</label>
          <textarea rows="6" disabled>
            {message ? message : "Empty"}
          </textarea>
        </div>
      </form>
    </div>
  );
};

export default Profile;
