import React from "react";
import "./StepThree.scss";
const StepThree = ({ setActive }) => {
  localStorage.setItem("additionlServices", "[]");

  const servicesSet = new Set();
  const handleChange = (e) => {
    if (e.target.checked) {
      servicesSet.add(e.target.id);
    } else {
      servicesSet.delete(e.target.id);
    }
    localStorage.setItem("additionlServices", JSON.stringify([...servicesSet]));
    window.onbeforeunload = function () {
      localStorage.removeItem("additionlServices");
    };
  };
  const handleBack = () => {
    setActive(2);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(4);
  };
  return (
    <section className="step-three">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="multi">
          <input type="checkbox" id="multi" onChange={handleChange} />
          <div className="text">
            <span className="title">Online service</span>
            <span className="desc">Access to multiplayer games</span>
          </div>
          <span className="price">
            +${JSON.parse(localStorage.getItem("time")) ? "10/yr" : "1/mo"}
          </span>
        </label>
        <label htmlFor="storage">
          <input type="checkbox" id="storage" onChange={handleChange} />
          <div className="text">
            <span className="title">Larger storage</span>
            <span className="desc">Extra 1TB of cloud save</span>
          </div>
          <span className="price">
            +${JSON.parse(localStorage.getItem("time")) ? "20/yr" : "2/mo"}
          </span>
        </label>
        <label htmlFor="custom">
          <input type="checkbox" id="custom" onChange={handleChange} />
          <div className="text">
            <span className="title">Customizable Profile</span>
            <span className="desc">Custom theme on your profile</span>
          </div>
          <span className="price">
            +${JSON.parse(localStorage.getItem("time")) ? "20/yr" : "2/mo"}
          </span>
        </label>
        <div className="btns">
          <span onClick={handleBack}>Go Back</span>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </section>
  );
};

export default StepThree;
