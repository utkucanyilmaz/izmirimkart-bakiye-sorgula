import React from "react";
import { FaSpinner } from "react-icons/fa6";

function Button({ children, type, isLoading }) {
  return (
    <button
      type={type}
      className="bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-md p-2 text-sm md:text-base flex items-center justify-center min-w-24 min-h-12"
    >
      {isLoading ? <FaSpinner className="animate-spin text-base" /> : children}
    </button>
  );
}

export default Button;
