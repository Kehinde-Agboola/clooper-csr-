import React from "react";
import gen from ".././img/gen.svg";
import Bus from "../Box/Bus";
const Genesis = () => {
  return (
    <>
      <section>
        <div className="md:flex md:justify-between">
          <div className="impact__img">
            <img src={gen} alt="" />
          </div>
          <div className="impact__word max-w-[65%]">
            <h1 className="text-2xl text-[#000000] font-bold">
              Genesis House of Freedom Foundation
            </h1>

            <p>
              Genesis House is a Residential Rehabilitation and Resource Centre
              in Lagos, Nigeria. Their personalised solutions provide physical,
              emotional and vocational support to help vulnerable young women
              aged 18-25 years old, who have been sexually abused, exploited and
              trafficked. This helps them get their lives back on track.
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
                <Bus />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Genesis;
