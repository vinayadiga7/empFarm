import React from "react";
import Styled from "styled-components";

const StyledDiv = Styled.div`
  display: flex;
  height: 100vh;
`;

const PlaceCenter = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default PlaceCenter;
