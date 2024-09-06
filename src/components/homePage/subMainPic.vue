<template>
    <div class="container">
        <img :src="pic" alt="Sub Main Pic" />
        <div class="right-column">
            <h2>{{ title }}</h2>
            <a>{{ subtitle }}</a>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const { pic, title, subtitle } = defineProps(['pic', 'title', 'subtitle']);
</script>

<style scoped>
.container {
    display: flex;
    height: 15%;

}

img {
    flex: 30%;
  
    width: 5%;
}

.right-column {
    flex: 70%;
    display: flex;
    flex-direction: column;
}

h2, a {
    margin: 5%;
}
</style>