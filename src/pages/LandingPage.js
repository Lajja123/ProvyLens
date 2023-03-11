import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.scss";

function LandingPage() {
  const navigate = useNavigate();
  const openCreateDaoPage = () => {
    navigate("register");
  };
  const openExistingDaoPage = () => {
    navigate("/open-existing-data-dao");
  };

  return (
    <>
      <section className="hero">
        {/* <div className="gradient-3"></div>
        <div className="gradient-4"></div> */}
        {/* <img src={heroimg2} alt="hero" className="hero-image" /> */}
        <div className="hero-img-overlay"></div>
        <h1>Welcome to the Supply Chain management</h1>
        {/* <p>Create your own DataDao in few minutes with ease.</p> */}

        <div className="hero-btns">
          <button
            className="create-dao-btn"
            onClick={() => openCreateDaoPage()}
          >
            Register
          </button>
          <button
            className="existing-dao-btn"
            onClick={() => openExistingDaoPage()}
          >
            Open Existing DataDao
          </button>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
