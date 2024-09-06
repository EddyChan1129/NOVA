<template>
    <div class="personalCenterRights">
       <!--  <h1>Right >>>{{ page }}</h1> -->
        <component :is="currentView" />
    </div>
</template>

<script setup>
import personalInformationView from './personalInformation/personalInformationView.vue'
import messageCenterView from './messageCenter/messageCenterView.vue'
import messageDetailsView from './messageCenter/messageDetailsView.vue'
import PromotionsView from './Promotions/PromotionsView.vue'
import NotFind from './NotFind.vue'

import { ref, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const page = computed(() => store.state.personalCenterPage);


const currentView = computed(() => {
    switch (page.value) {
        case 'personalInformation':
            return personalInformationView;
        case 'messageCenter':
            return messageCenterView;
        case 'messageDetails':
            return messageDetailsView;
        case 'Promotions':
            return PromotionsView;
        default:
            return NotFind;
    }
});
</script>

<style scoped>
.personalCenterRights {

 
}
</style>