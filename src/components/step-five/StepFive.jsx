import React from "react";
import "./StepFive.scss";
const StepFive = () => {
  return (
    <section className="step-five">
      <img src={require("../../assets/images/icon-thank-you.svg").default} alt="thank" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default StepFive;
