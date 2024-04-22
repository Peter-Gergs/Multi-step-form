import {  useState } from "react";
import "./App.scss";
import "./assets/fonts/Ubuntu-Bold.ttf";
import "./assets/fonts/Ubuntu-Medium.ttf";
import "./assets/fonts/Ubuntu-Regular.ttf";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import StepOne from "./components/step-one/StepOne.jsx";
import StepTwo from "./components/step-two/StepTwo.jsx";
import StepThree from "./components/step-three/StepThree.jsx";
import StepFour from "./components/step-four/StepFour.jsx";
import StepFive from "./components/step-five/StepFive.jsx";
function App() {
  const [active, setActive] = useState(1);
  return (
    <div className="app">
      <Sidebar active={active} setActive={setActive} />
      {active === 1 && <StepOne setActive={setActive} />}
      {active === 2 && <StepTwo setActive={setActive} />}
      {active === 3 && <StepThree setActive={setActive} />}
      {active === 4 && <StepFour setActive={setActive} />}
      {active === 5 && <StepFive setActive={setActive} />}
    </div>
  );
}

export default App;
