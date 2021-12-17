import React from "react";
import "./HeaderBanner.css";
import nature from "../../images/nature.jpg";

const HeaderBanner = () => {
  return (
    <div
      style={{ backgroundColor: "var(--secondary-color)", paddingTop: "20px" }}
    >
      <h2
        style={{
          fontSize: "2.8vw",
          fontWeight: "700",
          fontFamily: "Lora",
          textAlign: "center",
          color: "var(--text-color)",
        }}
      >
        BLOG
      </h2>
      <img className="homeBannerImg" src={nature} alt="" />
    </div>
  );
};

export default HeaderBanner;
