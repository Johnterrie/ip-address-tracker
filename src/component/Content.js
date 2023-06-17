import React from "react";
import "./content.css";
// import axios from "axios"


const Content = () => {
  return (
    <main className="content-container">
      <div className="main-div">
        <div>
            <span className="span-container">IP ADDRESS</span>
            <div className="div-container">192.212.174.101</div>
        </div>
        <span className="divider"></span>

        <div>
            <span className="span-container">LOCATION</span>
            <div className="div-container">Brooklyn, NY <br /> 10001</div>
        </div>
        <span className="divider"></span>

        <div>
            <span className="span-container">TIMEZONE</span>
            <div className="div-container">UTC -05:00</div>
        </div>
        <span className="divider"></span>

        <div>
            <span className="span-container">ISP</span>
            <div className="div-container">SpaceX <br /> Starlink</div>
        </div>
      
      </div>
    </main>
  );
};

export default Content;
