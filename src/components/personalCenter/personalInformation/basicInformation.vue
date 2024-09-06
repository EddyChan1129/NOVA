<template>
    <div class="container">
        <!--    PART A -->
        <div class="item">
            <a class="title">真实姓名</a>
            <InputField type="text" v-model="nickName" placeholder="请填写真实姓名" @input="nickName" :rule="defaults"
                class="InputField" />
            <a class="subtitle">*平台只会转账到该姓名下的银行卡，否则充值无法到账</a>
            <br>
            <a class="title">账号注册日</a>
            <InputField type="text" v-model="registrationDate" placeholder="2023年10月12日 15：08：03" @input="nickName"
                :rule="defaults" class="InputField" />
            <a class="title">性别</a>
            <br>
            <selector :options="['男', '女', '其他']" v-model="selectedGender" :defaultOption="'请选择性别'" class="selector" />
            <br>
            <a class="title">出生日期</a>
            <DateTimePicker v-model="selectedDate"/>
            <submitButton :buttonText="'提交'" @submit="handleSubmitA" class="submitButton" />

        </div>



        <!--   PART B -->
        <div class="item">
            <a class="title">手机号码</a>
            <phoneInputField @submit-phone="handleSubmitB" class="InputField" />
            <br>
            <InputField type="text" v-model="phoneVerificationCode" placeholder="请输入验证码" :rule="defaults"
                class="InputField" />


            <submitButton :buttonText="'提交'" @submit="handleSubmitB" class="submitButtonB" />




        </div>



        <div class="item">

            <a class="title">邮箱地址</a>
            <InputField type="text" v-model="email" placeholder="请输入邮箱地址" :rule="defaults" class="InputField" />
            <br>
            <InputField type="text" v-model="emailVerificationCode" placeholder="请输入邮箱验证码" :rule="defaults"
                class="InputField" />


            <submitButton :buttonText="'提交'" @submit="handleSubmitC" class="submitButtonB" />

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import InputField from '../../subComponents/InputField.vue'
import selector from '../../subComponents/selector.vue'
import submitButton from '../../subComponents/submitButton.vue'
import DateTimePicker from '../../subComponents/DateTimePicker.vue'
import phoneInputField from '../../subComponents/phoneInputField.vue'


const defaults = ref(true)

const selectedGender = ref('');
const nickName = ref('');
const registrationDate = ref('');
const phone = ref('')
const phoneVerificationCode = ref('');
const email = ref('');
const emailVerificationCode = ref('');
const selectedDate = ref(null);



const handleSubmitA = () => {
    console.log('出生日期:', selectedDate.value);
    console.log('真实姓名:', nickName.value);
    console.log('账号注册日:', registrationDate.value);
    console.log('性别:', selectedGender.value);
};


const handleSubmitB = () => {
    console.log('電話驗証碼', verificationCode.value);
};


const handleSubmitC = () => {
    console.log('電郵', email.value);
    console.log('電郵驗証碼', emailVerificationCode.value);
};
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

.InputField {
    margin: 5px 10px 10px 0;
}

.selector {
    width: 100%;
}



.title {
    font-weight: bold;

}

.subtitle {
    font-size: 15px;
    position: absolute;
    top: 160px;
}


.submitButton {
    margin: 20px auto 0 auto;
    display: block;
    width: 100%;

}

.submitButtonB {
    margin: 20px auto 0 auto;
    display: block;
    width: 100%;

}
</style>