const baseURL = "http://localhost:8888";
export default {
  getPosts() {
    return $fetch(`${baseURL}/posts`);
  },
  getUsers() {
    return $fetch(`${baseURL}/users`);
  },
};
