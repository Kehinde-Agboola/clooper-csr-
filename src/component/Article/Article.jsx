import React from "react";
import vec from ".././img/Vector.svg";
import "./articule.css";
const Article = () => {
  return (
    <section>
      <div className="quote___section flex">
        <div>
          <img src={vec} alt="" />
        </div>
        <div className="">
          <blockquote className="max-w-[80%]">
            <h1 className="text-3xl">
              <i>Nearly 400 households become homeless every day in England</i>
            </h1>
            <p className="pt-[1rem]">
              <strong>- Shelter</strong>, 27 Jan 2022
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Article;
