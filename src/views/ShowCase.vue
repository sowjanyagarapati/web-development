<template>
  <div class="wrapper">
    <div class="grid">
      <HelloWorld />
      <Card />
      <Counter />
      <!-- Add more components here -->
    </div>
  </div>
</template>

<script setup>
import HelloWorld from '../designs/HelloWorld.vue'
import Card from '../designs/Card.vue'
import Counter from '../designs/Counter.vue'
// Add more designs here as you create them
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden; /* Prevent scrolling */
}
</style>

<style scoped>
.grid {
  padding: 5rem;
  display: flex;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  gap: 2rem;
}
.wrapper {
  background: linear-gradient(135deg, #ff7eb3, #ff758c, #ff6a5c);
  background-size: cover;
  height: 100vh; /* Full viewport height */
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
