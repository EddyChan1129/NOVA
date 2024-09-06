<template>
  <div>
    <form @submit.prevent="handleSubmit" class="form-container">
 
        <InputField type="text" v-model="username" placeholder="請輸入你的手機號" @input="" :rule="true" />

  
   
        <InputField type="password" v-model="verificationCode" placeholder="請輸入驗証碼" @input=""
          :rule="true" />

        <p @click="getVerificationCode" :disabled="disableGetVerificationCode" class="get-code-button">{{
          getVerificationCodeButtonText }}</p>


      <button type="button" class="submit-button" @click="handleSubmit">立即登錄</button>

      <p class="explore-text">暫不登錄,先在離逛逛</p>
      <slideVerification v-if="showSlideVerification" :fromData="fromData" :action="action" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import slideVerification from './slideVerification.vue';
import InputField from './subComponents/InputField.vue'


const action = 'phoneLogin'
const username = ref('');
const verificationCode = ref('');

const showSlideVerification = ref(false);
const fromData = {
  username: '',
  verificationCode: '',
};


const disableGetVerificationCode = ref(false);
const verificationCodeCountdown = ref(60);

const getVerificationCodeButtonText = computed(() => {
  return disableGetVerificationCode.value ? `重发验证码(${verificationCodeCountdown.value}s)` : '获取验证码';
});

const getVerificationCode = () => {
  console.log('获取验证码');
  disableGetVerificationCode.value = true;
  verificationCodeCountdown.value = 60;
  startVerificationCodeCountdown();
};

const startVerificationCodeCountdown = () => {
  const countdownInterval = setInterval(() => {
    verificationCodeCountdown.value--;
    if (verificationCodeCountdown.value <= 0) {
      clearInterval(countdownInterval);
      disableGetVerificationCode.value = false;
    }
  }, 1000);
};

const handleSubmit = () => {
  // 處理表單提交
  console.log('handleSubmit');

  //打包
  showSlideVerification.value = true;
  fromData.username = username.value;
  fromData.verificationCode = verificationCode.value;

  console.log(fromData);
};


</script>



<style scoped>
div {
  margin: 10px 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  height: 30px;
  border-radius: 10px;
  background-color: #EFF6FE;
}

span {
  color: red;
  font-size: 14px;
}

.submit-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  display: block;
  margin: 0 auto;
  width: 70%;
  height: 50px;
}

.checkbox-row {
  display: flex;
  align-items: center;
}

.checkbox-row input[type="checkbox"] {
  margin-right: 5px;
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.registerHeader {
  display: flex;
  justify-content: space-around;
  margin: 5%;
}

.active {
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-skip-ink: none;
  padding-bottom: 5px;
}

.white-square {
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 70%;
  background-color: white;
  z-index: 1000;
}

a {
  color: blue;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
}

.active {
  font-weight: bold;
}

.separator {
  width: 100%;
  height: 1px;
  background-color: lightgray;
}

.explore-text {
  color: blue;
  font-size: 1.2em;
  text-align: center;
}

.get-code-button {
  position: absolute;
  top: 180px;
  left: 70%;
  transform: translateX(-30%);
  color: blue;
  cursor: pointer;
  z-index: 1;
}
</style>