import React from "react";

const Button = ({ onClick, text, style }) => {
  return (
    <div className="pb-4">
      <button
        onClick={onClick}
        className={`${style} w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
