import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { AppContext } from "../Context";

export default function SecondStep({
  farmName,
  farmLandType,
  farmAddress,
  farmCity,
  farmCountry,
  farmZipCode,
  updateFields,
}) {
  const isError = () => false;

  return (
    <>
      <h2 className="text-3xl text-[color:var(--primary)] font-semibold mb-4">
        Farm Information
      </h2>
      <p className="text-md font-thin text-gray-600 mb-4">
        Fill in the data for your profile. It will only take a couple of
        minutes.
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            // margin={margin}
            fullWidth
            label="Name"
            name="farmName"
            value={farmName.value}
            onChange={(e) => updateFields({ farmName: e.target.value })}
            error={!!farmName.error}
            helperText={farmName.error}
            required={farmName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            // margin={margin}
            fullWidth
            label="Farm Land Type"
            name="farmLandType"
            value={farmLandType.value}
            onChange={(e) => updateFields({ farmZipCode: e.target.value })}
            error={!!farmZipCode.error}
            helperText={farmZipCode.error}
            required={farmZipCode.required}
          />

          {/* <TextField
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Plot type"
            name="plotType"
            value={somethingElse.value}
            onChange={e => updateFields({x:e.target.value})}
            error={!!farmZipCode.error}
            helperText={farmZipCode.error}
            required={farmZipCode.required}
          >
            <option value="liveStock">Live Stock</option>
            <option value="crops">Crops</option>
            <option value="fruits">Fruits</option>
            <option value="nursery">Nursery</option>
          </TextField> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            // margin={margin}
            fullWidth
            label="Address"
            name="farmAddress"
            value={farmAddress.value}
            onChange={(e) => updateFields({ farmAddress: e.target.value })}
            error={!!farmAddress.error}
            helperText={farmAddress.error}
            required={farmAddress.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            // margin={margin}
            fullWidth
            label="City"
            name="farmCity"
            value={farmCity.value}
            onChange={(e) => updateFields({ farmCity: e.target.value })}
            error={!!farmCity.error}
            helperText={farmCity.error}
            required={farmCity.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            // margin={margin}
            fullWidth
            label="Country"
            name="farmCountry"
            value={farmCountry.value}
            onChange={(e) => updateFields({ farmCountry: e.target.value })}
            error={!!farmCountry.error}
            helperText={farmCountry.error}
            required={farmCountry.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // variant={variant}
            // margin={margin}
            fullWidth
            label="Zip Code"
            name="farmZipCode"
            value={farmZipCode.value}
            onChange={(e) => updateFields({ farmZipCode: e.target.value })}
            error={!!farmZipCode.error}
            helperText={farmZipCode.error}
            required={farmZipCode.required}
          />
        </Grid>
      </Grid>
    </>
  );
}
