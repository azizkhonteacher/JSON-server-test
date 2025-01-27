const baseURL = process.env.NODE_ENV === "production" 
  ? "https://jsonservertest-1.netlify.app" // Netlify domeni
  : "http://localhost:8881"; // Lokal server uchun

export default {
  getPosts() {
    return $fetch(`${baseURL}/posts`);
  },
  getUsers() {
    return $fetch(`${baseURL}/users`);
  },
};
