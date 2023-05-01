import React from "react";

const Header = () => {
  return (
    <div className="pb-2">
      <h1 className="text-3xl text-gray-50 font-bold text-center text-blue-500">
        momGPT
      </h1>
      <p className="text-center text-gray-50 mb-2 mt-2">
        Drop a call recording video below and hit "get mom email" to generate a
        minutes of the meeting email from the call recording transcription.
      </p>
    </div>
  );
};

export default Header;
