import React from "react";
import "./fund.css";
import Card from "../Box/Card";
const Fund = () => {
  return (
    <div class="fund__bg">
      <div class="fund">
        <div class="overlay">
          <h1>Fundrasing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      </div>
      <section class="fund__boxes">
        <Card />
      </section>
      <section>
        <div class="class text-white flex items-center gap-3">
          <p>30 Activities till date</p>
          <span>
            <a href="#"> Sell all</a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Fund;
