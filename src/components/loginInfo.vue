<template>
  <div>
    <form @submit.prevent="handleSubmit">
  
        <InputField type="text" v-model="username" placeholder="请输入您的账号" @input="validateUsername" :rule="true" />

 
  
        <InputField type="password" v-model="password" placeholder="请输入账号密码" @input="validatePassword" :rule="true" />

      <div class="checkbox-row">
        <div class="left-content">
          <input type="checkbox" id="rememberPasswordCheckbox" v-model="rememberPasswordCheckbox">
          <label for="rememberPasswordCheckbox">记住密码</label>
        </div>
        <div class="right-content"></div>
      </div>
      <button type="submit" class="submit-button">立即登录</button>
      <p class="explore-text" @click="noLogin">暂不登录，先去逛逛</p>
      <slideVerification v-if="showSlideVerification" :fromData="fromData" :action="action" />
    </form>
  </div>


</template>

<script setup>
import { ref } from 'vue';
import slideVerification from './slideVerification.vue';
import InputField from './subComponents/InputField.vue'

import { useRouter } from 'vue-router';
const router = useRouter();
const action = 'generalLogin'
const username = ref('');
const password = ref('');
const rememberPasswordCheckbox = ref(false);
const showSlideVerification = ref(false);
const fromData = {};


//打包
const handleSubmit = () => {
  console.log('handleSubmit');
  showSlideVerification.value = true;
  fromData.username = username.value;
  fromData.password = password.value;

  console.log(fromData);
};

const noLogin = () => {
  router.push('/homePage');

}



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
  justify-content: space-between;
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



.left-content {
  display: flex;
  align-items: center;
}

.right-content {
  display: flex;
  align-items: center;
}

.forgot-password {
  margin-left: auto;
}
</style>