import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function TripIndexCard({tripId, tripName, startDate, endDate }) {
  // console.log("trip index card trip id:", trip);
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3 font-bold">
        <div className="flex flex-col">
          <p className="text-md">{tripName}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{startDate} - {endDate}</p>
      </CardBody>
      <Divider/>
      <CardFooter className="justify-end">
        <Link
          isExternal
          showAnchorIcon
          href={`/trip/${tripId}`}
        >
          Edit / View
        </Link>
      </CardFooter>
    </Card>
  );
}