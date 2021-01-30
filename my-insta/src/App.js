import "./App.css";
import Post from "./Post";
import React, { useState } from "react";

function App() {

  const [posts, setPosts] = useState([
    {
      username:"TightenVille",
      caption:"testing 123", 
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/8/89/Megamind2010Poster.jpg"
    },
    {
      username:"Rameses",
      caption:"My childhood",
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/6/6c/Prince_of_egypt_ver2.jpg"
    },
    {
      username:"dine@Po",
      caption:"Great movie",
      imageUrl:"https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg"
    },
    {
      username:"Hiccup", 
      caption:"memory lane",
      imageUrl:"https://www.themoviedb.org/t/p/original/q9JwFktEfzdXlE7gFjKSTOD3jpK.jpg" 
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app_headerImage"
          src="https:www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {
        posts.map(posts => (
          <Post username={posts.username}
          caption={posts.caption}
          imageUrl={posts.imageUrl}
          />
        ))
      }

      <Post username="irisofvictor" caption="2021 is my year" imageUrl="https://upload.wikimedia.org/wikipedia/en/8/89/Megamind2010Poster.jpg" />

    </div>
  );
}

export default App;
