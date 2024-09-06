<template>

    <div class="registerSuccessBg">
        <br> <br> <br> <br> <br><br> <br> <br>
        <img :src="Vector" class="Vector element" />
        <a class="element">密码重设成功，请使用新密码登录</a>
        <button class="element submit-button" @click="redirectToHomePage">去登录</button>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import Vector from '@/assets/icon/Vector.png';

const router = useRouter();

const redirectToHomePage = () => {
    router.push('/');
};


</script>

<style scoped>
.registerSuccessBg {
    width: 95%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-54%, -50%);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.element {
    margin: 10px 0;
}

.submit-button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: block;
    margin: 0 auto;
    width: 70%;
    height: 50px;
}
</style>