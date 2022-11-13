import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { StepsProvider } from "../components/Context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#1A3447",
      light: "#1A3447",
      dark: "#1A3447",
    },
    secondary: {
      // Purple and green play nicely together.
      main: "#000",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <StepsProvider>
          <Component {...pageProps} />
        </StepsProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
