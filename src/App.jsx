import React, { useState } from "react";
import Hide from "./components/Hide";
import City from "./components/City";
import Count from "./components/Count";

export const App = () => {
  const [sentence, setSentence] = useState("React is amazing :-)");
  const [cities, setCities] = useState([]);
  const removeOne = (idToRemove) => {
    setCities(cities.filter(({ id }) => id !== idToRemove));
  };
  return (
    <div>
      <Hide sentence={sentence} setSentence={setSentence} />
      <City cities={cities} removeOne={removeOne} />
      {/* <Count /> */}
    </div>
  );
};
export default App;
