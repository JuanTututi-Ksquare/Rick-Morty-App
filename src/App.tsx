import React, { useEffect, useState } from "react";
import "./App.css";
import LocationContainer from "./components/LocationContainer/LocationContainer";
import ResidentContainer from "./components/ResidentContainer/ResidentContainer";
import SearchBox from "./components/SearchBox/SearchBox";
import { Location } from "./helpers/CustomTypes";
import { getRandomLocation, getSearchedLocation } from "./helpers/GetLocation";

function App() {
  const [searchedLocation, setSearchedLocation] = useState("");
  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    if(searchedLocation) {
      getSearchedLocation(searchedLocation)
      .then(resultLocation => setLocation(resultLocation));
    } else {
      getRandomLocation()
      .then(randomLocation => setLocation(randomLocation))
    }    
  }, [searchedLocation]);

  const search = (input: string) => {
    if (input) {
      setSearchedLocation(input);
    }
  };

  return (
    <div className="App">
      <SearchBox onSearch={search} />
      {location && (
        <div>
          <LocationContainer
            locationName={location.name}
            locationType={location.type}
            locationDimension={location.dimension}
          />
          <ResidentContainer locationResidents={location.residents} />
        </div>
      )}
    </div>
  );
}

export default App;
