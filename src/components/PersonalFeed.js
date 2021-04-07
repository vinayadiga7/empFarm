import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Posts from "./Posts";
import NavBar from "./NavBar";
import Modal from "./Modal";

const PersonalFeed = (props) => {
  return (
    <>
      {props.showLoading ? (
        <Modal>
          <CircularProgress />{" "}
        </Modal>
      ) : null}
      <NavBar />
      <div className="personal-feed-container">
        <div className="posts-container">
          <Posts />
        </div>
        <div>
          <h1>Suggestions</h1>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showLoading: state.userRequestLoading,
  };
};
export default connect(mapStateToProps, null)(PersonalFeed);
