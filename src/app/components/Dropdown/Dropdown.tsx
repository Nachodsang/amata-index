import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState([]);

  return (
    <div className="App">
      <Select
        onChange={setSelectedOption}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        defaultValue={[]}
        isMulti
        onChange={(options) => {
          if (Array.isArray(options)) {
            setSelectedOptions(options.map((opt) => opt.value));
          }
        }}
        options={allOptions}
        components={{
          Option: InputOption,
        }}
      />
    </div>
  );
}
