import React, { Suspense, useState } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import NavBar from "./NavBar";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";
import Styled from "styled-components";
import ImageUploader from "./ImageUploader";

const SidebarContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Posts = React.lazy(() => import("./Posts"));

const PersonalFeed = (props) => {
  const [imageUploader, setImageUploader] = useState(false);

  const onClickHandler = () => {
    setImageUploader(!imageUploader);
  };

  return (
    <>
      {props.showLoading ? (
        <Modal>
          <CircularProgress />{" "}
        </Modal>
      ) : null}
      <NavBar />
      <div className="personal-feed-container">
        {imageUploader ? <ImageUploader onClickHandler={onClickHandler}></ImageUploader> : null}
        <div className="posts-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>
        </div>
        <SidebarContainer>
          <Button onClick={onClickHandler} variant="contained" color="primary">
            Post Something
          </Button>
          <div>Rashmi liked your post</div>
          <div>Sri Vignesh has grown potatoes which he would like to sell</div>
          <div>Dharma has sent friend request</div>
        </SidebarContainer>
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
