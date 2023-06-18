import axios from "axios";
const URL = "http://localhost:8000";

async function getPosts() {
  const myUrl = URL + "/api/posts";
  return await axios.get(myUrl).then((response) => {
    console.log(response.data.length);
    return response.data;
  });
}

async function addLike(id) {
  const myUrl = URL + "/api/posts/update/" + id;
  const likes = await axios
    .get(URL + "/api/posts/" + id)
    .then((res) => res.data.likes_count);

  return await axios
    .patch(myUrl, { likes_count: likes + 1 })
    .then((res) => res.data.likes_count);
}

async function removeLike(id) {
  const myUrl = URL + "/api/posts/update/" + id;
  const likes = await axios
    .get(URL + "/api/posts/" + id)
    .then((res) => res.data.likes_count);
  return await axios
    .patch(myUrl, { likes_count: likes - 1 })
    .then((res) => res.data.likes_count);
}

async function deletePost(id) {
  const myUrl = URL + "/api/posts/delete/" + id;
  return await axios.delete(myUrl).then((result) => {
    result;
  });
}

async function createPost(content) {
  const myUrl = URL + "/api/posts/create";
  if (content) {
    return await axios
      .post(myUrl, { content: content, likes_count: 0 })
      .then((result) => {
        result;
      });
  } else {
    console.log("no empty posts are allowed");
  }
}

export { getPosts, addLike, removeLike, deletePost, createPost };
