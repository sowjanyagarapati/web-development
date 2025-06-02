<template>
    <div class="design">
      <h2>{{ message }}</h2>
    </div>
  </template>
  
  <script setup>
  const message = "Hello from Design 1!"
  </script>
  
  <style scoped>
  .design {
    padding: 2rem;
    background: lightyellow;
    border: 2px solid orange;
  }
  </style>
  