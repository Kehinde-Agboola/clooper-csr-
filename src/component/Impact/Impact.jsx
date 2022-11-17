import React from "react";
import impact from ".././img/impact.svg";
const Impact = () => {
  return (
    <>
      <section>
        <div className="md:flex md:justify-between">
          <div className="impact__img">
            <img src={impact} alt="" />
          </div>
          <div className="impact__word max-w-[65%]">
            <h1 className="text-2xl text-[#000000] font-bold">
              Did you know that 67000 and 15000 children are affected by
              homelessness in the UK alone?
            </h1>

            <p>
              To help end homelessness and extreme poverty, the team at Clooper
              selected four charities closely aligned with our purpose
              statement. Clooper's founder Toks has previously volunteered for
              Shelter to feed the homeless in North Finchley, whilst our
              co-founder Matt selected The Passage at the request of his 6-year
              old daughter, who chose the charity to donate to for her annual
              “Christmas Lights Display".
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
