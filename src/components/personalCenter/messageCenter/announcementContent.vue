<template>
    <div class="topBtn">
        <div class="btn">
            <a v-if='!edit' :class="{ 'active': activeTab === 'all' }" @click="setActiveTab('all')">全部</a>

            <p v-if='edit' class="allEdit">
                全部             
                <img v-if='checkBox && edit' :src="checkBoxYes" class="checkBoxYes" @click="toggleCheckBox" />
                <img v-if='!checkBox && edit' :src="checkBoxNo" class="checkBoxNo" @click="toggleCheckBox" />
            </p>



            <a v-if='!edit' :class="{ 'active': activeTab === 'activity' }" @click="setActiveTab('activity')">活动</a>
            <a v-if='!edit' :class="{ 'active': activeTab === 'deposit' }" @click="setActiveTab('deposit')">充提</a>
        </div>

        <div class="btn2">
            <a v-if='!edit' class="read">一键已读</a>
            <a v-if='!edit' class="delete">一键删除</a>
            <a v-if='edit' class="reads">已读</a>
            <a v-if='edit' class="deletes">删除</a>
            <a class="edit" @click="editBtn()">{{ edit ? '取消' : '编辑' }}</a>
        </div>
    </div>

    <div class="content">
        <div v-for="message in filteredMessages" :key="message.id" class="messageItem" @click="handleMessageClick(message.id)">

            <div class="messageHeader">
                <img v-if="isNewMessage(message.date)" :src="newIcon" class="newIcon" />

                <h2>{{ message.title }}</h2>

                <a>{{ message.date }} {{ message.time }}</a>
                 <img v-if='checkBox && edit' :src="checkBoxYes" class="checkBoxYes" @click="toggleCheckBox" />
                <img v-if='!checkBox && edit' :src="checkBoxNo" class="checkBoxNo" @click="toggleCheckBox" />
            </div>
            <p>{{ truncateContent(message.content) }}</p>


        </div>

        
    </div>


</template>

<script setup>
import { ref, computed } from 'vue';

//hard code
import { messageCenterContent } from '../../../utils/messageCenterContent';

import checkBoxNo from '@/assets/personalCenter/messageCenter/checkBoxNo.svg'
import checkBoxYes from '@/assets/personalCenter/messageCenter/checkBoxYes.svg'

//api code
import messageCenterContentApi from '../../../utils/messageCenterContentApi';

import { useStore } from 'vuex';
const store = useStore();

const activeTab = ref('all');
const edit = ref(false);
const messageCenterContents = messageCenterContentApi();
const  checkBox = ref(false)

const editBtn = () => {
    edit.value = !edit.value;


    console.log('Message Center Content Data:');
    messageCenterContents.getMessageCenterContent();
    checkBox.value =  false;
}


const setActiveTab = (tab) => {
    activeTab.value = tab;
};

const truncateContent = (content) => {
    const maxLength = 80;
    return content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
};

const filteredMessages = computed(() => {
    if (activeTab.value === 'all') {
        return messageCenterContent;
    } else {
        return messageCenterContent.filter(message => message.type === activeTab.value);
    }
});

const isNewMessage = (messageDate) => {
    const messageDateObj = new Date(messageDate);
    const currentTime = new Date();
    const diffTime = currentTime.getTime() - messageDateObj.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

    return diffDays <= 7;
};

const toggleCheckBox = () => {

    checkBox.value = !checkBox.value; 
};


const handleMessageClick = (messageId) => {
    console.log('Clicked on message with ID:', messageId);

    store.commit('setMessagType', 'announcement');
    store.commit('setMessageDetailsID', messageId);
    store.commit('setPersonalCenterPage', 'messageDetails');
};

</script>



<style scoped>
.topBtn {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 20px;
}

.btn,
.btn2 {
    display: flex;
}


.btn a {
    color: #8590A2;
    border: 1px solid #8590A2;
    border-radius: 10px;
    padding: 10px 12px;
    box-shadow: inset 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
    margin: 0 10px 10px 0;
}

.btn p {
    font-size: 20px;
}


.btn .active,
.btn2 .active {
    color: #1D6BF5;
    font-weight: bold;
    border: 1px solid #1D6BF5;
    border-radius: 10px;
    box-shadow: inset 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
}

.active {
    box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.1);
}

/* NO EDIT */
.read {
    color: #fff;
    background-color: #1D6BF5;
    border-radius: 10px;
    padding: 10px 12px;
    margin: 0 10px 10px 0;
}

.delete {
    color: #1D6BF5;
    border: 1px solid #1D6BF5;
    border-radius: 10px;
    padding: 10px 12px;
    margin: 0 10px 10px 0;
}


.edit {
    color: #1D6BF5;
    border-radius: 10px;
    padding: 10px 12px;
    margin: 0 10px 10px 0;
}

/* EDIT */

.reads {
    color: #fff;
    background-color: #DDEAFF;
    border-radius: 10px;
    padding: 10px 12px;
    margin: 0 10px 10px 0;
}

.deletes {
    color: #DDEAFF;
    border: 1px solid #DDEAFF;
    border-radius: 10px;
    padding: 10px 12px;
    margin: 0 10px 10px 0;
}

.messageItem {
    background: #d6e6ff;
    margin: 30px 0 10px 40px;
    padding: 30px 40px;
    border-radius: 10px;
}

.messageHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0;
}

.messageHeader h2 {
    margin: 0;
}

.messageHeader a {
    margin-left: auto;
}

.newIcon {
    width: 2%;
}


.checkBoxNo {
    position: relative;
    right: 105%;
}

.checkBoxYes{
    position: relative;
    right: 105%;
}

.allEdit{
    margin: 0 0 0 15px;
}


.allEdit img{
    margin: 0 0 -5px 0;
}
</style>