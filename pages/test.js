import React from "react";
import StepForm from "../components/farmerReg/StepForm";
import Layout from "../layout/navbarLayout";
import FarmerStepper from "../components/FarmerStepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#1A3447",
    },
    secondary: {
      // Purple and green play nicely together.
      main: "#000",
    },
  },
});
const test = () => {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <FarmerStepper />
      </ThemeProvider>
    </Layout>
  );
};

export default test;
