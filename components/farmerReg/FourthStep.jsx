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
  fullName,
  email,
  birthday,
  gender,
  phoneNumber,
  farmName,
  farmLandType,
  farmAddress,
  farmCity,
  farmCountry,
  farmZipCode,
  cardName,
  cardNumber,

  updateFields,
}) {
  const isError = () => false;

  return (
    <>
      <h2 className="text-3xl text-[color:var(--primary)] font-semibold mb-4">
        Review
      </h2>
      <div className="text-2xl text-[color:var(--primary)] font-semibold mb-10">
        <p className="mb-4">Farmer Information</p>
        <p className="text-lg mb-2">
          Name: <span className="text-md font-normal">{fullName}</span>
        </p>
        <p className="text-lg mb-2">
          Email: <span className="text-md font-normal">{email}</span>
        </p>
        <p className="text-lg mb-2">
          Phone Number:{" "}
          <span className="text-md font-normal">{phoneNumber}</span>
        </p>
        <p className="text-lg mb-2">
          Gender: <span className="text-md font-normal">{gender}</span>
        </p>
        <p className="text-lg mb-2">
          DOB: <span className="text-md font-normal">{birthday}</span>
        </p>
      </div>
      <div className="text-2xl text-[color:var(--primary)] font-semibold">
        <p className="mb-4">Farm Information</p>
        <p className="text-lg mb-2">
          Farm Name: <span className="text-md font-normal">{farmName}</span>
        </p>
        <p className="text-lg mb-2">
          Plot Type: <span className="text-md font-normal">{farmLandType}</span>
        </p>
        <p className="text-lg mb-2">
          Address: <span className="text-md font-normal">{farmAddress}</span>
        </p>
        <p className="text-lg mb-2">
          City: <span className="text-md font-normal">{farmCity}</span>
        </p>
        <p className="text-lg mb-2">
          Country: <span className="text-md font-normal">{farmCountry}</span>
        </p>
      </div>
    </>
  );
}
