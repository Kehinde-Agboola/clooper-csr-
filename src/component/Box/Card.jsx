import React from "react";
import arrow from ".././img/outward.svg";
import line from ".././img/line.svg";
import red from ".././img/ff.svg";
import manu from ".././img/manu.svg";
import "./Box.css";
const Card = () => {
  return (
    <div className="box__bg">
      <div className="overall__box">
        <div className="main__box">
          <div className="img__bg w-[120%]">
            <img src={manu} alt="" className="" />
          </div>
          <div className="card__box">
            <div className="fund__word">
              <h2 className="font-bold">100 Squats A Day In May!</h2>
              <p className="">
                Our founder Toks Adebiyi and our lead UX/UI designer Sara
                Abodunrin are getting their squats in for the
                #100SquatsADayInMay challenge. This campaign is to raise
                awareness and money for Shelter to put an end to homelessness.
              </p>

              <div className="flex items-center gap-[1rem]">
                <a href="#">Read more</a>
                <img src={line} alt="" />
                <a href="#">View Gallary</a>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="main__box">
          <div className="img__bg w-[120%]">
            <img src={red} alt="" className="" />
          </div>
          <div className="card__box">
            <div className="fund__word">
              <h2 className="font-bold">100 Squats A Day In May!</h2>
              <p className="">
                Our founder Toks Adebiyi and our lead UX/UI designer Sara
                Abodunrin are getting their squats in for the
                #100SquatsADayInMay challenge. This campaign is to raise
                awareness and money for Shelter to put an end to homelessness.
              </p>

              <div className="flex items-center gap-[1rem]">
                <a href="#">Read more</a>
                <img src={line} alt="" />
                <a href="#">View Gallary</a>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
