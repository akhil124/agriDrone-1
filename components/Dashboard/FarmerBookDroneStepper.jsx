import { Button } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useMultistepForm } from "../../hooks/useMultiForm";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useRouter } from "next/router";
import axios from "axios";
import StepOne from "./FarmerDroneSteps/StepOne";
import StepTwo from "./FarmerDroneSteps/StepTwo";
import StepThree from "./FarmerDroneSteps/StepThree";
import StepFour from "./FarmerDroneSteps/StepFour";
import StepFive from "./FarmerDroneSteps/StepFive";
import StepSix from "./FarmerDroneSteps/StepSix";
import StepSeven from "./FarmerDroneSteps/StepSeven";
import { useSession } from "next-auth/react";

const INITIAL_DATA = {
  farm: "3671 Old Toll Road, Mariposa, CA 95338",
  farmLand: "",
  farmType: "",
  selectedDrone: {
    droneID: "",
  },
  cardDetails: {
    cardName: "",
    cardNumber: "",
    exp: "",
    cvv: "",
  },
  flightDetails: {
    startDate: "",
    endDate: "",
    duration: "",
    pilotID: "6371068b7f7017edb5859ade",
  },
};

function FarmerStepper({ session }) {
  // const { data: session, status } = useSession();
  // if (status === "loading") return <>Loading</>;

  const router = useRouter();
  const [data, setData] = useState(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(0);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <StepOne {...data} updateFields={updateFields} />,
      <StepTwo {...data} updateFields={updateFields} session={session} />,
      <StepThree {...data} updateFields={updateFields} />,
      <StepFour {...data} updateFields={updateFields} />,
      <StepFive {...data} updateFields={updateFields} />,
      <StepSix {...data} updateFields={updateFields} />,
      <StepSeven {...data} updateFields={updateFields} />,
    ]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    if (isLoading) return;
    setIsLoading(true);
    console.log(data.flightDetails);
    const updatedInfo = {
      ...data,
      farmType: data.farmType.split("_")[1],
      farmLand: data.farmLand.split("_")[0],
    };
    const bookingInfo = {
      flightDetails: data.flightDetails,
      pilotID: data.flightDetails.pilotID,
      farmDetails: {
        farm: data.farm,
        farmType: data.farmType.split("_")[1],
        farmLand: data.farmLand.split("_")[0],
      },
    };
    const booking = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}api/pilot/booking`,
      {
        email: session.user.email,
        booking: bookingInfo,
      }
    );

    const order = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}api/farmer/bookDrone`,
      {
        email: session.user.email,
        booking: updatedInfo,
      }
    );
    setIsLoading(false);
    router.push("/");
  }
  const labels = ["one", "two", "three", "four", "five", "six", "seven"];
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        {/* <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div> */}
        <Stepper activeStep={currentStepIndex} sx={{ py: 3 }} alternativeLabel>
          {labels.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "space-between",
          }}
        >
          {!isFirstStep ? (
            <Button type="button" onClick={back}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          <Button
            className="bg-[color:var(--primary)]"
            variant="contained"
            color="primary"
            type="submit"
          >
            {isLoading ? "Booking" : isLastStep ? "Finish" : "Next"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FarmerStepper;
