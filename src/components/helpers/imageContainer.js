import React from "react";
import farm01 from "../../images/empFarm-01.jpg";

const ImageContainer = (props) => {
  return (
    <div style={{ height: "100%", width: "50%" }}>
      <figure style={{ height: "100%", width: "100%", position: "relative" }}>
        <img
          src={farm01}
          alt="login page image"
          style={{ height: "100%", width: "100%" }}
        />
        <figcaption
          style={{
            fontSize: "3rem",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "700",
            color: "#f2f2f2",
            position: "absolute",
            bottom: "10%",
            lineHeight: 1,
            padding: "1rem",
          }}
        >
          {" "}
          “Agriculture is our wisest pursuit, because it will in the end
          contribute most to real wealth, good morals, and happiness.” – Thomas
          Jefferson
        </figcaption>
      </figure>
    </div>
  );
};

export default ImageContainer;
