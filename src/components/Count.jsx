import React from "react";

const Count = () => {
  const [nr, setNr] = useState(0);
  const telOp = () => {
    setNr(nr + 1);
    console.log(nr);
  };
  return <h1>Timer</h1>;
};

export default Count;
