import React from "react";
import "../styles/profile.css";
import feature1 from "../assets/feature-1.png";
import bubble4 from "../assets/fixed4.png";

function profile() {
  return (
    <div className="profile-main-div">
      <div className="profile-hero-section">
        <div className="profile-form-main">
          <div className="user-profile-div">
            <img src="" alt="" className="profile-img" />
          </div>

          <div className="div-profile-info">
            <>
              <div className="div-role-main">
                <h3>Role</h3>
              </div>
              <div className="div-role-main">
                <h3>Name</h3>
              </div>
              <div className="div-role-main">
                <h3>address</h3>
              </div>
            </>

            <div className="button-flex">
              <div>
                <button className="profile-btn">EDIT PICTURE</button>
                <input
                  className="input-edit-profile"
                  type="file"
                  hidden
                  // defaultValue={nameOfUser}
                />
              </div>
              <div>
                <button className="profile-btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="shape1 header-shape">
        <img src={feature1}></img>
      </span>

      <span className="bubble3 header-shape">
        <img src={bubble4}></img>
      </span>
      <span className="bubble4 header-shape">
        <img src={bubble4}></img>
      </span>
    </div>
  );
}

export default profile;
