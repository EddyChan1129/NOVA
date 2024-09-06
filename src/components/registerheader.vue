<template>
  <div>
    <div class="registerHeader">
      <a :class="{ 'active': isBold === 'account' }" @click="toggleBold('account')">账号注册 </a>
      <!--   <a :class="{ 'active': isBold === 'account' }" @click="toggleBold('account')">{{ showRegisterState }} </a> -->

      <!--  <div>{{ t('hero.slogan-focus') }}</div>
     <div>{{ t('register') }} 
      <div>{{ selectedLanguage }}</div>  -->
      <a :class="{ 'active': isBold === 'phone' }" @click="toggleBold2('phone')">手机号注册</a>
    </div>

    <div class="selectLine">
      <div v-if="isBold === 'account'" class="selectLine1"></div>
      <div v-if="isBold === 'phone'" class="selectLine2"></div>
    </div>

    <div class="separator"></div>

    <RegisterInfo v-if="registertType" />
    <PhoneRegisterInfo v-if="!registertType" />
    <RegisterSuccess v-if="showRegisterSuccess" />

  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import PhoneRegisterInfo from './phoneRegisterInfo.vue';
import RegisterInfo from './registerInfo.vue';
import RegisterSuccess from './RegisterSuccess.vue';

import TWlogo from '@/assets/loginPage/TW.png';
import CNlogo from '@/assets/loginPage/CN.png';
import ENlogo from '@/assets/loginPage/EN.png';

import { setLocale } from '../locales/index';
const { t } = useI18n();
const selectedLanguage = ref('zh-CN');

const store = useStore();
const showRegisterState = computed(() => store.state.showRegisterState);



const isBold = ref(null);
let registertType = ref(true);
let showRegisterSuccess = ref(showRegisterState);

const toggleBold = (type) => {
  isBold.value = type;
  registertType.value = true;
};

const toggleBold2 = (type) => {
  isBold.value = type;
  registertType.value = false;
};

watch(selectedLanguage, (newVal, oldVal) => {
  console.log('變語言');
  setLocale(newVal);
});
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
  font-family: 'PingFang SC', sans-serif;
}

.active {
  color: #0A5CFF;
}

.separator {
  width: 100%;
  height: 1px;
  background-color: lightgray;
}

.select-language {
  position: relative;
  text-align: center;

}

.language-dropdown {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-200%, -500%);
  padding: 5px 15px;

  background-color: transparent;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid #E0E0E0;
}

.language-dropdown option:hover {
  background-color: #D7E5FF;
}

.language-dropdown option:checked:before {
  content: " ✓";
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