<template>
    <div class="container">
        <!--    PART A -->
        <div class="item">
            <a class="title">支付密码</a>
            <div class="paymentPassword">
                <a class="paymentPassworda">{{ paymentPassword }}</a>
                <div class="openPassword" > <a @click="showEnablePaymentPasswordFunction">开启支付密码</a></div>
            </div>
            <a class="describe">*支付密码开启后、进入游戏场馆、积分兑换、提现、转额，将进行资金密码验证，可进一步保护您的资金安全</a>
        </div>

        <!--   PART B -->
        <div class="item">
            <a class="title">账户密码</a>
            <InputField type="password" v-model="oldPassword" placeholder="请输入旧密码" :rule="defaults" class="InputField" />
            <InputField type="password" v-model="newPassword" placeholder="请输入新密码" :rule="validPassword" @input="validatePassword" class="InputField" errormessage="兩次輸入的密碼不一致" />
            <a class="errormessage" v-if="!validPassword">至少8个字符，至少3个不同字符，英数字结合，不含特殊符号</a><br>
            <a class="describes">6到20个字符，需包括大小写和数字</a>
        
            <InputField type="password" v-model="confirmNewPassword" placeholder="请确认新密码" :rule="validPassword" @input="validConfirmPassword" class="InputField" errormessage="兩次輸入的密碼不一致" />
          
            <a class="errormessage2" v-if="!validPassword">再次输入密码不一致</a>
            <submitButton :buttonText="'确认更改'" @submit="handleSubmit" class="submitButton" />
            
        </div>

        <div class="item">

            
        </div>
    </div>
    <enablePaymentPassword class="enablePaymentPassword" :showEnablePaymentPasswords="showEnablePaymentPasswords"/>

</template>

<script setup>
import { ref } from 'vue'
import InputField from '../../subComponents/InputField.vue'
import submitButton from '../../subComponents/submitButton.vue'
import enablePaymentPassword from './enablePaymentPassword.vue'


const defaults = ref(true);
const paymentPassword = ref('未开启');
const validPassword = ref(true)

const oldPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');
const showEnablePaymentPasswords = ref(true);

const handleSubmit = () => {
    if(validPassword.value === true){
    console.log(oldPassword.value)
    console.log(newPassword.value)
    console.log(confirmNewPassword.value)
    }else{
        console.log('password not match')
       
    }
}

const validatePassword = () => {
    const hasDifferentChars = new Set(newPassword.value).size >= 3;
    const hasValidChars = /^[a-zA-Z0-9]*$/.test(newPassword.value);
    validPassword.value = newPassword.value.length >= 6 && hasDifferentChars && hasValidChars;
}

const validConfirmPassword = () => {
    if (confirmNewPassword.value === newPassword.value) {
        validPassword.value = true;
      
    } else {
        validPassword.value = false;
       
      
  
    }
}

const showEnablePaymentPasswordFunction = () =>{
    showEnablePaymentPasswords.value = !showEnablePaymentPasswords.value
    console.log(showEnablePaymentPasswords.value)
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 0 0;
}

.item {
    flex: 1;
    padding: 10px 40px 10px 20px;

}


.paymentPassword {
  width: calc(100% - 30px);
  padding: 10px;
  padding-left: 30px; 
  margin-bottom: 10px;
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: #EFF6FE;
  display: flex;
  align-items: center;
  margin: 10px 10px 10px 0;
}

.paymentPassworda{
    color: #8590A2;
}


.openPassword {
    margin-left: auto;
    margin-right: 10px;
    color: #0A5CFF;
}

.InputField {
    margin: 10px 10px 10px 0;
}

.title {
    font-weight: bold;
   

}

.describe{
    font-size: 12px;
    color: #8590A2;
    
}

.errormessage{
    font-size: 12px;
    color: #FF3333;
}

.errormessage2{
    font-size: 12px;
    color: #FF3333;
    position: absolute;
    top: 350px;
}

.describes{
    font-size: 12px;
    color: #8590A2;
    position: absolute;
    top: 235px;
}

.submitButton{
    margin: 30px 0 0 0;
}

.enablePaymentPassword{
 
}


</style>