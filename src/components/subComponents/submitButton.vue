<template>
    <button class="submit-button" @click="handleClick">{{ buttonText }}</button>
</template>

<script setup>
// 导入所需函数
import { defineProps, defineEmits } from 'vue';

// 定义 props
const props = defineProps(['buttonText']);

// 定义 emits
const emit = defineEmits();

// 点击按钮时触发 submit 事件
const handleClick = () => {
    emit('submit');
};
</script>

<style scoped>
.submit-button {
    background-color: #1D6BF5;
    
    color: white;
    padding: 20px 150px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: rgba(29, 107, 245, 0.5); /* 使用 rgba 设置背景颜色和透明度 */
}
</style>