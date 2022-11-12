import React from "react";
import tree from "../img/tree.svg";
import "./homeles.css";
const Homeless = () => {
  return (
    <div className="tree__section">
      <section>
        <div className="tree__section md:flex">
          <div>
            <h1 className="text-3xl max-w-[90%] font-bold">
              Every booking made with Clooper will go towards feeding a person
              affected by homelessness and planting a tree.
            </h1>
            <p className="py-10">
              At Clooper, we believe that our work must make our society and
              environment better or there is no point. Our purpose is to create
              a world where everyone has a place they can be proud to call home
              and live joyfully.
            </p>
            <p>
              Weather-related disasters already force an average of 21.8 million
              people to flee their homes every year, according to the Internal
              Displacement Monitoring Centre. Vulnerable populations are more
              likely to be displaced by climate change impacts and remain
              displaced for a longer time.
            </p>
          </div>
          <div className="self-end w-[190%] -mr-[12rem]">
            <img src={tree} alt="" className="w-[100%] block mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homeless;
