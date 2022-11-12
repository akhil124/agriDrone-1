import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { AppContext } from "../Context";

export default function SecondStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const {
    farmName,
    farmLandType,
    farmAddress,
    farmCity,
    farmCountry,
    farmZipCode,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        farmName,
        farmLandType,
        farmAddress,
        farmCity,
        farmCountry,
        farmZipCode,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      farmName,
      farmLandType,
      farmAddress,
      farmCity,
      farmCountry,
      farmZipCode,
    ]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            label="Name"
            name="farmName"
            value={farmName.value}
            onChange={handleChange}
            error={!!farmName.error}
            helperText={farmName.error}
            required={farmName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            label="Address"
            name="farmAddress"
            value={farmAddress.value}
            onChange={handleChange}
            error={!!farmAddress.error}
            helperText={farmAddress.error}
            required={farmAddress.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            label="City"
            name="farmCity"
            value={farmCity.value}
            onChange={handleChange}
            error={!!farmCity.error}
            helperText={farmCity.error}
            required={farmCity.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            label="Country"
            name="farmCountry"
            value={farmCountry.value}
            onChange={handleChange}
            error={!!farmCountry.error}
            helperText={farmCountry.error}
            required={farmCountry.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            label="Zip Code"
            name="farmZipCode"
            value={farmZipCode.value}
            onChange={handleChange}
            error={!!farmZipCode.error}
            helperText={farmZipCode.error}
            required={farmZipCode.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            margin={margin}
            fullWidth
            label="Farm Land Type"
            name="farmLandType"
            value={farmLandType.value}
            onChange={handleChange}
            error={!!farmZipCode.error}
            helperText={farmZipCode.error}
            required={farmZipCode.required}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
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
