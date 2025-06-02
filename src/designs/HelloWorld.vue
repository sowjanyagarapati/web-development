<template>
    <div class="design-box">
      <h2>{{ message }}</h2>
    </div>
  </template>
  
  <script setup>
  const message = "Hello from Design 1!"
  </script>
  
<style scoped>
.design-box {
  padding: 1rem;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
  </style>
  