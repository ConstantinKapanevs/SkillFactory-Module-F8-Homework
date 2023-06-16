import React, { useEffect, useState, useForceUpdate } from "react";
import {
  getPosts,
  addLike,
  removeLike,
  deletePost,
  createPost,
} from "../utils/PostService";
import "../styles/Post.css";
import dateFormat from "dateformat";

function Post() {
  const [myData, setMyData] = useState([]);
  const [text, setText] = useState("");
  const [renderer, setRenderer] = useState(false);

  useEffect(() => {
    getPosts().then((result) => {
      setMyData(result);
    });
    console.log("rendered...");
  }, [renderer]);

  return (
    <>
      {myData.map((post) => {
        return (
          <div className="posts" key={post.id}>
            <small>{post.id}</small>
            <div>{post.content}</div>
            <div>{dateFormat(post.created_at)}</div>
            <div className="likes">
              <button
                type="button"
                value={post.id}
                onClick={(e) => {
                  removeLike(e.target.value);
                  setRenderer(!renderer);
                }}
              >
                -
              </button>
              <div>Likes :{post.likes_count}</div>
              <button
                type="button"
                value={post.id}
                onClick={(e) => {
                  setRenderer(!renderer);
                  addLike(e.target.value);
                }}
              >
                +
              </button>
              <button
                type="button"
                value={post.id}
                onClick={(e) => {
                  deletePost(e.target.value);
                  setRenderer(!renderer);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <div className="new-post">
        <h2>Новый пост</h2>
        <form>
          <textarea
            type="text"
            id="textInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button
            type="button"
            onClick={() => {
              setRenderer(!renderer);
              createPost(text);
            }}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default Post;
