import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount, useSigner } from "wagmi";
import { ethers } from "ethers";

import "../styles/LandingPage.scss";
import heroimg2 from "../assets/landingpage.png";
import shape1 from "../assets/header6_shape_1.png";
import shape2 from "../assets/header6_shape_2.png";
import shape3 from "../assets/header6_shape_3.png";
import shape4 from "../assets/header6_shape_4.png";
import shape5 from "../assets/header6_shape_5.png";
import shape6 from "../assets/header6_shape_6.png";
import bubble1 from "../assets/fixed1.png";
import bubble2 from "../assets/fixed2.png";
import bubble3 from "../assets/fixed2.png";
import bubble4 from "../assets/fixed4.png";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";

import { checkRegistration } from "../components/CheckRegistration";

function LandingPage() {
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();
  const openCreateDaoPage = () => {
    navigate("register");
  };
  const openExistingDaoPage = () => {
    navigate("/open-existing-dashboard");
  };

  const checkReg = async () => {
    const ans = await checkRegistration(address);
    if (ans) {
      console.log(ans[1]);
      if (ans[0] === 0) {
        if (ans[1] === "0x") {
          navigate("register");
        } else {
          navigate("/open-existing-dashboard");
        }
      }
      if (ans[0] === 1) {
        navigate("/open-existing-dashboard");
      }
      if (ans[0] === 1) {
        navigate("/open-existing-dashboard");
      }
    }
  };
  useEffect(() => {
    if (address) {
      checkReg();
      // navigate("/");
    } else {
      navigate("/");
    }
  }, [address]);
  return (
    <>
      <section className="header" id="header-06">
        <div className="hero">
          <Particles />
          <div>
            {/* <div className="gradient-3"></div>
        <div className="gradient-4"></div> */}
            <img src={heroimg2} alt="hero" className="hero-image" />
          </div>
          <div className="hero-img-overlay"></div>
          <h1>Welcome to the ProvyLens</h1>
          <p>A supply chain management app on web3.</p>
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
              Open Existing Dashboard
            </button>
          </div>
        </div>
        <span className="shape1 header-shape">
          <img src={shape1}></img>
        </span>
        <span className="shape2 header-shape">
          <img src={shape2}></img>
        </span>
        <span className="shape3 header-shape">
          <img src={shape3}></img>
        </span>
        <span className="shape4 header-shape">
          <img src={shape4}></img>
        </span>
        <span className="shape5 header-shape">
          <img src={shape5}></img>
        </span>
        {/* <span className="shape6 header-shape">
          <img src={shape6}></img>
        </span> */}
        <span className="bubble1 header-shape">
          <img src={bubble1}></img>
        </span>
        <span className="bubble2 header-shape">
          <img src={bubble2}></img>
        </span>
        <span className="bubble3 header-shape">
          <img src={bubble3}></img>
        </span>
        <span className="bubble4 header-shape">
          <img src={bubble4}></img>
        </span>
        <footer id="footer">
          <div className="copyright">
            <p>
              {" "}
              Copyright © 2023, Created by <span>ProvyLense</span>
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}

export default LandingPage;
