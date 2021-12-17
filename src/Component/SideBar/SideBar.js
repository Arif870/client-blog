import React from "react";

import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="mb-5">
        <h4
          style={{
            borderBottom: "2px solid var(--primary-color)",
            borderTop: "2px solid var(--primary-color)",
            padding: "10px 0px",
            color: "var(--primary-color)",
            fontFamily: "var( --primaryfont-family)",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          ABOUT ME
        </h4>
        <img
          className="sideImg"
          src="https://www.wecarerecruitment.com.au/wp-content/uploads/2019/07/nature-1.jpg"
          alt="aboutme"
        />
        <p
          style={{
            fontFamily: "var( --primaryfont-family)",
            textAlign: "center",
            color: "var(--text-color)",
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          dolores quae ullam facere nihil non illo nobis cumque, error earum
          optio, quaerat ad consequuntur at eum necessitatibus esse asperiores
          quas?
        </p>
      </div>
      {/* ============================ */}
      <div>
        <h4
          style={{
            borderBottom: "2px solid var(--primary-color)",
            borderTop: "2px solid var(--primary-color)",
            padding: "10px 0px",
            color: "var(--primary-color)",
            fontFamily: "var( --primaryfont-family)",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          CATEGORIES
        </h4>
        <div>
          <ul className="sideArea">
            <li className="sideItem">
              <a href="https://www.youtube.com/">Fashion</a>
            </li>
            <li className="sideItem">
              <a href="https://www.youtube.com/">Food</a>
            </li>
            <li className="sideItem">
              <a href="https://www.youtube.com/">Technology</a>
            </li>
            <li className="sideItem">
              <a href="https://www.youtube.com/">Sports</a>
            </li>
            <li className="sideItem">
              <a href="https://www.youtube.com/">Travel</a>
            </li>
            <li className="sideItem">
              <a href="https://www.youtube.com/">Latest</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
