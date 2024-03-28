import React from "react";
import { FaSpinner } from "react-icons/fa6";
import classNames from "classnames";

function Button({ children, type = "button", isLoading, onClick }) {
  return (
    <button
      type={type}
      className={classNames({
        "bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-md p-2 text-sm md:text-base flex items-center justify-center min-w-8 min-h-4 md:min-w-16 md:min-h-8": true,
        "bg-blue-400": isLoading,
      })}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? <FaSpinner className="animate-spin text-base" /> : children}
    </button>
  );
}

export default Button;
