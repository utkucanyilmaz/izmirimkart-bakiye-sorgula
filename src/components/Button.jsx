import React from "react";
import { FaSpinner } from "react-icons/fa6";
import classNames from "classnames";

function Button({ children, type = "button", isLoading, onClick }) {
  return (
    <button
      type={type}
      className={classNames({
        "bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-md py-2 px-4 text-center text-sm md:text-base min-w-12 md:min-w-24 text-nowrap flex items-center justify-center w-fit": true,
        "bg-blue-400": isLoading,
      })}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <FaSpinner className="animate-spin text-sm md:text-base" />
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
