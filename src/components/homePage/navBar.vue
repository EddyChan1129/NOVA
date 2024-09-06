<template>
    <div class="navbar">
        <div class="nav-left">
            <div class="nav-lefts">
                <img :src="logo" class="logo" />
            </div>
            <div class="nav-lefts" v-if="!isHomePage">
                <img :src="Sports" class="Sports" />

            </div>
            <div class="nav-lefts">
                <img :src="lotteryTicket" class="lotteryTicket" />

            </div>
            <div class="nav-lefts">
                <img :src="Marbles" class="Marbles" />

             <!--    <a>{{ username }}</a>  -->
            </div>

        </div>
        <div class="nav-right">
            <navBarLogin v-if="loginState" />
            <navBarNoLogin v-else />
        </div>
    </div>
</template>

<script setup>
import logo from '@/assets/navBar/logo2.svg'
import lotteryTicket from '@/assets/navBar/lotteryTicket.svg'
import Marbles from '@/assets/navBar/Marbles.svg'
import Sports from '@/assets/navBar/Sports.svg'

import navBarLogin from '../homePage/navBarLogin.vue'
import navBarNoLogin from '../homePage/navBarNoLogin.vue'
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
import { useRouter } from 'vue-router';
const router = useRouter();


const username = computed(() => store.state.username);
const loginState = ref(false);

if (username.value !== '') {
    loginState.value = true;
}


const isHomePage = ref(false);
if (router.currentRoute.value.path === '/homePage') {
    isHomePage.value = true;
}

console.log('VUEX username', username)
</script>

<style scoped>
.navbar {
    height: 50px;
    width: 100%;
    display: flex;
}

.nav-left,
.nav-right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
}

.nav-left {
    background-color: #1D6BF5;
    justify-content: flex-start;


}

.nav-right {
    background-color: #1D6BF5;
    justify-content: flex-end;
}


.nav-lefts {
    margin: 4%;
}
</style>