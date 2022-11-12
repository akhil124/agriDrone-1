import React from "react";
import Layout from "../layout/navbarLayout";
import styles from "../styles/Form.module.css";
import { getSession } from "next-auth/react";
import FarmerInfoForm from "../components/FarmerInfoForm";

const farmer = () => {
  return (
    <Layout>
      <h1 className="text-3xl text-[color:var(--primary)] font-semibold">
        Farmer Information
      </h1>
      <div className="mt-8">
        <FarmerInfoForm />
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
