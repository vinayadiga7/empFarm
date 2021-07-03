import React, { Suspense } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import NavBar from "./NavBar";
import Modal from "./Modal";

const Posts = React.lazy(() => import("./Posts"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>
        </div>
        <div>
          <h1>Upload photo</h1>
          <input type="file" id="photosupload" name="post a picture" />
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
