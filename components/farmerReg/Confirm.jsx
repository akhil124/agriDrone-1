import React, { useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";

export default function Confirm() {
  const { formValues, handleBack, handleNext } = useContext(AppContext);
  const {
    fullName,
    email,
    gender,
    phoneNumber,
    birthday,
    farmName,
    farmAddress,
    farmCity,
    farmCountry,
    farmZipCode,
    farmLandType,
  } = formValues;

  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {};

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value,
      };
      return form;
    });
    // Do whatever with the values
    console.log({
      basicInfo: {
        name: fullName.value,
        email: email.value,
        gender: gender.value,
        phoneNumber: phoneNumber.value,
        birthday: birthday.value,
      },
      farmInfo: {
        name: farmName.value,
        address: farmAddress.value,
        city: farmCity.value,
        country: farmCountry.value,
        zipCode: farmZipCode.value,
        farmLandType: farmLandType.value,
      },
    });
    // Show last component or success message
    handleNext();
  };

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary="Full Name"
            secondary={fullName?.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Email Address"
            secondary={email.value || "Not Provided"}
          />
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemText
            primary="Phone Number"
            secondary={phoneNumber.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Gender"
            secondary={gender.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Date of birth"
            secondary={birthday.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Farm Name"
            secondary={farmName.value || "Not Provided"}
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="Farm land type"
            secondary={farmLandType.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Farm Address"
            secondary={farmAddress.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Farm City"
            secondary={farmCity.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Farm country"
            secondary={farmCountry.value || "Not Provided"}
          />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemText
            primary="Farm Zipcode"
            secondary={farmZipCode.value || "Not Provided"}
          />
        </ListItem>
      </List>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button
          className="bg-green-700 text-white hover:text-green-700"
          color="success"
          onClick={handleSubmit}
        >
          Confirm & Continue
        </Button>
      </Box>
    </>
  );
}
