"use client";
import ContentController from "./content-nav-components/ContentController";
import TripDisplay from "../trip-components/TripDisplay";
import SideContainer from "./content-side-components/SideContainer";
import { useState, useEffect } from "react";

export default function UserDashboard({ userData, trips }) {
  const [selectedTrip, setSelectedTrip] = useState(trips[0] || null);
  const [activeTab, setActiveTab] = useState("tripsindex");

  useEffect(() => {
    console.log("selectedTrip: ", selectedTrip);
  }, [selectedTrip]);

  return (
    <div className="flex flex-row h-screen ">
      <ContentController
        userData={userData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelectedTrip={setSelectedTrip}
        trips={trips}
        selectedTrip={selectedTrip}
      />

      <div
        id="content-container"
        className="column flex flex-col w-screen h-full bg-gray-300 overflow-y-hidden"
      >
        <div
          id="content-body"
          className="flex flex-row w-full h-full justify-between overflow-y-hidden"
        >
          <TripDisplay trip={selectedTrip} key={selectedTrip._id || 0} />
          <SideContainer trip={selectedTrip} />
        </div>
      </div>
    </div>
  );
}
