import React from "react";

export const SepiaImg = (props) => {
  return (
    <img
      {...props}
      style={{
        filter: "sepia(.5)",
        boxShadow: "0px 2px 7px rgba(0,0,0,.2)",
        maxWidth: "200px",
        ...(props.style || {}),
      }}
    ></img>
  );
};
