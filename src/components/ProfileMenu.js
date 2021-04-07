import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "./helpers/loginUser";
import { deleteUser } from "./actionCreaters";

const StyledList = Styled.ul`
width: 15rem;
background-color: #74ee8dad;
color: #3c3c3d;
display: flex;
flex-direction: column;
position: absolute;
right: 18rem;
z-index: 300;
list-style: none;
transition: all 0.3s ease-out;
`;
const StyledListItem = Styled.li`
    padding: 1rem;
    cursor: pointer
    font-size: 1.6rem;
    &:hover {
        background-color: #74ddaaad
    }
`;

const signOut = async (deleteUserSession) => {
  await logoutUser();
  //console.log("User looged out");
  deleteUserSession();
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserSession: () => dispatch(deleteUser()),
  };
};

const ProfileMenu = (props) => {
  // console.log(props);
  return (
    <StyledList>
      <StyledListItem>
        <Link
          style={{ textDecoration: "none", color: "#3c3c3d" }}
          to="/profile"
        >
          View Profile
        </Link>
      </StyledListItem>
      <StyledListItem onClick={() => signOut(props.deleteUserSession)}>
        <Link style={{ textDecoration: "none", color: "#3c3c3d" }} to="/">
          Sign Out
        </Link>
      </StyledListItem>
    </StyledList>
  );
};

export default connect(null, mapDispatchToProps)(ProfileMenu);
