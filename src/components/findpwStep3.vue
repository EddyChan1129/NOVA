<template>
    <div>
        <h3>重设密码</h3>
        <InputField v-model="pw" placeholder="请输入账号密码" rule="true" errormessage="请输入有效账号" type="password" />
   
        <InputField v-model="newPw" placeholder="请再次输入账号密码" rule="true" errormessage="请输入有效账号" type="password" />
        <button type="submit" class="submit-button" @click="nextStep">确定</button>
      
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputField from '../components/subComponents/InputField.vue'
import { useRouter } from 'vue-router';
const props = defineProps(['account']);
const emit = defineEmits(['next-step']);

const router = useRouter();

const pw = ref('');
const newPw = ref('');

const nextStep = () => {
  
  emit('next-step');
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