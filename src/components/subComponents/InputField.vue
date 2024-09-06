<template>
  <div class="input-container">
    <div class="logo-container">
      <img v-if="placeholder === '请输入您的账号'" src="@/assets/icon/userNameIcon.png" alt="Logo" class="logo" />
      <img v-if="type === 'password'" src="@/assets/icon/Union.png" alt="Logo" class="logos" />
      <img v-if="placeholder === '请输入验证码'" src="@/assets/icon/verificationCode.svg" alt="verificationCode" class="verificationCode" />
    </div>
    <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder" class="input-field" :class="{ 'error': !rule }" />
    <a v-if="placeholder === '请输入验证码'" class="getVerificationCode" @click="handleGetVerificationCode">
      
      {{ buttonText }}
    </a>

    <a v-if="placeholder === '请输入邮箱验证码'" class="getVerificationCode" @click="handleGetVerificationCode">
      
      {{ buttonText }}
    </a>

    <span v-if="!valid">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { ref, watch,computed } from 'vue'

const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  rule: Boolean,
  errorMessage: String,
  validationRules: {
    type: Array,
    default: () => []
  }
})

const model = ref(props.modelValue)
const valid = ref(true)
const errorMessage = ref('')
const isCountingDown = ref(false)
const countdownSeconds = ref(60)

function validateInput() {
  let isValid = true;

  if (!props.rule) {
    isValid = false;
    errorMessage.value = props.errorMessage;
  }

  valid.value = isValid;
}

function handleGetVerificationCode() {
  if (!isCountingDown.value) {
    isCountingDown.value = true;
    let seconds = countdownSeconds.value;
    const interval = setInterval(() => {
      seconds--;
      countdownSeconds.value = seconds;
      if (seconds === 0) {
        clearInterval(interval);
        isCountingDown.value = false;
        countdownSeconds.value = 60; // 重置倒计时
      }
    }, 1000);
  }
}

watch(() => props.modelValue, (newValue) => {
  model.value = newValue
})

watch(() => props.rule, () => {
  validateInput();
})

const buttonText = computed(() => {
  return isCountingDown.value ? `重发验证码(${countdownSeconds.value}S)` : '获取验证码';
})
</script>

<style scoped>
.input-container {
  position: relative;
}

.logo-container {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.logo {
  width: 30px; 
  transform: translateX(-20%);
  height: auto; 
}

.input-field {
  width: calc(100% - 30px);
  padding: 10px;
  padding-left: 30px; 
  margin-bottom: 10px;
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: #EFF6FE;
  font-family: 'PingFang SC', sans-serif; 
}

.input-field::placeholder {
  font-family: 'PingFang SC', sans-serif; 
}

span {
  color: red;
  font-size: 14px;
}

.error {
  border: 1px solid red;
  background-color: #FEEFEF;
}

.getVerificationCode{
  color: #0A5CFF;
  position: absolute;
  top: 20px;
  right: 30px;
}
.verificationCode{
  position: relative;
  top: -3px;
}
</style>