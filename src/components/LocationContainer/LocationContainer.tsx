import LocationInfo from "../LocationInfo/LocationInfo";

type Props = {
  locationName: string;
  locationType: string;
  locationDimension: string;
};

function LocationContainer({ locationName, locationType, locationDimension }: Props) {

  return (
    <div>
      <LocationInfo locationName={locationName} locationType={locationType} locationDimension={locationDimension}/>
    </div>
  );
}

export default LocationContainer;
