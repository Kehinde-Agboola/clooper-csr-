import React from "react";
import shelter from ".././img/shelter.svg";
import Box from "../Box/Box";
import "./shelter.css";
const Shelter = () => {
  return (
    <>
      <section>
        <div className="md:flex md:justify-between">
          <div className="impact__img">
            <img src={shelter} alt="" />
          </div>
          <div className="impact__word max-w-[65%]">
            <h1 className="text-2xl text-[#000000] font-bold">Shelter</h1>

            <p>
              Shelter exists to defend the right to a safe home and fight the
              devastating impact the housing emergency has on people and
              society. They help people through advice, support and campaigning.
            </p>
            <div>
              <p className="text-[#000000] font-bold pt-5">
                Giving back activities
              </p>
              <div className="md:grid md:grid-cols-2 gap-[1rem]">
                <Box />
                <Box />
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

export default Shelter;
