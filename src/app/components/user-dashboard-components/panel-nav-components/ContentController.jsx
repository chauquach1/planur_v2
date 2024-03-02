"use client";
import TabsContainer from "../dashboard-nav-tabs/TabBtnsContainer";
import TripTabsContainer from "../dashboard-nav-tabs/TripTabsContainer";
import NewTripForm from "../../trip-components/NewTripForm";

export default function ContentController({ userData, controllerTab, setControllerTab, setActiveTab, setSelectedTrip, trips, setTripsIndex, selectedTrip }) {

  return (
    <div className="flex flex-col w-full h-full max-w-[350px] bg-slate-300 items-center">
      <TabsContainer
        firstName={userData.firstName}
        lastName={userData.lastName}
        setControllerTab={setControllerTab}
      />
      <TripTabsContainer
        controllerTab={controllerTab}
        setControllerTab={setControllerTab}
        setSelectedTrip={setSelectedTrip}
        trips={trips}
        trip={selectedTrip}
        user={userData}
      />
      <div className="w-full h-max p-2">
        <NewTripForm
          user={userData}
          trips={trips}
          setTripsIndex={setTripsIndex}
        />
      </div>
    </div>
  );
}
