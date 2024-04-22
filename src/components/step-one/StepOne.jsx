import React, { useEffect, useRef } from "react";
import "./StepOne.scss";
function StepOne({ setActive }) {
  const formRef = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    const inputs = formRef.current.querySelectorAll("input");
    formRef.current.onsubmit = (e) => {
      let isValid = true;
      e.preventDefault();
      for (const input of inputs) {
        if (input.value === "") {
          input.nextSibling.style.display = "block";
          input.style.borderColor = "red";
          isValid = false;
          break;
        } else {
          input.nextSibling.style.display = "none";
          input.style.borderColor = "hsl(229, 24%, 87%)";
          isValid = true;
        }
      }
      if (isValid) {
        setActive(2);
      }
    };
  }, []);
  return (
    <section className="step-one">
      <h2> Personal info</h2>
      <p> Please provide your name, email address, and phone number.</p>
      <form ref={formRef}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Stephen King" />
        <span>This Field Is Requierd</span>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <span>This Field Is Requierd</span>
        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
        <span>This Field Is Requierd</span>
        <button type="submit" ref={btnRef}>
          Next Step
        </button>
      </form>
    </section>
  );
}

export default StepOne;
