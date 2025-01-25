const baseURL = "http://localhost:3001";
export default {
  getPosts() {
    return $fetch(`${baseURL}/posts`);
  },
  getUsers() {
    return $fetch(`${baseURL}/users`);
  },
};
