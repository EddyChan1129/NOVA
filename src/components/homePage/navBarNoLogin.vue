<template>

    <img :src="customerService" class="customerService" /><a>|</a>


    <navMoney/>

    <img :src="noLoginStatus" class="noLoginStatus" @click="personalCenter"/>
    <a>或</a>
    <a class="tryPlay">试玩体验 ></a>

</template>

<script setup>
import customerService from '@/assets/navBar/customerService.svg'
import noLoginStatus from '@/assets/navBar/noLoginStatus.svg'
import { useRouter } from 'vue-router';
const router = useRouter();

import navMoney from './navMoney.vue'

const personalCenter = () => {
  router.push('/');

}
</script>

<style scoped>

img{
    margin: 15px;
}

.tryPlay{
    margin: 15px;
    width: 80px;
    white-space: nowrap;
    padding: 5px 10px;
    border: 2px solid #FFFFFF; 
    border-radius: 300px;
    text-decoration: none;
    font-size: 14px;
}


.customerService{
    white-space: nowrap;
}
</style>