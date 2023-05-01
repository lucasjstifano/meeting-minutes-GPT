import React from "react";

const CenteredLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="content-center">{children}</div>
    </div>
  );
};

export default CenteredLayout;
