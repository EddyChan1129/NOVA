<template>
  <div class="container">
    <div class="white-square">
      <Registerheader v-if="showRegister" />
      <LoginInfoheader v-if="!showRegister" />
      <div class="bottom-buttons">
        <p class="blue-text" @click="toggleComponent">{{ showRegister ? '已有账号？去登录' : '還沒账号？去登录' }}</p>
        <p class="blue-text">联系客服</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Registerheader from './registerheader.vue';
import LoginInfoheader from './loginInfoheader.vue';

const showRegister = ref(true);

const toggleComponent = () => {
  showRegister.value = !showRegister.value;
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.white-square {
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 70%;
  background-color: white;
  z-index: 1000;
  border-radius: 2px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  flex-direction: column;

}

.bottom-buttons {
  display: flex;
  justify-content: space-between;
  margin: 0px 40px;

}

.blue-text {
  color: #0A5CFF;
  cursor: pointer;
}
</style>