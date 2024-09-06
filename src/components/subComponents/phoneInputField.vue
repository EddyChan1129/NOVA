<template>
    <div style="display: flex;" class="phoneNum">
        <div style="flex: 1;" class="phoneNum">
            <select v-model="countryCode" class="input-field2 select-field2" style="height: 60px;">
                <option value="+86">+86</option>
                <option value="+84">+84</option>
            </select>
        </div>
        <div style="flex: 3;" class="phoneNum">
            <input type="text" v-model="phoneNumber" placeholder="请输入手机号码"  class="input-field2 input-right2" @input="$emit('update:modelValue', $event.target.value)"/>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const { emit } = defineEmits();
const countryCode = ref('+86');
const phoneNumber = ref('');

const handleSubmit = () => {
    emit('submit-phone', { countryCode: countryCode.value, phoneNumber: phoneNumber.value });
};
</script>

<style scoped>
.phoneNum {
    margin: 0px;
}

.select-field2 {
    width: 100%;
    padding: 10px;
    margin-right: 5px;
    border: none;
    height: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #EFF6FE;
}

.input-right2 {
    width: 95%;
    padding: 10px;
    border: none;
    height: 40px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #EFF6FE;
}
</style>