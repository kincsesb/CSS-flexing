import React from "react";
import bjjPng from "../images/bjj.png";

function SomeInfo() {
  return (
    <div className="someinfo">
    <div className="line-4"></div>
      <div className="someinfo-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a arcu eu nisi consectetur commodo.
          Sed eu dignissim neque. Vivamus lacinia ipsum non orci efficitur posuere. Sed convallis sem eu erat iaculis lacinia.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum, lorem vitae lobortis eleifend,
          mauris elit luctus sem, a malesuada lectus turpis sed lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum elementum, lorem vitae lobortis eleifend, mauris elit luctus sem, a malesuada lectus turpis sed lectus.
        </p>
      </div>
      <div className="someinfo-image">
        <img src={bjjPng} alt="Bjj" />
      </div>
      <div className="line-5"></div>
    </div>
  );
}

export default SomeInfo;
