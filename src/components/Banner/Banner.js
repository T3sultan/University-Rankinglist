import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <MenuBar></MenuBar>
          <div className="col-12">
            <h4 className="title">
              The Best Learing Institution <br /> 

            </h4>
            <h1 className="university">UNIVERSITY RANKING LIST OF BANGLADESH</h1>
            
            <button className="mt-3 about-btn">READ MORE</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
