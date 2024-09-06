<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>

        <div style="display: flex;" class="phoneNum">
          <div style="flex: 1;" class="phoneNum">
            <select v-model="countryCode" class="input-field2 select-field2 " style="height: 50px;">
              <option value="+86">+86</option>
              <option value="+84">+84</option>
            </select>
          </div>
          <div style="flex: 3;" class="phoneNum">
            <input type="text" v-model="phoneNumber" placeholder="请输入手机号码" @blur="validatePhoneNumber"
              class="input-field2 input-right2" />
          </div>
        </div>


        <span v-if="phoneError" class="error-message">{{ phoneError }}</span>
      </div>
      <div class="button-container">
        <input type="password" v-model="verificationCode" placeholder="请输入验证码" class="input-field" />
        <p @click="getVerificationCode" :disabled="disableGetVerificationCode" class="get-code-button">{{
          getVerificationCodeButtonText }}</p>
      </div>
      <div>
        <input type="text" v-model="invitationCode" placeholder="请输入邀请码" class="input-field" />
      </div>
      <div class="checkbox-row">
        <input type="checkbox" id="agreeTerms" v-model="agreeTerms" required>
        <label for="agreeTerms">我已閱讀並同意 <span class="agreeTerms" @click="showAgreeTermss">條款和私隱政策</span></label>
      </div>

      <button type="submit" :disabled="!agreeTerms" class="submit-button">注册</button>
    </form>

    <terms :showAgreeTerms="showAgreeTerms" />
    <slideVerification v-if="showSlideVerification" :fromData="fromData" :action="action" />

  </div>
</template>

<script>
import terms from './terms.vue';
import slideVerification from './slideVerification.vue';

export default {
  components: {
    terms,
    slideVerification
  },
  data() {
    return {
      action: 'phoneRegister',
      phone: '',
      countryCode: '+86',
      phoneNumber: '',
      verificationCode: '',
      invitationCode: '',
      agreeTerms: false,
      phoneError: '',
      disableGetVerificationCode: false,
      showAgreeTerms: false,
      showSlideVerification: false,
      verificationCodeCountdown: 60,
      fromData: {
        phone: '',
        verificationCode: '',
        invitationCode: '',
        agreeTerms: ''
      }
    };
  },
  computed: {
    getVerificationCodeButtonText() {
      return this.disableGetVerificationCode ? `重发验证码(${this.verificationCodeCountdown}s)` : '获取验证码';
    }
  },
  methods: {
    getVerificationCode() {
      console.log('發送驗証碼')
      if (!this.disableGetVerificationCode) {
        // Call the API to send SMS verification code
        const requestBody = {
          mobile: this.username // Assuming username contains the mobile number
        };

        fetch('https://stg-api.tzi789.com/sms/v1/send_sms_code', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        })
          .then(response => {
            if (response.ok) {
              console.log('SMS verification code sent successfully');

            } else {
              console.error('Failed to send SMS verification code');

            }
          })
          .catch(error => {
            console.error('Error sending SMS verification code:', error);

          });

        this.disableGetVerificationCode = true;
        this.verificationCodeCountdown = 60;
        this.startVerificationCodeCountdown();
      }
    },
    showAgreeTermss() {
      this.showAgreeTerms = !this.showAgreeTerms;
    },
    startVerificationCodeCountdown() {
      const countdownInterval = setInterval(() => {
        this.verificationCodeCountdown--;
        if (this.verificationCodeCountdown <= 0) {
          clearInterval(countdownInterval);
          this.disableGetVerificationCode = false;
        }
      }, 1000);
    },
    validatePhoneNumber() {
      const phoneNumberRegex = /^\d{1,11}$/;
      if (!phoneNumberRegex.test(this.phoneNumber)) {
        this.phoneError = '手机号码格式错误，请输入1到11位数字';
      } else {
        this.phoneError = '';
      }
    },
    validatePassword() {
      // 添加验证密码的逻辑
    },
    handleSubmit() {
      // 添加提交表單的邏輯
      this.showSlideVerification = true;

      this.phone = this.countryCode + this.phoneNumber;

      // 打包
      this.fromData = {
        phone: this.phone,
        verificationCode: this.verificationCode,
        invitationCode: this.invitationCode,
        agreeTerms: this.agreeTerms
      };


    }
  }
}
</script>

<style scoped>
.select-field {
  width: 20%;
  padding: 10px;
  margin-right: 5px;
  border: none;
  height: 30px;
  border-radius: 10px;
  background-color: #EFF6FE;
}

.input-right {
  width: 78%;
}


.error-message {
  color: red;
  font-size: 14px;
}
</style>

<style scoped>
div {
  margin: 20px;
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



.get-code-button {
  position: absolute;
  top: 180px;
  left: 70%;
  transform: translateX(-30%);
  color: blue;
  cursor: pointer;
  z-index: 1;
}

.agreeTerms {
  color: blue;
  font-size: 16px;
}


.select-field2 {
  width: 100%;
  padding: 10px;
  margin-right: 5px;
  border: none;
  height: 30px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #EFF6FE;
}

.input-right2 {
  width: 100%;
  padding: 10px;
  border: none;
  height: 30px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #EFF6FE;
}


.phoneNum {
  margin: 0px;
}
</style>