<template>
    <div>
        <h3>填写账号以获取信息</h3>
        <InputField v-model="account" placeholder="请输入您的账号" rule="true" errormessage="请输入有效账号" />
        <button class="submit-button" @click="nextStep">确定</button>
        <a class="backLogin" @click="login">返回登录</a>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import InputField from '../components/subComponents/InputField.vue';
import { useRouter } from 'vue-router';

const props = defineProps(['account']);
const emit = defineEmits(['next-step']);

const account = ref('');
const router = useRouter();

const nextStep = () => {
  
    emit('next-step');
}

const login = () => {
    router.push('/');
}
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
</style>