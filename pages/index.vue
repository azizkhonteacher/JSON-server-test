<template>
    <div class="container">
      <h2 class="text-xl font-semibold mb-4">Rasmni yuklash va JSON faylga saqlash</h2>
      <input type="file" @change="handleFileUpload" accept="image/*" class="mb-4 p-2 border rounded" />
      <button
        @click="saveImage"
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        :disabled="!selectedFile"
      >
        Saqlash
      </button>
      <div v-if="uploadedImage" class="mt-4">
        <h3 class="font-semibold">Yuklangan rasm:</h3>
        <img :src="uploadedImage" alt="Uploaded Image" class="mt-2 border rounded" />
      </div>

        <view-photos></view-photos>
    </div>
  </template>
  
  <script>
import viewPhotos from './viewPhotos.vue';
  export default {
  components: { viewPhotos },
    data() {
      return {
        selectedFile: null,
        uploadedImage: null, // Base64 formatda saqlangan rasm
      };
    },
    methods: {
      // Fayl tanlash
      handleFileUpload(event) {
        this.selectedFile = event.target.files[0];
      },
      // Faylni base64 formatga o‘tkazish va JSON faylga saqlash
      saveImage() {
        const reader = new FileReader();
  
        reader.onload = () => {
          const base64Image = reader.result;
  
          // Base64 ni JSON serverga yuborish
          fetch("http://localhost:8888/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image }),
          })
            .then((response) => response.json())
            .then((data) => {
              this.uploadedImage = base64Image; // Rasmni ekranda ko‘rsatish uchun
              alert("Rasm muvaffaqiyatli saqlandi!");
            })
            .catch((error) => {
              console.error("Saqlashda xatolik yuz berdi:", error);
            });
        };
  
        if (this.selectedFile) {
          reader.readAsDataURL(this.selectedFile);
        }
      },
    },
  };
  </script>
  
  <style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  </style>
  