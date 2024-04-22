import React, { useState, useEffect, useRef } from "react";
import "./StepFour.scss";
const StepFour = ({ setActive }) => {
  const handleClick = () => {
    setActive(5);
  };
  const handleChange = () => {
    setActive(2);
  };
  const handleBack = () => {
    setActive(3);
  };
  let time = JSON.parse(localStorage.getItem("time")) ? "yearly" : "monthly";
  const [additions, setAdditions] = useState([
    ...JSON.parse(localStorage.getItem("additionlServices")),
  ]);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(0);
    [...document.getElementsByClassName("price")].forEach((ele) => {
      setPrice((price) => price + Number(ele.innerText.match(/[0-9]+/g)[0]));
    });
  }, []);
  const prices = {
    yearly: {
      arcade: "$90/yr",
      advance: "$120/yr",
      pro: "$150/yr",
    },
    monthly: {
      arcade: "$9/mo",
      advance: "$12/mo",
      pro: "$15/mo",
    },
  };
  const services = {
    multi: {
      name: "Online service",
      monthly: "+$1/mo",
      yearly: "+$10/yr",
    },
    storage: {
      name: "Larger storage",
      monthly: "+$2/mo",
      yearly: "+$20/yr",
    },
    custom: {
      name: "Customizable Profile",
      monthly: "+$2/mo",
      yearly: "+$20/yr",
    },
  };
  return (
    <section className="step-four">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <main className="checkout">
        <div className="summary-header">
          <div className="title">
            <h3>
              {localStorage.getItem("plan")} ({time})
            </h3>
            <span className="change-btn" onClick={handleChange}>
              change
            </span>
          </div>
          <div className="price">
            {prices[time][localStorage.getItem("plan")]}
          </div>
        </div>
        {additions.map((addition, i) => (
          <div className="service" key={i}>
            <span className="name">{services[addition]["name"]}</span>
            <span className="price">{services[addition][time]}</span>
          </div>
        ))}
      </main>
      <div className="total">
        <span className="text">
          Total (per
          {JSON.parse(localStorage.getItem("time")) ? " year" : " month"})
        </span>
        <span className="total-price">
          +$
          {JSON.parse(localStorage.getItem("time"))
            ? `${price}/yr`
            : `${price}/mo`}
        </span>
      </div>
      <div className="btns">
        <span onClick={handleBack }>Go Back</span>
        <button type="submit" onClick={handleClick}>
          confirm
        </button>
      </div>
    </section>
  );
};

export default StepFour;
