<template>
  <div class="grid-item" :style="{ backgroundColor: isSelected ? 'rgba(29, 107, 245, 0.1)' : '' }">
    <img :src="imageSource" :class="imageClass" />
    <a :style="{ color: isSelected ? '#1D6BF5' : '' }">{{ itemText }}</a>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  index: Number,
  imageSource: String,
  imageClass: String,
  itemText: String,
  selected: Number
});

const isSelected = computed(() => props.selected === props.index);

</script>
  
<style scoped>
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  width: 70%;
  height: 70%;
}

img {
  height: 50px;
  width: auto;
  object-fit: cover;
}

a {
  margin-top: 5px;
}
</style>