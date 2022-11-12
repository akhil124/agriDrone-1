import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } =
    useContext(AppContext);
  const { fullName, email, gender, phoneNumber, birthday } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ fullName, email, gender, phoneNumber, birthday }).some(
        (name) =>
          (formValues[name]?.required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, fullName, email, gender, phoneNumber, birthday]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            label="Full Name"
            name="fullName"
            placeholder="Your first name"
            value={fullName.value}
            onChange={handleChange}
            error={!!fullName.error}
            helperText={fullName.error}
            required={fullName.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email.value}
            onChange={handleChange}
            error={!!email.error}
            helperText={email.error}
            required={email.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            placeholder="Phone Number"
            type="phone"
            value={phoneNumber.value}
            onChange={handleChange}
            error={!!phoneNumber.error}
            helperText={phoneNumber.error}
            required={phoneNumber.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Gender"
            placeholder="Gender"
            name="gender"
            value={gender.value}
            onChange={handleChange}
            error={!!gender.error}
            helperText={gender.error}
            required={gender.required}
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </TextField>
        </Grid>
        {/* Birthday */}
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            label="Date of birth"
            name="birthday"
            type="date"
            defaultValue={birthday?.value}
            onChange={handleChange}
            required={birthday.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          // variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
