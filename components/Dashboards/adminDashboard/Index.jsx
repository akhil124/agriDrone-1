import axios from "axios";
import React, { useState, useEffect } from "react";
import { Chip } from "@mui/material";
const getDrones = async () => {};
function getFrequencies(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (obj[element] !== undefined) {
      obj[element] += 1;
      console.log(obj, "in if");
    } else {
      obj[element] === 1;
      console.log(obj, "in else");
    }
  }
  return obj;
}
const Index = () => {
  const [droneData, setDroneData] = useState({
    total: 0,
    status: {
      active: 0,
      stopped: 0,
      connected: 0,
      registered: 0,
    },
    services: [],
    models: [],
  });
  useEffect(() => {
    axios
      .get(
        "http://ec2-52-203-10-77.compute-1.amazonaws.com/flight_data_collect/get-drones/"
      )
      .then(({ data }) => {
        console.log(data, "DATA");
        setDroneData({
          ...droneData,
          total: data.length,
          models: [
            ...new Set(
              data.map((drone) => `${drone.drone_maker} ${drone.drone_model}`)
            ),
          ],
          services: [...new Set(data.map((drone) => drone.service_type))],
          status: {
            active: data.filter((data) => data.status === "active").length,
            stopped: data.filter((data) => data.status === "stopped").length,
            connected: data.filter((data) => data.status === "connected")
              .length,
            registered: data.filter((data) => data.status === "registered")
              .length,
          },
        });
      });
  }, []);
  useEffect(() => {
    console.log(droneData, "DRONE DATA");
  }, [droneData]);
  return (
    <div className="w-[95%] m-auto max-w-7xl mt-4">
      <Heading />
      <div className=" grid grid-cols-2 2xl:grid-cols-5 mt-6">
        <div className="col-span-3">
          <Stats droneData={droneData} />
        </div>
        <div className="col-span-2">
          <ServiceStats droneData={droneData} />
        </div>
      </div>

      {/* <FleetStats /> */}
    </div>
  );
};

export default Index;

const Heading = () => {
  return (
    <div className="text-3xl font-bold text-slate-900 flex justify-between">
      <h1>Drone Cloud Dashboard</h1>
      <h1>Welcome, Admin!</h1>
    </div>
  );
};
const Stats = ({ droneData }) => {
  return (
    <div className="max-w-2xl p-8 shadow-lg bg-white rounded-2xl">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">
        Drone Statistics
      </h1>
      <div className="flex justify-between">
        <div className="">
          <p className="text-gray-400 text-sm">Status</p>
          <div className="flex gap-12 border rounded-2xl p-5">
            <div>
              <p className="text-green-600 text-xl font-semibold mb-2">
                {droneData.status.active}
              </p>
              <p>Active</p>
            </div>
            <div>
              <p className="text-red-600 text-xl font-semibold mb-2">
                {droneData.status.stopped}
              </p>
              <p>Stopped</p>
            </div>
            <div>
              <p className="text-yellow-600 text-xl font-semibold mb-2">
                {droneData.status.connected}
              </p>
              <p>Connected</p>
            </div>
            <div>
              <p className="text-purple-600 text-xl font-semibold mb-2">
                {droneData.status.registered}
              </p>
              <p>Registered</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Total</p>
          <div className="p-5 border rounded-2xl">
            <p className="text-green-600 text-xl font-semibold mb-2">
              {droneData.total}
            </p>
            <p>Drones</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-gray-500 text-sm">Drone Models</h2>
        {droneData.models.map((item) => (
          <Chip
            className="my-1 mr-1"
            variant="outlined"
            color="secondary"
            label={item}
          />
        ))}
      </div>
    </div>
  );
};
const ServiceStats = ({ droneData }) => {
  return (
    <div className="max-w-2xl p-8 shadow-lg bg-white rounded-2xl">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">
        Drone Service Statistics
      </h1>
      <p className="text-gray-400 text-sm">Services</p>
      {droneData.services.map((item) => (
        <Chip
          className="my-1 mr-1"
          variant="outlined"
          color="secondary"
          label={item}
        />
      ))}
    </div>
  );
};
const FleetStats = () => {
  return <div>Fleet Stats</div>;
};
