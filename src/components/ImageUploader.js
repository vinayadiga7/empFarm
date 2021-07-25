import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import Styled from "styled-components";
import ImagePreview from "../images/Preview-icon.png";

const ButtonContainerDiv = Styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    .button-styles {
        margin: 2rem;
    }
`;

const ImageUploader = (props) => {
  const [file, setFile] = useState([ImagePreview]);
  const [appliedStyle, setAppliedStyle] = useState("");

  const onClickHandler = (filterType) => {
    console.log(filterType);
    switch (filterType) {
      case "greyscale":
        setAppliedStyle(
          "image-uploader-container__content-two-gridItem-img--greyscale"
        );
        break;
      case "sepia":
        setAppliedStyle(
          "image-uploader-container__content-two-gridItem-img--sepia"
        );
        break;
      case "contrast":
        setAppliedStyle(
          "image-uploader-container__content-two-gridItem-img--contrast"
        );
        break;
      default:
        setAppliedStyle("");
        break;
    }
  };

  const onFileSelection = (e) => {
    const { target } = e;
    console.log(target.files[0]);
    const uploadedFile = URL.createObjectURL(target.files[0]);
    console.log(uploadedFile);
    setFile(uploadedFile);
  };

  return (
    <div className="image-uploader-container">
      <div className="image-uploader-container__content">
        <div className="image-uploader-container__content-one">
          <div className="image-uploader-container__content-one-button">
            <input
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              id="browse-the-file"
              multiple
              onChange={onFileSelection}
            />
            <label htmlFor="browse-the-file">
              <Button variant="contained" color="primary" component="span">
                Browse Files
              </Button>
            </label>
          </div>
          <figure>
            <img
              className={`image-uploader-container__content-one-img ${appliedStyle}`}
              src={file}
              alt={file}
            />
          </figure>
          <div className="image-uploader-container__content-one-comments">
            <input type="text" placeholder="Add a caption..." />
            {/* <div>
              <SendIcon />
            </div> */}
          </div>
        </div>
        <div className="image-uploader-container__content-two">
          <div
            className="image-uploader-container__content-two-gridItem"
            onClick={() => onClickHandler("orginal")}
          >
            <h2>Original</h2>
            <figure className="image-uploader-container__content-two-gridItem-img">
              <img src={file} alt={file} />
            </figure>
          </div>
          <div
            className="image-uploader-container__content-two-gridItem"
            onClick={() => onClickHandler("sepia")}
          >
            <h2>Sepia</h2>
            <figure className="image-uploader-container__content-two-gridItem-img">
              <img
                className="image-uploader-container__content-two-gridItem-img--sepia"
                src={file}
                alt={file}
              />
            </figure>
          </div>
          <div
            className="image-uploader-container__content-two-gridItem"
            onClick={() => onClickHandler("greyscale")}
          >
            <h2>GreyScale</h2>
            <figure className="image-uploader-container__content-two-gridItem-img">
              <img
                className="image-uploader-container__content-two-gridItem-img--greyscale"
                src={file}
                alt={file}
              />
            </figure>
          </div>
          <div
            className="image-uploader-container__content-two-gridItem"
            onClick={() => onClickHandler("contrast")}
          >
            <h2>Contrast</h2>
            <figure className="image-uploader-container__content-two-gridItem-img">
              <img
                className="image-uploader-container__content-two-gridItem-img--contrast"
                src={file}
                alt={file}
              />
            </figure>
          </div>
        </div>
        <ButtonContainerDiv>
          <Button className="button-styles" variant="contained" color="primary">
            Post
          </Button>
          <Button
            className="button-styles"
            variant="contained"
            color="secondary"
            onClick={props.onClickHandler}
          >
            Cancel
          </Button>
        </ButtonContainerDiv>
      </div>{" "}
    </div>
  );
};

export default ImageUploader;
