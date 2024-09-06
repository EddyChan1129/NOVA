<template>
    <div class="container">
        <div class="white-square">
            <a class="findpwHead">找回密碼</a>
            <div class="blue-lines">
                <div :style="{ backgroundColor: step >= 1 ? '#0A5CFF' : '#D5E2F7' }" class="blue-line"></div>
                <div :style="{ backgroundColor: step >= 2 ? '#0A5CFF' : '#D5E2F7' }" class="blue-line"></div>
                <div :style="{ backgroundColor: step >= 3 ? '#0A5CFF' : '#D5E2F7' }" class="blue-line"></div>
            </div>



            <findpwStep1 v-if="step === 1" class="findpwStep1" @next-step="handleNextStep" />
            <findpwStep2 v-if="step === 2" class="findpwStep1" @next-step="handleNextStep2" />
            <findpwStep3 v-if="step === 3" class="findpwStep1" @next-step="handleNextStep3" />
            <findpwStep4 v-if="step === 4" class="findpwStep1" @next-step="handleNextStep" />

            <a class="call">联系客服</a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import findpwStep1 from '../components/findpwStep1.vue';
import findpwStep2 from '../components/findpwStep2.vue';
import findpwStep3 from '../components/findpwStep3.vue';
import findpwStep4 from '../components/findpwStep4.vue';

const step = ref(1);

const handleNextStep = (stepValue) => {
    step.value = 2;

}

const handleNextStep2 = (stepValue) => {
    step.value = 3;
    console.log(step.value)
}

const handleNextStep3 = (stepValue) => {
    step.value = 4;
    console.log(step.value)
}
</script>

<style scoped>
.findpwStep1 {
    width: 80%;
}

.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.white-square {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    width: 25%;
    height: 70%;
    background-color: white;
    z-index: 1000;
    border-radius: 2px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.blue-lines {
    display: flex;
}

.blue-line {
    width: 100px;
    height: 4px;
    margin: 20px 5px;
    border-radius: 2px;
}

.findpwHead {
    color: #0A5CFF;
    margin-top: 30px;
    font-size: 20px;
}

.call {
    color: blue;
    text-align: center;
    position: absolute;
    bottom: 20px;
    width: 100%;
}
</style>