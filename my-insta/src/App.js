import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app_headerImage"
          src="https:www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <Post username="irisofvictor" caption="2021 is my year" imageUrl="https://upload.wikimedia.org/wikipedia/en/8/89/Megamind2010Poster.jpg" />

      {/* Header */}
      {/* Posts */}
    </div>
  );
}

export default App;
