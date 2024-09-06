<template>
    <div class="pageContent">
        <announcementBar/>
        <navBar/>
        <mainPageAnnouncement/>
        <horizontalAnnouncement/>
        <newGameAnnouncement/>
        <newGameAnnouncement2/>
        <footers/>
        <img :src="mainPageBg" class="mainPageBg" />
        <img :src="LuckyWheelDraw" class="LuckyWheelDraw" />
     
    </div>

</template>

<script setup>
import announcementBar from '../components/homePage/announcementBar.vue'
import navBar from '../components/homePage/navBar.vue'
import mainPageAnnouncement from '../components/homePage/mainPageAnnouncement.vue'
import horizontalAnnouncement from '../components/homePage/horizontalAnnouncement.vue'
import newGameAnnouncement from '../components/homePage/newGameAnnouncement.vue'
import footers from '../components/homePage/footers.vue'
import newGameAnnouncement2 from '../components/homePage/newGameAnnouncement2.vue'

import mainPageBg from '@/assets/mainPageAnnouncement/mainPageBg.png';
import LuckyWheelDraw from '@/assets/mainPageAnnouncement/LuckyWheelDraw.png';
</script>

<style scoped>
.pageContent {
    position: relative;
}

.mainPageBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.newGameAnnouncement2 {
    position: absolute;
    bottom: 0;
    left: 50px;
    z-index: 1;
}



.LuckyWheelDraw {
    position: fixed;
    top: 50%;
    right: 3%;
    transform: translate(50%, -50%); 
}
</style>