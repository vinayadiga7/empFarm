import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  portal: {
    "& > .MuiCircularProgress-colorPrimary": {
      color: "green",
    },
  },
}));

const StyledDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 200;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = (props) => {
  const styles = useStyles();
  return ReactDOM.createPortal(
    <StyledDiv className={styles.portal}>{props.children}</StyledDiv>,
    document.querySelector("#portal")
  );
};

export default Modal;
