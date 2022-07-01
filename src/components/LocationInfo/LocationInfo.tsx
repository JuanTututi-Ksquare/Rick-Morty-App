import React from "react";

type Props = {
  locationName: string,
  locationType: string,
  locationDimension: string,
}

function LocationInfo({locationName, locationType, locationDimension}: Props) {
  return (
    <div>
      <div>{locationName}</div>
      <div>{locationType}</div>
      <div>{locationDimension}</div>
    </div>
  );
}

export default LocationInfo;
