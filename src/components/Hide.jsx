import React, { useState } from "react";

const Hide = ({ sentence, setSentence }) => {
  const [btnName, setBtnName] = useState("hide title");
  const [teller, setTeller] = useState(1);

  return (
    <>
      <button
        onClick={() => {
          //   if (counter % 2 === 1) {
          //     return setSentence(" ");
          //   } else {
          //     return setSentence({ sentence });
          //   }
          //   setTeller(teller + 1);
          //   if (teller % 2 === 0) {
          //     setSentence(sentence);
          //     setBtnName(btnName);
          //   } else {
          //     setSentence(" ");
          //     setBtnName("show title");
          //   }

          //   console.log(teller);
          setSentence(" ");
          setBtnName("show title");
        }}
      >
        {btnName}
      </button>
      <h1>{sentence}</h1>
    </>
  );
};

export default Hide;
