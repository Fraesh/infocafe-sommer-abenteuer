import React from "react";

export const RiddleHeading = ({ index, children, solved, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem 0",
        marginBottom: "2rem",
        width: "100%",
      }}
      onClick={onClick}
    >
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          width: "100%",
          textAlign: "center",
          marginBottom: "1rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            height: 1,
            opacity: 0.3,
            borderTop: "2px solid black",
            margin: "0 1rem",
          }}
        />
        {children}
        <div
          style={{
            flex: 1,
            height: 1,
            opacity: 0.3,
            borderTop: "2px solid black",
            margin: "0 1rem",
          }}
        />
      </div>
      <div>- {solved ? "GELÖST" : `Rätsel ${index}`} -</div>
    </div>
  );
};
