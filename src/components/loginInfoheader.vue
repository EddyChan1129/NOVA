<template>
  <div>
    <div class="registerHeader">
      <a :class="{ 'active': isBold === 'account' }" @click="toggleBold('account')"
        v-show="!showFindPasswordHead">账号登录</a>
      <a :class="{ 'active': isBold === 'phone' }" @click="toggleBold2('phone')"
        v-show="!showFindPasswordHead">手机号登录</a>
      <FindPasswordHead v-if="showFindPasswordHead" />
    </div>

    <div class="selectLine">
      <div v-if="isBold === 'account'" class="selectLine1"></div>
      <div v-if="isBold === 'phone'" class="selectLine2"></div>
    </div>


    <div class="separator"></div>
    <LoginInfo v-if="registertType && !showFindPasswordHead" />
    <PhoneLoginInfo v-if="!registertType && !showFindPasswordHead" />
    <label class="forgot-password" @click="showFindPassword" v-if="showFindPasswordWord"
      v-show="!showFindPasswordHead">忘记密码?</label>
  </div>
</template>

<script setup>
import PhoneLoginInfo from './phoneLoginInfo.vue';
import FindPasswordHead from './findPasswordHead.vue';
import LoginInfo from './loginInfo.vue';
import { ref } from 'vue';

const { emit } = defineEmits();
const isBold = ref(null);
let registertType = ref(true);


import { useRouter } from 'vue-router';
const router = useRouter();


const showFindPasswordHead = ref(false);
const showFindPasswordWord = ref(true);

const toggleBold = (type) => {
  isBold.value = type;
  registertType.value = true;
  showFindPasswordHead.value = false;
  showFindPasswordWord.value = true;
};

const toggleBold2 = (type) => {
  isBold.value = type;
  registertType.value = false;
  showFindPasswordHead.value = false;
  showFindPasswordWord.value = false;
};

const showFindPassword = () => {
  router.push('/findpw');
};


</script>




<style scoped>
div {
  margin: 20px;
}





.registerHeader {
  display: flex;
  justify-content: space-around;
  margin: 5%;
}

.active {
  font-weight: bold;
  text-decoration-thickness: 2px;
  text-decoration-skip-ink: none;

}

.white-square {
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 70%;
  background-color: white;
  z-index: 1000;
}

a {
  color: #5C9DFF;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
}

.active {
  font-weight: bold;
  color: #0A5CFF;
}

.separator {
  width: 100%;
  height: 1px;
  background-color: lightgray;
}

.forgot-password {
  position: relative;
  color: gray;
  position: absolute;
  top: 40%;
  left: 70%;

  padding: 10px;

}


.selectLine {
  display: flex;
  justify-content: space-around;
  margin: 5%;
  position: relative;
}

.selectLine1 {
  width: 20%;
  height: 4px;
  border-radius: 2px;
  background-color: blue;
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translateY(-50%);
}


.selectLine2 {
  width: 20%;
  height: 4px;
  border-radius: 2px;
  background-color: blue;
  position: absolute;
  top: 50%;
  left: 57%;
  transform: translateY(-10%);
}
</style>