import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="irisofvictor"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Aka_Manto.png/146px-Aka_Manto.png"
          // alt={username}
        />
        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
        alt=""
      />
      <h4 className="post__text">
        <strong>IrisofVictor:</strong>
        First post here
      </h4>
      {/* header - Avatar _ name 
                image
                icons 
                user name caption   */}
    </div>
  );
}

export default Post;
