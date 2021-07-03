import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  orange: {
    backgroundColor: deepOrange[500],
  },
});

const URLPrefix = "https://empfarm-bucket-1.s3.us-east-1.amazonaws.com/";

const Post = (props) => {
  const classes = useStyles();
  console.log(props);
  const photoUrl = URLPrefix + props.data.Key;
  const [likes, setLikes] = useState(10);

  const incrementLikesHandler = () => {
    let incrementedLikes = likes + 1;
    setLikes(incrementedLikes);
  };
  //console.log(photoUrl);
  return (
    <div key={props.data.Ekey} className="posts-container__item">
      <div className="posts-container__item-header">
        <Avatar
          className={`${classes.orange} posts-container__item-header-image`}
        >
          {"V"}
        </Avatar>
        <span className="posts-container__item-header-text">
          {"VinayAdiga"}
        </span>
      </div>
      <div className="posts-container__item-image-container">
        <img className="posts-container__item-image-actual" src={photoUrl} />
      </div>
      <div>
        <IconButton onClick={incrementLikesHandler}>
          <ThumbUpAltOutlined /> {likes}
        </IconButton>
      </div>
      <div>
        <span style={{ marginRight: "1rem", fontWeight: 700 }}>
          {"VinayAdiga"}
        </span>
        {/* {post.caption.substr(0, 15)} */}
      </div>
    </div>
  );
};
export default Post;
