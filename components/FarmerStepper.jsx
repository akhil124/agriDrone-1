import React from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Form.module.css";
import { TextField, Select, MenuItem, InputLabel } from "@mui/material";
const onSubmit = (data) => {
  // setFormData(data);
};
const stepOne = (setFormData) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit(setFormData))}>
        <div className="grid grid-cols-2 gap-8">
          <TextField
            required={true}
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <TextField
            required={true}
            placeholder="Phone Number"
            {...register("phoneNumber", { required: true })}
          />
          <TextField
            required={true}
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <TextField
            required={true}
            placeholder="Birthday"
            {...register("birthday", { required: true })}
          />

          <Select
            defaultValue={"Man"}
            {...register("gender", { required: true })}
          >
            <MenuItem value={"Man"}>Man</MenuItem>
            <MenuItem value={"Woman"}>Woman</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </div>
      </form>
    </div>
  );
};
const FarmerStepper = ({ activeStep, setFormData }) => {
  if (activeStep === 1) return stepOne(setFormData);
  else return <div>OKAY</div>;
};

export default FarmerStepper;
