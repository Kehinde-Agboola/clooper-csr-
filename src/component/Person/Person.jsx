import React from "react";
import "./person.css";
import p1 from "./../img/p1.svg";
import p2 from "./../img/p2.svg";
import p3 from "./../img/p3.svg";
// import p4 from "./../img/p4.svg";
import p5 from "./../img/p5.svg";
// import p6 from "./../img/p6.svg";
// import p7 from "./../img/p7.svg";

const Person = () => {
  return (
    <>
      <div className="person__img flex gap-[0.5rem] max-w-[1640px] mx-auto -mt-[6rem]">
        <img src={p1} alt="" />
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p5} alt="" />
      </div>
    </>
  );
};

export default Person;
