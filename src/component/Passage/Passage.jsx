import React from "react";
import red from ".././img/red.svg";
import "./passage.css";
import Box from "../Box/Box";
const Passage = () => {
  return (
    <>
      <section>
        <div className="md:flex md:justify-between">
          <div className="impact__img">
            <img src={red} alt="" />
          </div>
          <div className="impact__word max-w-[65%]">
            <h1 className="text-2xl text-[#000000] font-bold">The Passage</h1>

            <p>
              The Passage offers a wide range of services, all year round, to
              meet the needs of homeless and vulnerable people. These services
              help people address the issues that have contributed to them
              becoming homeless, and enable them to move on to live safe, happy
              and fulfilling lives.
            </p>
            <div>
              <div className="md:flex">
                <p className="text-[#000000] font-bold pt-5">
                  Giving back activities
                </p>
                <div className="self-end ml-4">
                  <a href="#" className="underline text">
                    Read more
                  </a>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 gap-[1rem]">
                <Box />
                <Box />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Passage;
