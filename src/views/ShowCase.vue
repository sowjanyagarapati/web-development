<template>
    <div>
      <h1>🎨 My Design Showcase</h1>
      <ul>
        <li v-for="design in designs" :key="design.name">
          <RouterLink :to="design.path">{{ design.title }}</RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>

  const designs = [
    { name: "Design1", title: "Design 1 - Greeting", path: "/design/1" },
    { name: "Design2", title: "Design 2 - Cool Card", path: "/design/2" },
  ]
  </script>
  