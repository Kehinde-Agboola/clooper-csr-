import React from "react";
import vec from ".././img/Vector.svg";
import "./articule.css";
const Articule = () => {
  return (
    <section>
      <div className="quote___section flex">
        <div className="w-[20%]">
          <img src={vec} alt="" className="" />
        </div>
        <div className="">
          <blockquote className="w-[75%]">
            <h1 className="text-2xl">
              <i>
                Like many boroughs in London; Barnet is experiencing an
                overwhelming amount of people that are rough sleeping;
                especially due to the current Covid pandemic as well as the
                overall housing and rent crisis
              </i>
            </h1>
            <p className="pt-[1rem]">
              <strong>- Olamide Adetunji</strong>, Centre Coordinator at
              Homeless Action in Barne
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Articule;
