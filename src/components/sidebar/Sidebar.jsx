import React from "react";
import "./sidebar.scss";
function Sidebar({ active, setActive }) {
  const steps = ["Your info", "Select plan", "Add-ons", "Summary"];
  return (
    <aside>
      {steps.map((step, i) => {
        return (
          <div
            className={`step ${
              active === i + 1 || (i === 3 && active === i + 2) ? "active" : ""
            }`}
            key={i}
          >
            <span className="step-number">{i + 1}</span>
            <div className="text-box">
              <span>Step {i + 1}</span>
              <span>{step}</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
}

export default Sidebar;
