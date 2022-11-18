import React from "react";
import "./award.css";
import arrow from ".././img/outward.svg";
import line from ".././img/line.svg";
import red from ".././img/ff.svg";
import manu from ".././img/bb.svg";
const Award = () => {
  return (
    <section className="mt-[5rem]">
      <div className="md:flex">
        <div className="max-w-[70%]">
          <h1 className="text-4xl font-bold">
            Our <br /> Awards
          </h1>
          <p className="max-w-[65%] py-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="footer__main__box bg-white max-w-[650px]">
          <div className="tech__img ">
            <img src={manu} alt="" className="" />
          </div>
          <div className="card__box">
            <div className="fund__word">
              <div className="flex items-center justify-between pr-8 pb-5 font-[2rem]">
                <a href="#" className="font-[5rem]">
                  Norminated
                </a>
                <img src={arrow} alt="" />
              </div>
              <h2 className="font-bold text-[1.3rem] max-w-[65%]">
                Excellence in Diversity & Inclusion Award!
              </h2>
              <p className="max-w-[75%]">
                As a company that has consciously worked to create a diverse
                team and a culture that is inclusive and supported by active
                policies and practices.
              </p>
              <p className="pt-4 font-bold">- Novemeber 18th, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
