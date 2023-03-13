import React, { useState } from "react";

const City = () => {
  const [addInput, setAddInput] = useState("");
  const [CityToAdd, setCityToAdd] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCityToAdd(addInput);
          setAddInput("");
        }}
      >
        <label htmlFor="searchField">Search:</label>
        <input
          type="text"
          id="searchField"
          placeholder="Add City"
          value={addInput}
          onChange={(e) => {
            setAddInput(e.target.value);
          }}
        />
        {/* <span>{addInput}</span> */}
        <button>Add</button>{" "}
      </form>
    </div>
  );
};

export default City;
