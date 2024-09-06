<template>
    <div>
        <h3>验证手机号</h3>
        <h6>验证码已发送至 185 **** 9007</h6>
        
        <div class="verification-code-inputs">
            <input v-for="i in 6" :key="i" v-model="verificationCodes[i-1]" @input="handleInput(i)" maxlength="1" class="verification-input" />
        </div>

        <p @click="getVerificationCode" :class="{ 'disabled': disableGetVerificationCode }" class="get-code-button">{{ getVerificationCodeButtonText }}</p>

    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['account']);
const emit = defineEmits(['next-step']);
import { useRouter } from 'vue-router';

const router = useRouter();
const account = ref('');
const disableGetVerificationCode = ref(false);
const getVerificationCodeButtonText = ref('获取验证码');
let countDown = 60;

const verificationCodes = ref(Array(6).fill(''));

const handleInput = (index) => {
    if (verificationCodes.value[index - 1] && index < 6) {
        const nextInput = document.querySelector(`.verification-code-inputs input:nth-child(${index + 1})`);
        nextInput.focus();
    }
    
    if (verificationCodes.value.every(code => code !== '')) {
        console.log('验证码输入完成:', verificationCodes.value.join(''));
        emit('next-step');
    }
};

const getVerificationCode = () => {
    disableGetVerificationCode.value = true;
    getVerificationCodeButtonText.value = `${countDown}s后重新获取`;

    const timer = setInterval(() => {
        countDown--;
        getVerificationCodeButtonText.value = `${countDown}s后重新获取`;
        if (countDown <= 0) {
            clearInterval(timer);
            disableGetVerificationCode.value = false;
            getVerificationCodeButtonText.value = '重新获取验证码';
            countDown = 60;
        }
    }, 1000);
};

const noLogin = () => {
    router.push('/');
};
</script>

<style scoped>
.submit-button {
    background-color: #0A5CFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: block;
    margin: 30px auto;
    width: 90%;
    height: 50px;
}

.backLogin {
    color: blue;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.get-code-button {
    cursor: pointer;
    text-align: left;
    color: blue;
    margin-top: 10px;
}

.get-code-button.disabled {
    cursor: not-allowed;
    color: #ccc;
}

.verification-code-inputs {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin: 20px;
}

.verification-code-inputs input {
    width: 40px;
    height: 40px;
    text-align: center;
    margin: 0 5px;
}

.verification-input {
    width: 40px;
    height: 40px;
    text-align: center;
    margin: 0 5px;
    background-color: #EFF6FE;
    border: none;
    border-radius: 10px;
}
</style>