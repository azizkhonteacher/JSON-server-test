const baseURL = process.env.NODE_ENV === "production" 
  ? "https://your-netlify-site.netlify.app" // Netlify domeni
  : "http://localhost:8888"; // Lokal server uchun

export default {
  getPosts() {
    return $fetch(`${baseURL}/posts`);
  },
  getUsers() {
    return $fetch(`${baseURL}/users`);
  },
};
