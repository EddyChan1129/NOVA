<template>
  <div class="split-screen">
    <div class="left">

      <div>
        <img :src="bg2" class="bg2-image" />
        <img src="/image/background/topLeft.png" class="bg1-image" />
      </div>

      <div>
        <img :src="logo" class="logo" />
        <br>
        <h1 class="title">欢迎来到皇者</h1>
        <p class="subTitle">充满刺激和乐趣的娱乐平台</p>
        <br>
        <img :src="mainPic" class="mainPic" />
      </div>
    </div>

    <div class="right">
      <img :src="bg3" class="bg3-image" />
      <img :src="bg4" class="bg4-image" />
      <img :src="bg1" class="bg5-image" />
      <img :src="bg6" class="bg6-image" />

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import logo from '@/assets/logo.png'
import mainPic from '@/assets/mainPic.png'
import bg1 from '@/assets/background/bg1.png'
import bg2 from '@/assets/background/bg2.png'
import bg3 from '@/assets/background/bg3.png'
import bg4 from '@/assets/background/bg4.png'
import bg6 from '@/assets/background/bg5.png'

</script>

<style scoped>
/* .bottom-split-screen {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: red;
} */

.split-screen {
  display: flex;
  height: 100vh;
}

.left {
  background-color: #fff;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right {
  background-color: #0A6CFF;
  width: 30%;
}

.bg2-image {
  position: absolute;
  top: 0%;
  left: 5%;
  width: 10%;

}


.bg1-image {
  position: absolute;
  top: 10%;
  left: 12.5%;
  width: 5%;
}

.logo {
  position: absolute;
  top: 25%;
  left: 15%;
  width: 10%;
}

.title {
  position: absolute;
  top: 30%;
  left: 15%;
  font-size: 250%;

}


.subTitle {
  position: absolute;
  top: 36%;
  left: 15%;
  font-size: 180%;
  color: #626F86;
}

.mainPic {
  position: absolute;
  top: 50%;
  left: 15%;
  font-size: 180%;
}


.bg3-image {
  position: absolute;
  top: 35%;
  left: 85%;
  font-size: 180%;
}

.bg4-image {
  position: absolute;
  top: 10%;
  left: 80%;
  font-size: 180%;
}

.bg5-image {
  position: absolute;
  top: 10%;
  left: 87%;
  width: 5%;
}

.bg6-image {
  position: absolute;
  top: 10%;
  left: 90%;
  width: 10%;
}
</style>