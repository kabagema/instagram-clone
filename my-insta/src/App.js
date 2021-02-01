import "./App.css";
import Post from "./Post";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data()
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app_headerImage"
          src="https:www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map(({id, posts}) => (
        <Post
          key={id}
          username={posts.username}
          caption={posts.caption}
          imageUrl={posts.imageUrl}
        />
      ))}

      <Post
        username="irisofvictor"
        caption="hard coded"
        imageUrl="https://upload.wikimedia.org/wikipedia/en/8/89/Megamind2010Poster.jpg"
      />
    </div>
  );
}

export default App;
