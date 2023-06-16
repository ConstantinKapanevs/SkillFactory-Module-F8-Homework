import axios from "axios";
const URL = "http://localhost:8000";

async function getPosts() {
  const myUrl = URL + "/api/posts";
  return await axios.get(myUrl).then((response) => {
    return response.data;
  });
}

async function addLike(id) {
  const myUrl = URL + "/api/posts/update/" + id;
  const likes = await axios
    .get(URL + "/api/posts/" + id)
    .then((res) => res.data.likes_count);

  return await axios.patch(myUrl, { likes_count: likes + 1 });
}

async function removeLike(id) {
  const myUrl = URL + "/api/posts/update/" + id;
  const likes = await axios
    .get(URL + "/api/posts/" + id)
    .then((res) => res.data.likes_count);
  return await axios.patch(myUrl, { likes_count: likes - 1 });
}

async function deletePost(id) {
  const myUrl = URL + "/api/posts/delete/" + id;
  return await axios.delete(myUrl).then((result) => {
    console.log(`${result} is deleted`);
  });
}

async function createPost(content) {
  const myUrl = URL + "/api/posts/create";
  return await axios
    .post(myUrl, { content: content, likes_count: 0 })
    .then((result) => {
      console.log(`${result} is created`);
    });
}

export { getPosts, addLike, removeLike, deletePost, createPost };
