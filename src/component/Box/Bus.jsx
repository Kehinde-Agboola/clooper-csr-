import React from "react";
import arrow from ".././img/outward.svg";
import line from ".././img/line.svg";
import "./Box.css";
const Bus = () => {
  return (
    <section>
      <div className="flex__box">
        <p>Aug 2nd, 2021</p>
        <p>
          Our founder Toks made a donation of much needed water bottles after
          Homeless Action in Barnet was running very low the week after the July
          heatwave. Temperatures over 25 degrees are associated with excess...
        </p>
        <div className="flex items-center gap-[1rem]">
          <a href="#">Read more</a>
          <img src={line} alt="" />
          <a href="#">View Gallary</a>
          <img src={arrow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Bus;
