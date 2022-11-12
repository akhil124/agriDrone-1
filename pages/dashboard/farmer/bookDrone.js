import React from "react";
import { getSession } from "next-auth/react";
import Layout from "../../../layout/farmerDashboardLayout";
import FarmerBookDroneStepper from "../../../components/Dashboard/FarmerBookDroneStepper";
const bookDrone = () => {
  return (
    <Layout>
      <FarmerBookDroneStepper />
    </Layout>
  );
};

export default bookDrone;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    const res = await fetch(
      `${process.env.HOST}api/user?email=${session.user.email}`
    );
    const data = await res.json();
    if (data.message.role === "pilot") {
      return {
        redirect: {
          destination: "/pilot",
          permanent: false,
        },
      };
    }
    return {
      props: { session, data },
    };
  }
}
