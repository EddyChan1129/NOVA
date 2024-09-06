<template>
  <div>



    <form @submit.prevent="slideVerification">
    
    
        <InputField type="text" v-model="username" placeholder="请输入您的账号" @input="validateUsername" :rule="validUsername"
          errormessage="帳號需為4-15個字符，不允許特殊字符和空格" />
 

   
        <InputField type="password" v-model="password" placeholder="请输入账号密码" @input="validatePassword" :rule="validPassword"
          errormessage="密碼需至少6個字符，至少包含3個不同字符，英文和數字的組合，不允許空格" />
      
 
        <InputField type="password" v-model="confirmPassword" placeholder="请再次输入账号密码" @input="validConfirmPassword"
          :rule="validConfirmPasswords" errormessage="兩次輸入的密碼不一致" />

   
        <InputField type="text" v-model="invitationCode" placeholder="请输入邀请码" @input="validateUsername"
          :rule="validConfirmPasswords" />

      <div class="checkbox-row">
        <input type="checkbox" id="agreeTerms" v-model="agreeTerms" required>
        <label for="agreeTerms">我已阅读并同意 <span class="agreeTerms" @click="showAgreeTermss">《条款和隐私政策》</span></label>

      </div>
      <button type="submit" :disabled="!agreeTerms" class="submit-button">注册</button>


    </form>


    <terms :showAgreeTerms="showAgreeTerms" />


    <slideVerification v-if="showSlideVerification" :fromData="fromData" :action="action" />
  </div>
</template>

<script lang="ts" >
import { defineComponent } from 'vue';

import slideVerification from './slideVerification.vue';
import InputField from './subComponents/InputField.vue'
import terms from './terms.vue';





export default defineComponent({
  components: {
    slideVerification,
    terms,
    InputField
  },
  data() {
    return {
      action: 'generalRegister',
      username: '',
      password: '',
      confirmPassword: '',
      invitationCode: '',
      validUsername: true,
      validConfirmPasswords: true,
      validPassword: true,
      agreeTerms: false,
      isBold: null,
      showSlideVerification: false,
      showAgreeTerms: false,
      fromData: {}
    };
  },
  methods: {
    validateUsername() {
      this.validUsername = /^[a-zA-Z0-9]{4,15}$/.test(this.username);
    },
    validatePassword() {
      const hasDifferentChars = new Set(this.password).size >= 3;
      const hasValidChars = /^[a-zA-Z0-9]*$/.test(this.password);
      this.validPassword = this.password.length >= 6 && hasDifferentChars && hasValidChars;
    },
    validConfirmPassword() {
      if (this.confirmPassword === this.password) {
        this.validConfirmPasswords = true;
      } else {
        this.validConfirmPasswords = false;
      }
    },
    showAgreeTermss() {

      this.showAgreeTerms = !this.showAgreeTerms;

    },
    slideVerification() {
      console.log('slideVerification');
      this.showSlideVerification = true;
      // 滑块验证逻辑
      this.handleSubmit();
    },
    handleSubmit() {
      this.validateUsername();
      this.validatePassword();

      //打包data
      this.fromData = {

        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
        invitationCode: this.invitationCode,
        agreeTerms: this.agreeTerms,

      }

      console.log(this.fromData);

    },

  }
});


</script>


<style scoped>
div {
  margin: 10px 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  margin: 10px 10px;
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
  background-color: #0A5CFF;
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


.agreeTerms {
  color: blue;
  font-size: 16px;
  font-family: 'PingFang SC', sans-serif; 
}
</style>