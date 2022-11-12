import React from "react";
import "./goal.css";
import img__1 from "./../img/1.svg";
import img__2 from "./../img/2.svg";
import img__3 from "./../img/3.svg";
import img__4 from "./../img/4.svg";
import img__5 from "./../img/5.svg";
import img__6 from "./../img/6.svg";
import img__7 from "./../img/7.svg";
import img__8 from "./../img/8.svg";
import img__9 from "./../img/9.svg";
import img__10 from "./../img/10.svg";
import img__11 from "./../img/11.svg";
import img__12 from "./../img/12.svg";
import img__13 from "./../img/13.svg";
import img__14 from "./../img/14.svg";
import img__15 from "./../img/15.svg";
import img__16 from "./../img/16.svg";
import img__17 from "./../img/17.svg";

const Goal = () => {
  return (
    <>
      <section>
        <div>
          <div className="md:flex md:flex-row align-center flex flex-col gap-10">
            <div className="font-bold text-2xl">
              <h1>
                The UN <br /> Sustainable <br />
                Development Goals
              </h1>
            </div>

            <div className="pt-[2.8rem]">
              <h3>
                Our Commitment To <br />
                Corporate Sustainability
              </h3>
            </div>
            <div className="goal__but pt-[2.8rem] font-bold">
              <button> Learn More</button>
            </div>
          </div>
        </div>

        <div className="goals__img md:grid md:grid-cols-6 sm:grid sm:grid-cols-3 grid grid-cols-2 gap-[1rem] mt-10">
          <img src={img__1} alt="" />
          <img src={img__2} alt="" />
          <img src={img__3} alt="" />
          <img src={img__4} alt="" />
          <img src={img__5} alt="" />
          <img src={img__6} alt="" />
          <img src={img__7} alt="" />
          <img src={img__8} alt="" />
          <img src={img__9} alt="" />
          <img src={img__10} alt="" />
          <img src={img__11} alt="" />
          <img src={img__12} alt="" />
          <img src={img__13} alt="" />
          <img src={img__14} alt="" />
          <img src={img__15} alt="" />
          <img src={img__16} alt="" />
          <img src={img__17} alt="" />
        </div>
      </section>
    </>
  );
};

export default Goal;
