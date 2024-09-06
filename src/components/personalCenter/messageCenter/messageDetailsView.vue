<template>
    <div class="personalCenterRightView">
        <div class="contentWrapper">
            <div class="leftContent">
                <img :src="back" class="back" width="60px" @click="backs">
                <h1>{{ contents.title }}</h1>
                <a class="time">{{ contents.date }} {{ contents.time }}</a>
            </div>

            <div class="rightBtn">
                <img :src="backLeft" class="backLeft" width="15px" @click="decrementID">
                <a>{{ messageDetailsID + 1 }}/{{ contentCount }}</a>
                <img :src="backRight" class="backRight" width="15px" @click="incrementID">
                <a class="delete" @click="deletes">刪除</a>
            </div>
        </div>

        <div class="separator"></div>

        <p class="content">{{ contents.content }}</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import back from '@/assets/personalCenter/messageCenter/back.svg'
import backLeft from '@/assets/personalCenter/messageCenter/backLeft.svg'
import backRight from '@/assets/personalCenter/messageCenter/backRight.svg'

import { messageCenterContent } from '../../../utils/messageCenterContent';
import { siteNewsContent } from '../../../utils/siteNewsContent';

import { useStore } from 'vuex';
const store = useStore();
const content = ref({});
const contents = ref({});
const contentCount = ref(0);
const messageDetailsID = ref(0);

const backs = () => {
    store.commit('setPersonalCenterPage', 'messageCenter');
}

const messageType = computed(() => store.state.messageType);

if (messageType.value === 'announcement') {
    content.value = messageCenterContent;
} else {
    content.value = siteNewsContent;
}

contentCount.value = content.value.length;

contents.value = content.value.find(item => item.id === messageDetailsID.value);

const deletes = () => {
    console.log(contents.value);
}

const incrementID = () => {
    if (messageDetailsID.value < contentCount.value) {
        messageDetailsID.value++;
        contents.value = content.value.find(item => item.id === messageDetailsID.value);
    }
}

const decrementID = () => {
    if (messageDetailsID.value > 0) {
        messageDetailsID.value--;
        contents.value = content.value.find(item => item.id === messageDetailsID.value);
    }
}
</script>

<style scoped>
.personalCenterRightView {
    background-color: #fff;
    border-radius: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid #DCDFE4;
}


.separator {
    width: 100%;
    height: 1px;
    background-color: lightgray;
}


.contentWrapper {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid lightgray;
}


.rightBtn {
    display: flex;
    align-items: center;
    
}

.back{
    margin: 20px 0px 20px 20px;
}

.leftContent{
    margin: 10px;
}

.leftContent h1{
    margin: 0 0 10px 0;
}


.time{
    margin: 20px 10px 10px 15px;
}

.rightBtn{
    margin: 130px 50px 0 0px;
}

.rightBtn img{
    margin: 0 15px 0 15px;
}

.delete{
    color: #1D6BF5;
    border: 1px solid #1D6BF5;
    padding: 10px;
    border-radius: 10px;
}

.content{
    margin: 20px 80px 10px 80px;
}
</style>