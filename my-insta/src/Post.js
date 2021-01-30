import React from 'react'
import "./Post.css";

function Post() {
    return (
        <div className="post">
            <h3>User name</h3>
            <img
                className="post__image"
                src="https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
                alt=""
            />
            <h4>Username: caption</h4>
            {/* header - Avatar _ name 
                image
                icons 
                user name caption   */}
        </div>
    )
}

export default Post
