import React from "react";
import classNames from "classnames";

function Input({ placeholder, label, desc, onInputChange, value, className }) {
  return (
    <div
      className={classNames({
        className: className,
        "flex flex-col space-y-4 text-white w-full mb-4": true,
      })}
    >
      {desc && <label htmlFor={label}>{desc}</label>}
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className="p-2 rounded-md text-black border border-black"
        onChange={onInputChange}
        value={value}
      />
    </div>
  );
}

export default Input;
