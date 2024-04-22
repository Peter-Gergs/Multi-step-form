import React, { useEffect, useRef, useState } from "react";
import "./StepTwo.scss";
function StepTwo({ setActive }) {
  const timeBtn = useRef(null);
  const [multiplication, setMultiplication] = useState(1);
  const checkboxRef = useRef(null);
  const handleBack = () => {
    setActive(1);
  };
  useEffect(() => {
    if (!localStorage.getItem("plan")) {
      document.getElementById("arcade").setAttribute("checked", "");
    } else {
      document
        .getElementById(localStorage.getItem("plan"))
        .setAttribute("checked", "");
    }
    if (JSON.parse(localStorage.getItem("time"))) {
      setMultiplication(10);
      checkboxRef.current.setAttribute("checked", "");
      if (window.matchMedia("(max-width:767px)").matches) {
        timeBtn.current.style.top = "540px";
      } else {
        timeBtn.current.style.top = "350px";
      }
    } else {
      if (window.matchMedia("(max-width:767px)").matches) {
        timeBtn.current.style.top = "490px";
      } else {
        timeBtn.current.style.top = "320px";
      }
    }
  }, [multiplication]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(3);
  };
  const handleChange = () => {
    if (multiplication === 1) {
      setMultiplication(10);
      checkboxRef.current.setAttribute("checked", "");
    }
    if (multiplication === 10) {
      setMultiplication(1);
      checkboxRef.current.removeAttribute("checked");
    }
    if (Object.keys(localStorage).indexOf("time") !== -1) {
      localStorage.setItem("time", !JSON.parse(localStorage.getItem("time")));
    } else {
      localStorage.setItem("time", true);
      setMultiplication(10);
    }
  };
  return (
    <section className="step-two">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="arcade">
          <img
            src={require("../../assets/images/icon-arcade.svg").default}
            alt="arcade"
          />
          <div className="text">
            <h6>Arcade</h6>
            <span>
              ${9 * multiplication}/
              {JSON.parse(localStorage.getItem("time")) ? "yr" : "mo"}
            </span>
            {JSON.parse(localStorage.getItem("time")) ? (
              <span>2 Months Free</span>
            ) : null}
          </div>
        </label>
        <input
          type="radio"
          name="plan"
          id="arcade"
          onChange={(e) => {
            localStorage.setItem("plan", e.target.id);
          }}
        />
        <label htmlFor="advance">
          <img
            src={require("../../assets/images/icon-advanced.svg").default}
            alt="advanced"
          />
          <div className="text">
            <h6>Advanced</h6>
            <span>
              ${12 * multiplication}
              {JSON.parse(localStorage.getItem("time")) ? "yr" : "mo"}
            </span>
            {JSON.parse(localStorage.getItem("time")) ? (
              <span>2 Months Free</span>
            ) : null}
          </div>
        </label>
        <input
          type="radio"
          name="plan"
          id="advance"
          onChange={(e) => {
            localStorage.setItem("plan", e.target.id);
          }}
        />
        <label htmlFor="pro">
          <img
            src={require("../../assets/images/icon-pro.svg").default}
            alt="pro"
          />
          <div className="text">
            <h6>Pro</h6>
            <span>
              ${15 * multiplication}/
              {JSON.parse(localStorage.getItem("time")) ? "yr" : "mo"}
            </span>
            {JSON.parse(localStorage.getItem("time")) ? (
              <span>2 Months Free</span>
            ) : null}
          </div>
        </label>
        <input
          type="radio"
          name="plan"
          id="pro"
          onChange={(e) => {
            localStorage.setItem("plan", e.target.id);
          }}
        />
        <label ref={timeBtn} onClick={() => handleChange()}>
          <span>Monthly</span>
          <div className="btn-container">
            <div className="ball"></div>
          </div>
          <span>Yearly</span>
        </label>
        <input type="checkbox" id="time" ref={checkboxRef} />
        <div className="btns">
          <span onClick={handleBack}>Go Back</span>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </section>
  );
}

export default StepTwo;
