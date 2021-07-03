import React from "react";
import Post from "./Post";
import { viewAlbum } from "./helpers/AWSS3Connection";
import { connect } from "react-redux";
import { setImages } from "./actionCreaters";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.renderList = this.renderList.bind(this);
  }

  componentDidMount() {
    console.log("From Posts componentDidMount");
    viewAlbum()
      .then((data) => this.props.setImages(data))
      .catch((err) => console.log(err));
  }

  renderList() {
    return this.props.images.map((image) => <Post data={image} />);
  }

  render() {
    console.log("Post is rendered!");
    return <>{this.renderList()}</>;
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    loadPersonalFeed: state.loadPersonalFeed,
    images: state.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setImages: (data) => dispatch(setImages(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
