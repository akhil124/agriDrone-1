import Image from "next/image";
import React from "react";

const FarmerDashBoardWelcome = ({ user }) => {
  return (
    <div className="flex mt-4 justify-between items-center">
      <section>
        <p className="text-3xl font-semibold text-[color:var(--primary)]">
          Welcome, {user.name}!
        </p>
        <p className="text-md text-gray-500">
          Check the status of your drone service bookings here.
        </p>
      </section>
      <div className="relative w-[180px] h-[180px]">
        <Image src="/assets/farmer.png" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default FarmerDashBoardWelcome;
