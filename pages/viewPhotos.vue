<template>
    <div class="container">
      <h2 class="text-xl font-semibold mb-4">JSON Serverdan Rasmlarni Ko‘rish</h2>
      <button
        @click="fetchImages"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Rasmlarni Yuklash
      </button>
  
      <div v-if="images.length" class="grid grid-cols-3 gap-4 mt-4">
        <div v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Rasm" class="w-full h-auto border rounded" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [], // JSON serverdan keladigan rasmlar
      };
    },
    methods: {
      async fetchImages() {
        try {
          const response = await fetch("http://localhost:8888/upload");
          const data = await response.json();
  
          // Rasmlarni massivga olish
          this.images = data.map((item) => item.image);
        } catch (error) {
          console.error("Xatolik yuz berdi:", error);
        }
      },
    },
  };
  </script>
  
  <style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  img{
    width: 500px;
    height: 400px;
    object-fit: contain;
  }
  </style>
  