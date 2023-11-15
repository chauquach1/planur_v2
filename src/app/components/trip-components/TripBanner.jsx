export default function TripBanner({tripDetails}) {
  return (
    <div
      id="currTripContainer"
      className="container flex flex-col w-3/4 justify-content-center my-5"
    >
      <div
        id="trip-details-container"
        className="container d-flex flex-row flex-wrap border rounded-lg overflow-clip justify-content-around bg-secondary-subtle shadow-sm bg-white/25"
      >
        <div className="container col rounded-top text-center p-2">
          <p className="m-0 text-2xl font-bold ">{tripDetails.tripName}</p>
          <p className="m-0">MM/DD/YYYY - MM/DD/YYYY</p>
        </div>

        <div className="bg-white p-2 ">
          <div className="columns-1 flex flex-row flex-wrap align-items-end">
            <p id="tripDest" className="align-self-end my-0 fs-6">
              Destination: {tripDetails.destination ? tripDetails.destination : 'N/A'}
            </p>
          </div>

          <div className="column-1 flex flex-row flex-wrap align-items-end border-bottom">
            <p id="tripAdd" className="align-self-end my-0 fs-6">
              Address: {tripDetails.address ? tripDetails.address : 'N/A'}
            </p>
          </div>

          <a
            className="md:hidden mb-1 text-decoration-none text-center text-secondary"
            data-bs-toggle="collapse"
            data-bs-target="#tripDetails2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Trip Details
          </a>

          <div
            id="tripDetailsDropdown"
            className="row columns-3 flex border-t-1 flex-row align-items-baseline justify-around pt-2 px-0 mx-0 mt-2 "
          >
            <div className="w-full flex flex-row p-0">
              <h5 className="align-self-baseline me-2 mb-0 fs-6">Travelers: {tripDetails.guests ? tripDetails.guests : 'N/A'}</h5>
            </div>

            <div className="w-full flex flex-row p-0">
              <h5 className="align-self-baseline me-2 mb-0 fs-6">Reason: {tripDetails.reason ? tripDetails.reason : 'N/A'}</h5>
            </div>

            <div className="w-full flex flex-row p-0">
              <h5 className="align-self-baseline me-2 mb-0 fs-6">
                Transportation: {tripDetails.transportation ? tripDetails.transportation : 'N/A'}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
