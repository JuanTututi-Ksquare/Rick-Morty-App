import axios from "axios";
import { useEffect, useState } from "react";
import ResidentInfo from "../ResidentInfo/ResidentInfo";

type Props = {
  locationResidents: string[];
};

function ResidentContainer({ locationResidents }: Props) {
  const [residentList, setResidentList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let result: JSX.Element[] = [];
    const residentsData = async () => {
      for (let i = 0; i < locationResidents.length; i++) {
        let resident = locationResidents[i];
        const response = await axios(resident);
        const residentData = response.data;
        result.push(
          <ResidentInfo
            key={residentData.id}
            componentKey={residentData.id}
            residentImage={residentData.image}
            residentName={residentData.name}
            residentStatus={residentData.status}
            residentGender={residentData.gender}
          />
        );
      }
      setResidentList(result);
    };
    residentsData();
  }, [locationResidents]);

  return (
    <>
      <div>{residentList}</div>
    </>
  );
}

export default ResidentContainer;
