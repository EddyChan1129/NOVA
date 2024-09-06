<template>
    <div class="personalCenterRightView">
        <div class="ProgressBar">
           <personalInformationProgressBar/>
        </div>
        <div class="Information">
           <personalInformationContent/>
        </div>
    </div>
</template>

<script setup>
import personalInformationProgressBar from './personalInformationProgressBar.vue'
import personalInformationContent from './personalInformationContent.vue'
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

.ProgressBar {
    flex: 2;
    border-radius: 30px 30px 0px 0px;
    background-color: #EFF6FE;
}

.Information {
    flex: 6; 
    border-radius: 0px 0px 30px 30px;
    background-color:#fff;
}
</style>