<template>
    <img :src="winMoney" :class="winMoney" style="width: 90%;" />
</template>

<script setup>
import winMoney from '@/assets/mainPageAnnouncement/winMoney.png';
</script>

<style scoped>
img {
    display: block;
    margin: 0 auto; /* 将图片水平居中 */
}
</style>