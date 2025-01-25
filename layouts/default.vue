<template>
  <div>
    <button @click="newPost()">new post</button>
    <h1>Postlar</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }} - {{ post.content }}
      </li>
    </ul>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const { data: posts, error } = await useFetch("/posts", {
  baseURL: "http://localhost:3001", // JSON Server manzili
});

if (error.value) {
  console.error("Xatolik yuz berdi:", error.value);
}

//   yangi post yaratish
function newPost() {
  const newPost = {
    title: "Yangi post",
    content: "Bu yangi post mazmuni",
  };
  fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Ma'lumot qo'shildi:", data);
    })
    .catch((error) => {
      console.error("Xatolik yuz berdi:", error);
    });
}

import services from "~/services/services";
async function getUsers() {
  const res = await services.getUsers();
  console.log(res);
}
getUsers();
</script>
