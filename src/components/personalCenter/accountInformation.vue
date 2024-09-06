<template>
    <div class="container">
        <div class="left">
            <img :src="icon" class="icon" />
        </div>
        <div class="right">
            <a class="Name">{{ username }}</a> <img :src="newMember" class="newMember" />
            
            <br>
            <a class="idName">ID: {{ username }}</a> <img :src="copy" class="copy" @click="copyIdName" />
        </div>
    </div>

    <div class="dividingLine">

    </div>
    <div class="actions">
            <div class="action" @click="changePersonalCenterRightTopUp">
                <img :src="deposit" class="deposit" /> <a>充值</a>
            </div>
            <div class="action" @click="changePersonalCenterRightWithdrawMoney">
                <img :src="withdraw" class="withdraw" /> <a>取款</a>
            </div>
        </div>
    <img :src="accountInformationBG" class="accountInformationBG" />
</template>

<script setup>
import { computed, ref } from 'vue';
import icon from '@/assets/personalCenter/icon.svg'
import newMember from '@/assets/personalCenter/newMember.svg'
import copy from '@/assets/personalCenter/copy.svg'
import deposit from '@/assets/personalCenter/deposit.svg'
import withdraw from '@/assets/personalCenter/withdraw.svg'

import accountInformationBG from '@/assets/personalCenter/accountInformationBG.svg'
import { useStore } from 'vuex';
const store = useStore();


const username = computed(() => store.state.username);

const copyIdName = () => {
    const idNameText = document.querySelector('.idName').innerText;
    const idNameValue = idNameText.split(': ')[1]; // 获取冒号后的内容
    const tempInput = document.createElement('input');
    tempInput.value = idNameValue;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('copied')
}

const changePersonalCenterRightTopUp = () =>{
    store.commit('setPersonalCenterPage', 'topUp');
}


const changePersonalCenterRightWithdrawMoney = () =>{
    store.commit('setPersonalCenterPage', 'withdrawMoney');
}

</script>

<style scoped>
.container {
    display: flex;
    margin: 10%;
  

}
.left {
    flex: 1;
}

.right {
    flex: 5;
}

.icon {
    height: 50px;
}


.withdraw{
    height: 40px;
}

.deposit{
    height: 40px;
}

.Name {
    font-size: 20px;
}

.idName {
    color: #1D6BF5;
}

.dividingLine {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 0% 0;
    display: flex;
    justify-content: center;
}

.actions {
    display: flex;

}

.action {
    font-size: 25px;
    display: flex;
    align-items: center;
    margin: 25px 50px 0px 50px;
}

.action a{
    margin: 0 0 0 10px;
}

.accountInformationBG {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px; 
    background-image: url("../../assets/personalCenter/accountInformationBG.svg");
    background-size: cover; 
    z-index: -1; 
}
</style>