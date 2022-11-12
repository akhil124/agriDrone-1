import React, { useEffect } from "react";
import Layout from "../layout/navbarLayout";
import styles from "../styles/Form.module.css";
import { getSession } from "next-auth/react";
import FarmerInfoForm from "../components/FarmerInfoForm";
import FarmerStepper from "../components/FarmerStepper";
import axios from "axios";
const farmer = ({ data }) => {
  console.log(data.message.email);

  return (
    <Layout>
      <div className="mt-8">
        <FarmerStepper />
      </div>
    </Layout>
  );
};

export default farmer;

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
