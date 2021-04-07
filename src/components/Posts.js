import React from "react";
import Post from "./Post";
import Image1 from "../images/tim-mossholder-xDwEa2kaeJA-unsplash.jpg";
import Image2 from "../images/empFamr-04.jpeg";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: "abcd0001",
          user: {
            username: "vinayadiga7",
            profilePicture: "Profile Image",
          },
          caption:
            "I have started growing Siri dhanya, expecting good harvest by June #FarmerLife #OrganicFarming",
          image: Image1,
          comments: [
            {
              user: {
                username: "Dineshan01",
                profilePicture: "Profile Image 2",
              },
              commentText: "Good Sir",
              likes: 1,
            },
            {
              user: {
                username: "Guru Murthy 05",
                profilePicture: "Profile Image",
              },
              commentText: "Great job",
              likes: 2,
            },
            {
              user: {
                username: "Ganesh Hiremath",
                profilePicture: "Profile Image",
              },
              commentText:
                "Would love to visit during the harvest and buy some navane akki",
              likes: 10,
            },
          ],
          likes: 10,
        },
        {
          id: "abcd0002",
          user: {
            username: "aparnaadiga99",
            profilePicture: "Profile Image",
          },
          caption:
            "I have started growing Siri dhanya, expecting good harvest by June #FarmerLife #OrganicFarming",
          image: Image2,
          comments: [
            {
              user: {
                username: "Dineshan01",
                profilePicture: "Profile Image",
              },
              commentText: "Good Sir",
              likes: 1,
            },
            {
              user: {
                username: "Guru Murthy 05",
                profilePicture: "Profile Image",
              },
              commentText: "Great job",
              likes: 2,
            },
            {
              user: {
                username: "Ganesh Hiremath",
                profilePicture: "Profile Image",
              },
              commentText:
                "Would love to visit during the harvest and buy some navane akki",
              likes: 10,
            },
          ],
          likes: 10,
        },
      ],
    };
    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    return this.state.posts.map((post) => <Post data={post} />);
  }

  render() {
    return <>{this.renderList()}</>;
  }
}

export default Posts;
