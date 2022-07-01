import React from "react";

type Props = {
  componentKey: number;
  residentImage: string;
  residentName: string;
  residentStatus: string;
  residentGender: string;
};

function ResidentInfo(props: Props) {
  return (
    <div key={props.componentKey}>
      <img src={props.residentImage} alt={props.residentName} />
      <h2>{props.residentName}</h2>
      <p>{props.residentGender}</p>
      <p>{props.residentStatus}</p>
    </div>
  );
}

export default ResidentInfo;
