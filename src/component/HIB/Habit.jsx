import React from "react";
import hab from ".././img/hab.svg";
import Bus from "../Box/Bus";
const Habit = () => {
  return (
    <>
      <section>
        <div className="md:flex md:justify-between">
          <div className="impact__img">
            <img src={hab} alt="" />
          </div>
          <div className="impact__word max-w-[65%]">
            <h1 className="text-2xl text-[#000000] font-bold">
              Homelessness Action in Barnet
            </h1>

            <p>
              HAB's vision is a society where all people have a safe space to
              call home and are valued equally whatever their personal
              circumstances. They help people who are vulnerably-housed and
              newly housed stay housed, and work with people currently homeless
              and sleeping rough.
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
                <Bus />
                <Bus />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Habit;
