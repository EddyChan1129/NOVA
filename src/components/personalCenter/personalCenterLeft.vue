<template>
    <div class="personalCenterLefts">
        <div class="accountInformation">
            <accountInformation />
        </div>

        <div class="controlPanel">
           <controlPanel/>
        </div>

        <div class="null">
     
        </div>
    </div>
</template>

<script setup>
import accountInformation from './accountInformation.vue'
import controlPanel from './controlPanel.vue'
</script>

<style scoped>
.personalCenterLefts {
    display: flex;
    flex-direction: column;
}

h1 {
    flex-grow: 1;
}

.accountInformation {
    flex-grow: 1;
    background-color: #fff;
    margin: 0 2% 2% 2%;
    border-radius: 30px;
    border: 2px solid #DCDFE4;
}

.controlPanel {
    flex-grow: 4;
    background: linear-gradient(to bottom, #FFFFFF, #BFD6FF);
    margin: 2% 2% 0% 2%;
    border-radius: 30px;
    border: 2px solid #DCDFE4;
}

.null {
    flex-grow: 1;
}
</style>