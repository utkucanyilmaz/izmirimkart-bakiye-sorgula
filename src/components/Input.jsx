import React from "react";
import classNames from "classnames";

function Input({ placeholder, label, desc, onInputChange, value, className }) {
  return (
    <div
      className={classNames({
        "flex items-center space-x-4 text-white w-full border-gray-400 border rounded-md text-sm md:text-base col-span-2": true,
        className,
      })}
    >
      {desc && (
        <label
          className="whitespace-nowrap px-2 py-1 md:px-4 md:py-2"
          htmlFor={label}
        >
          {desc}
        </label>
      )}
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className="p-2 rounded-tr-md rounded-br-md text-black border border-black w-full"
        onChange={onInputChange}
        value={value}
      />
    </div>
  );
}

export default Input;
