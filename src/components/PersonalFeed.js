import React from "react";
import Posts from "./Posts";

const PersonalFeed = () => {
  return (
    <div className="personal-feed-container">
      <div className="posts-container">
        <Posts />
      </div>
      <div>
        <h1>Suggestions</h1>
      </div>
    </div>
  );
};

export default PersonalFeed;
