import React from "react";
import Layout from "../../layout/farmerDashboardLayout";
import FarmerDashBoardWelcome from "../FarmerDashBoardWelcome";
import FarmerBookingsSection from "./FarmerBookingsSection";
const FarmerDashboard = ({ user }) => {
  return (
    <Layout>
      <div className="w-[75%] m-auto">
        <FarmerDashBoardWelcome user={user} />
        <FarmerBookingsSection />
      </div>
    </Layout>
  );
};

export default FarmerDashboard;
