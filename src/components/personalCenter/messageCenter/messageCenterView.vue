<template>
    <div class="personalCenterRightView">
        <div class="messageCenterView">
            <h1 class="mainTitle">消息中心</h1>



            <div class="messageCenterHeader">
                <a :class="{ 'active': isBold === 'announcement' }" @click="toggleBold('announcement')">公告</a>
                <a :class="{ 'active': isBold === 'siteNews' }" @click="toggleBold2('siteNews')">站内消息</a>
            </div>
            <div class="selectLine">
                <div v-if="isBold === 'announcement'" class="selectLine1"></div>
                <div v-if="isBold === 'siteNews'" class="selectLine2"></div>
            </div>
            <div class="separator"></div>




            <announcementContent v-if="announcement" />
            <siteNewsContent v-if="!announcement" />

        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import siteNewsContent from './siteNewsContent.vue';
import announcementContent from './announcementContent.vue';



const isBold = ref('announcement');
let announcement = ref(true);


const toggleBold = (type) => {
    isBold.value = type;
    announcement.value = true;
};

const toggleBold2 = (type) => {
    isBold.value = type;
    announcement.value = false;
};


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


.mainTitle {
    color: #1D6BF5;

}

.messageCenterView {
    margin: 20px 30px 30px 30px;
}




a {
    color: #5C9DFF;
    cursor: pointer;
    text-align: center;
    margin: 20px;
    font-size: 20px;
    font-family: 'PingFang SC', sans-serif;
}

.active {
    color: #0A5CFF;
}


.separator {
    width: 100%;
    height: 1px;
    background-color: lightgray;
}

.selectLine {
    display: flex;
    position: relative;
}

.selectLine1 {
    width: 3%;
    height: 4px;
    border-radius: 2px;
    background-color: #0A5CFF;
    position: absolute;

    left: 1%;

}


.selectLine2 {
    width: 5%;
    height: 4px;
    border-radius: 2px;
    background-color: #0A5CFF;
    position: absolute;
    left: 7%;

}


.messageCenterHeader {
    margin: 50px 0 20px 0;
}
</style>