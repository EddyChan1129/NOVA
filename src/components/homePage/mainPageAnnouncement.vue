<template>
    <div class="container">
        <div class="mainPics">
            <img :src="mainPicSource" :class="'mainPic' + mainPicProgress" @wheel="handleMouseWheel" />
        </div>
        <div class="progressBar">
            <div class="progressLine" :class="{ blueLine: mainPicProgress === 1 }">
                <div class="circle" :class="{ blueCircle: mainPicProgress === 1 }"></div>
            </div>
            <div class="progressLine" :class="{ blueLine: mainPicProgress === 2 }">
                <div class="circle" :class="{ blueCircle: mainPicProgress === 2 }"></div>
            </div>
            <div class="progressLine" :class="{ blueLine: mainPicProgress === 3 }">
                <div class="circle" :class="{ blueCircle: mainPicProgress === 3 }"></div>
            </div>
            <div class="progressLine" :class="{ blueLine: mainPicProgress === 4 }">
                <div class="circle" :class="{ blueCircle: mainPicProgress === 4 }"></div>
            </div>
            <div class="progressLine" :class="{ blueLine: mainPicProgress === 5 }">
                <div class="circle" :class="{ blueCircle: mainPicProgress === 5 }"></div>
            </div>
        </div>

        <div class="subMainPics">
            <subMainPic :pic="subMainPic1" :title="'邀请好友赚佣金'" :subtitle="'尽在 King Group 回馈'" @click="updateMainPicProgress(1)" />
            <subMainPic :pic="subMainPic2" :title="'5月福利'" :subtitle="'尽在 King Group 回馈'" @click="updateMainPicProgress(2)" />
            <subMainPic :pic="subMainPic2" :title="'5月福利'" :subtitle="'尽在 King Group 回馈'" @click="updateMainPicProgress(3)" />
            <subMainPic :pic="subMainPic2" :title="'5月福利'" :subtitle="'尽在 King Group 回馈'" @click="updateMainPicProgress(4)"/>
            <subMainPic :pic="subMainPic2" :title="'5月福利'" :subtitle="'尽在 King Group 回馈'" @click="updateMainPicProgress(5)"/>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import subMainPic1 from '@/assets/mainPageAnnouncement/subMainPic.png';
import subMainPic2 from '@/assets/mainPageAnnouncement/subMainPic2.png';
import mainPic1 from '@/assets/mainPageAnnouncement/mainPic1.png';
import mainPic2 from '@/assets/mainPageAnnouncement/mainPic2.png';
import mainPic3 from '@/assets/mainPageAnnouncement/mainPic3.png';
import mainPic4 from '@/assets/mainPageAnnouncement/mainPic4.png';
import mainPic5 from '@/assets/mainPageAnnouncement/mainPic5.png';

import subMainPic from './subMainPic.vue';

const mainPicProgress = ref(1);

const mainPicSource = computed(() => {
    switch (mainPicProgress.value) {
        case 1:
            return mainPic1;
        case 2:
            return mainPic2;
        case 3:
            return mainPic3;
        case 4:
            return mainPic4;
        case 5:
            return mainPic5;
        default:
            return mainPic;
    }
});

const updateMainPicProgress = (progress) => {
    mainPicProgress.value = progress;
};


const handleMouseWheel = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
        mainPicProgress.value = mainPicProgress.value > 1 ? mainPicProgress.value - 1 : 5;
    } else if (event.deltaY > 0) {
        mainPicProgress.value = mainPicProgress.value < 5 ? mainPicProgress.value + 1 : 1;
    }
};

onMounted(() => {
    setInterval(() => {
        if (mainPicProgress.value < 5) {
            mainPicProgress.value++;
        } else {
            mainPicProgress.value = 1;
        }
    }, 5000);
});


</script>



<style scoped>



.container {
    display: flex;
    flex-wrap: wrap;
    margin: 4%;
}

.mainPics {
    flex: 70%;
}

.mainPic1,
.mainPic2,
.mainPic3,
.mainPic4,
.mainPic5 {
    width: 100%;
}

.progressBar {
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.progressLine {
    position: relative;
    width: 4px;
    height: 110px;
    background-color: #ccc;
    transition: background-color 0.3s;
}

.circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
}

.blueLine {
    background-color: #1D6BF5;
}

.blueCircle {
    background-color: #1D6BF5;
}

.subMainPics {
    flex: 9;
    display: flex;
    flex-direction: column;
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity 0.5s;
}

.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
}
</style>