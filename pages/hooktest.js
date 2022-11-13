import { FormEvent, useEffect, useState } from "react";
import FirstStep from "../components/farmerReg/FirstStep";
import SecondStep from "../components/farmerReg/SecondStep";
import { useMultistepForm } from "../hooks/useMultiForm";
import initiaalValues from "../lib/initialValues";
const INITIAL_DATA = {
  fullName: "",

  email: "",
  gender: "",
  phoneNumber: "",
  birthday: "",
  // step 2
  farmName: "",
  farmAddress: "",
  farmCity: "",
  farmCountry: "",
  farmZipCode: "",
  farmLandType: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    // console.log(fields.target.value, "FIELDS");
    setData((prev) => {
      return { ...prev, ...fields };
    });
    console.log(data);
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <FirstStep {...data} updateFields={updateFields} />,
      //   <SecondStep {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
  }

  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
        <p>sdasd</p>
      </form>
    </div>
  );
}

export default App;
