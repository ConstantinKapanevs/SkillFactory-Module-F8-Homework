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
import axios from "axios";

function Post() {
  const [myData, setMyData] = useState([]);
  const [text, setText] = useState("");
  const [likes, setLikes] = useState(null);
  const [dataSize, setDataSize] = useState(null);
  const [renderer, setRenderer] = useState(false);

  const minusLike = async (id) => {
    const myLike = await removeLike(id);
    // setLikes(myLike);
    setRenderer(!renderer);
  };

  const plusLike = async (id) => {
    const myLike = await addLike(id);
    setLikes(myLike);
  };

  const erasePost = async (id) => {
    await deletePost(id);
    setRenderer(!renderer);
  };

  const newPost = async (content) => {
    await createPost(content);
    setRenderer(!renderer);
  };

  useEffect(() => {
    getPosts().then((result) => {
      setMyData(result);
    });
    console.log("rendered...");
  }, [likes, renderer]);

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
                  minusLike(e.target.value);
                }}
              >
                -
              </button>
              <div>Likes :{post.likes_count}</div>
              <button
                type="button"
                value={post.id}
                onClick={(e) => {
                  plusLike(e.target.value);
                }}
              >
                +
              </button>
              <button
                type="button"
                value={post.id}
                onClick={(e) => {
                  erasePost(e.target.value);
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
              newPost(text);
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
