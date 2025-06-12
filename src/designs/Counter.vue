<template>
    <button class="counter" @click="increment">
            Count me {{ count }}
    </button>
</template>

<script setup>

import {ref} from 'vue';

const count = ref(0);

function increment() {
    count.value++;
    console.log(`Count is now: ${count.value}`);
}
</script>

<style scoped>
.counter {
    margin: 5%;
    font-size: small;
    width: 150px;
    height: 50px;
    background: linear-gradient(to right, #4caf50, #81c784);
}
.counter:hover {
    background: linear-gradient(to right, #052207, #a5d6a7);
}
</style>