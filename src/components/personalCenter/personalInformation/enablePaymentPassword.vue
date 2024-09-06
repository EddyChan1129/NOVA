<template>
    <div class="popupBox" v-if="showEnablePaymentPassword">
        <div class="underBg"></div>
        <div class="bg">


            <div class="mainTitle">
                <div class="leftTitle">
                    <a>验证手机号码</a>
                </div>
                <div class="rightTitle">
                    <a class="cancelButton" @click="close">取消</a>
                </div>
            </div>
            <div class="separator"></div>

            <!-- step1 -->
            <div class="step1content" v-if="step === 1">
                <a class="title">手机号</a><br>
                <phoneInputField class="InputFields" />
                <br>
                <a class="title">验证码</a>
                <InputField type="text" v-model="phoneVerificationCode" placeholder="请输入验证码" :rule="defaults"
                    class="InputField" />
                <div class="submitCenter">
                    <submitButton :buttonText="'提交'" @submit="handleSubmit" class="submitButton" />
                </div>
            </div>
            <!-- step2 -->



            <div class="step2content" v-if="step === 2">
                <a class="title">支付密码</a><br>
                <InputField type="password" v-model="newPassword" placeholder="请输入支付密码" :rule="validPassword"
                    @input="validatePassword" class="InputField" />

                <br>
                <a class="title">确认支付密码</a>
                <InputField type="password" v-model="confirmNewPassword" placeholder="请再次输入支付密码" :rule="validPassword"
                    @input="validConfirmPassword" class="InputField" />
                <a class="errorMessage" v-if="!validPassword">两次输入密码不一致</a>
                <div class="submitCenter">
                    <submitButton :buttonText="'提交'" @submit="handleSubmit2" class="submitButton" />
                </div>
            </div>


            <!-- step3 -->
             <div class="step3content" v-if="step3">
               
                <img :src="Vector" class="Vector" />
                <br>
                <a  class="vectorText">设置支付密码成功</a>
             </div>

        </div>
    </div>
</template>


<script setup>
import { ref, defineProps, watch } from 'vue';
import InputField from '../../subComponents/InputField.vue'
import submitButton from '../../subComponents/submitButton.vue' 
import phoneInputField from '../../subComponents/phoneInputField.vue'
import Vector from '@/assets/icon/Vector.png'

const props = defineProps({

    showEnablePaymentPasswords: {
        type: Boolean,
    },

})

const defaults = ref(true)
const step = ref(1)
const showEnablePaymentPassword = ref(false)
const phoneVerificationCode = ref('')

const newPassword = ref('');
const confirmNewPassword = ref('');
const validPassword = ref(true)
const step3 = ref(false)

const close = () => {
    step.value = 1;
    showEnablePaymentPassword.value = false;
}

const handleSubmit = () => {
   
    step.value = 2;
}


const handleSubmit2 = () => {
    step3.value = true;
}


watch(() => props.showEnablePaymentPasswords, () => {

    showEnablePaymentPassword.value = true;
});


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
</script>



<style scoped>
.popupBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.underBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.5);
    z-index: 1;
}

.bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background-color: white;
    z-index: 2;
}

.step3content {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 200px;
    background-color: white;
    
    z-index: 3;
}

.bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background-color: white;
    z-index: 2;
}


.mainTitle {
    display: flex;
    justify-content: space-between;
}

.leftTitle {
    text-align: center;
    font-size: 25px;
    margin: 20px 0 0 15px;
    flex-grow: 1;
    font-weight: bold;
}

.rightTitle {
    text-align: right;
    margin: 25px 15px 0 0;
}

.cancelButton {
    color: blue;

}

.separator {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 20px 0;
}

.title {
    font-weight: bold;


}

.step1content {
    margin: 10px 20px 10px 20px;
}

.step2content {
    margin: 10px 20px 10px 20px;
}

.InputField {
    margin: 5px 0 0 0;
}

.InputFields {
    margin: 10px 0 0 0;
}


.submitCenter {
    display: flex;
    justify-content: center;
    margin-top: 20px;

}

.errorMessage {
    color: red;
    font-size: 12px;
    position: relative;
    top: -10px;
}


.Vector{
margin: 20px 30% 10px 40%;

}

.vectorText{
    display: flex;
    justify-content: center;
    font-weight: bold;
}
</style>