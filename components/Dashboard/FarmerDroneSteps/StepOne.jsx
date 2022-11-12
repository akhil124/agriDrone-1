import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
const StepOne = ({ farmLand, droneId, updateFields }) => {
  return (
    <div>
      <h1 className="font-semibold text-3xl text-[color:var(--primary)]">
        Step 1: Farmland Selection
      </h1>
      <p className="text-md text-gray-600 mt-4">
        Please select the farmland you would like your drone service on.
      </p>
      <div>
        <div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={farmLand}
              onChange={(e) => updateFields({ farmLand: e.target.value })}
            >
              <FormControlLabel
                value="West Plot A"
                control={<Radio />}
                label="West Plot A: LiveStock"
              />
              <FormControlLabel
                value="West Plot B"
                control={<Radio />}
                label="West Plot B: Crop"
              />
              <FormControlLabel
                value="North Plot B"
                control={<Radio />}
                label="North Plot B: Nursery"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
