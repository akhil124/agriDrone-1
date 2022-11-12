import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { StepsProvider } from "../components/Context";
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <StepsProvider>
        <Component {...pageProps} />
      </StepsProvider>
    </SessionProvider>
  );
}

export default MyApp;
