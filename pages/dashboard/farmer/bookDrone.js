import React from "react";
import { getSession } from "next-auth/react";
import Layout from "../../../layout/farmerDashboardLayout";
const bookDrone = () => {
  return <Layout>bookDrone</Layout>;
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

    return {
      props: { session, data },
    };
  }
}
