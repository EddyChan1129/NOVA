<template>
    <div class="layout-container">
        <div class="announcement-nav">
            <announcementBar />
            <navBar />
        </div>

        <div class="personal-center-container">
            <personalCenterLeft class="personal-center-left" />
            <personalCenterRight class="personal-center-right" />
        </div>
    </div>
</template>

<script setup>
import announcementBar from '../components/homePage/announcementBar.vue'
import navBar from '../components/homePage/navBar.vue'
import personalCenterLeft from '../components/personalCenter/personalCenterLeft.vue'
import personalCenterRight from '../components/personalCenter/personalCenterRight.vue'
</script>

<style scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: linear-gradient(180deg, #D9E6FF 100%, #EFF4FF 30%);
}


.personal-center-container {
    flex: 1;
    display: flex;
}

.personal-center-left {
    flex: 2;
    margin: 1%;
}

.personal-center-right {
    flex: 6;
    margin: 1%;
}
</style>