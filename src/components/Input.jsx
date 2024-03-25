import React from "react";

function Input({ placeholder, label, desc, onInputChange, value }) {
  return (
    <div className="flex flex-col space-y-4 py-4 text-white w-1/2">
      <label htmlFor={label}>{desc}</label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className="p-2 rounded-md text-black"
        onChange={onInputChange}
        value={value}
      />
    </div>
  );
}

export default Input;
