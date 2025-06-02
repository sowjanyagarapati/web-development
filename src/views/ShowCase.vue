<template>
  <div class="grid">
    <HelloWorld />
    <Card />
    <!-- Add more components here -->
  </div>
</template>

<script setup>
import HelloWorld from '../designs/HelloWorld.vue'
import Card from '../designs/Card.vue'
// Add more designs here as you create them
</script>

<style scoped>
.grid {
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>
