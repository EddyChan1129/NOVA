<template>
  <div class="date-picker">
    <input type="date" v-model="selectedDate" class="date-input" @input="updateDate" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedDate = ref(null);

const updateDate = (event) => {
  selectedDate.value = event.target.value;
};
</script>

<style scoped>
.date-picker {
  background-color: #EFF6FE; 
  padding: 10px;
  border-radius: 10px;
  width: 96%; 
  height: 40px;
  display: flex;
  justify-content: center; 
  align-items: center;
}

.date-input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #EFF6FE; 
  width: 90%; 
  border: none;
}
</style>