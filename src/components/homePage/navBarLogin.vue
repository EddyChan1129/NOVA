<template>
    <img v-if="!isHomePage" :src="promotion" class="promotion" />
    <img v-if="!isHomePage" :src="acting" class="acting" />
    <img v-if="!isHomePage" :src="discount" class="discount" />

    <img :src="customerService" class="customerService" /><a>|</a>
    <img :src="deposit" class="deposit" />
    <img :src="withdrawMoney" class="withdrawMoney" />

    <navMoney/>

    <img :src="loginStatus" class="loginStatus" @click="personalCenter"/>


</template>

<script setup>
import { ref } from 'vue';
import customerService from '@/assets/navBar/customerService.svg'
import loginStatus from '@/assets/navBar/loginStatus.svg'
import deposit from '@/assets/navBar/deposit.svg'
import withdrawMoney from '@/assets/navBar/withdrawMoney.svg'
import promotion from '@/assets/navBar/promotion.svg'
import acting from '@/assets/navBar/acting.svg'
import discount from '@/assets/navBar/discount.svg'




import navMoney from './navMoney.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const isHomePage = ref(false);

const personalCenter = () => {
  router.push('/personalCenter');

}


if (router.currentRoute.value.path === '/homePage') {
    isHomePage.value = true;
}
</script>

<style scoped>

img{
    margin: 15px;
}


</style>