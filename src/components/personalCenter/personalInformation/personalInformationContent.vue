<template>
    <div class="info">
        <div class="btn">
            <a :class="{ 'active': activeTab === 'basic' }" @click="setActiveTab('basic')">基本信息</a>
            <a :class="{ 'active': activeTab === 'security' }" @click="setActiveTab('security')">账号安全</a>
        </div>

        <component :is="activeTab === 'basic' ? basicInformation : acSecurity"></component>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import acSecurity from './acSecurity.vue';
import basicInformation from './basicInformation.vue';

const activeTab = ref('basic');

const setActiveTab = (tab) => {
    activeTab.value = tab;
};
</script>

<style scoped>
.btn a {
    color: #8590A2;
    border: 1px solid #8590A2;
    border-radius: 20px;
    padding: 15px 40px;
    box-shadow: inset 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
    margin: 0 50px 50px 50px;
}

.info {
    position: relative;
    top: 30px;
}

.btn .active {
    color: #1D6BF5;
    font-weight: bold;
    border: 1px solid #1D6BF5;
    border-radius: 20px;
    padding: 15px 40px;
    box-shadow: inset 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
}

.active {
    box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.1);
}
</style>