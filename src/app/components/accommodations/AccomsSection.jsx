import SectionContainer from "../trip-components/SectionContainer";
import AccommodationsCard from "./AccommodationsCard";
export default function AccomsSection({ accoms }) {
  let accom = accoms[0];
  console.log("accom: ", accom);
  return (
    <SectionContainer category="Accommodations">
      <AccommodationsCard accom={accom} />
    </SectionContainer>
  );
}
