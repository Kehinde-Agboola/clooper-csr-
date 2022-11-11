import React from "react";
import "./Home.css";
import gen from "./../img/gen.svg";
const Home = () => {
  return (
    <div className="Home">
      <header>
        <div className="home__bg">
          <div className="text-white text-center max-w-[40%] mx-auto relative top-[17rem]">
            <h1 className="md:text-[2rem] font-bold">
              To help make <strong>a world where everyone</strong> has a place
              they can be <strong>proud to call home</strong> and
              <strong> live joyfully</strong>.
            </h1>
            <p className="text-normal md:text-[1rem] underline">Our Purpose</p>
          </div>
        </div>
      </header>
      <section>
        <div className="text-black text-center">
          <h1 className="md:text-4xl max-w-[54%] mx-auto font-bold">
            At Clooper, we believe that our work must make the environment and
            society better or there is no point.
          </h1>
          <div className="max-w-[45%] mx-auto mt-10">
            <p>
              Therefore, we support the Ten Principles of the United Nations
              Global Compact in the areas of <strong>Human Rights</strong>,
              <strong>Labour</strong>, <strong>Environment</strong> , and
              <strong>Anti-Corruption</strong>. By incorporating the Ten
              Principles into our culture, strategies, policies and daily
              operations, we want to make a positive impact to both people and
              the planet through responsible business.
            </p>
            <p className="pt-5">
              Our continuous efforts will help us contribute to United Nations
              goals, including the Sustainable Development Goals.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <p>
              The pandemic has had an adverse effect on people and people’s
              livelihood. For the first time in 20 years, the global rate of
              extreme poverty rose. In 2020, around 124m were pushed back into
              extreme poverty and 101m children fell below the minimum
              proficiency level. Plus, the effects of climate change can already
              be felt around the world, with the global average temperature at
              1.2º Celsius above the pre-industrial baseline.{" "}
            </p>
            <h2>
              Given the urgency to end extreme poverty, inequality and climate
              change by 2030, Clooper is taking part in the UN Global Compact's
              Early Adopter Programme on Communication on Progress.
            </h2>
          </div>
        </div>
        <div>
          <img src={gen} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
