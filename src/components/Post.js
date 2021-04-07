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

const Post = (props) => {
  const classes = useStyles();
  const post = props.data;
  const [likes, setLikes] = useState(post.likes);

  const incrementLikesHandler = () => {
    let incrementedLikes = likes + 1;
    setLikes(incrementedLikes);
  };

  return (
    <div key={post.id} className="posts-container__item">
      <div className="posts-container__item-header">
        <Avatar
          className={`${classes.orange} posts-container__item-header-image`}
        >
          {post.user.username[0]}
        </Avatar>
        <span className="posts-container__item-header-text">
          {post.user.username}
        </span>
      </div>
      <div className="posts-container__item-image-container">
        <img className="posts-container__item-image-actual" src={post.image} />
      </div>
      <div>
        <IconButton onClick={incrementLikesHandler}>
          <ThumbUpAltOutlined /> {likes}
        </IconButton>
      </div>
      <div>
        <span style={{ marginRight: "1rem", fontWeight: 700 }}>
          {post.user.username}
        </span>
        {post.caption.substr(0, 15)}
      </div>
    </div>
  );
};
export default Post;
