<template>
  <div v-if="showComponent" class="centered-content">
    <div>

      <iframe ref="myFrame" src="https://stg-captcha.tzi789.com/zh?callback=successCallback"
        style="width: 250%; height: 500px; border: none;"></iframe>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineProps } from 'vue';
import { useStore } from 'vuex';
import { processGeneralRegister, processGeneralLogin, processPhoneLogin, processPhoneRegister, setUsername, setRegisterSuccess } from '../utils/userProcess';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const { fromData, action } = defineProps(['fromData', 'action']);
const showComponent = ref(true);

const onSuccessCallback = (event) => {
  const data = event.data;

  if (data.event === 'close') {
    showComponent.value = false;
  }

  if (data.status === 'success') {
    showComponent.value = false;

    const account = fromData.username;
    const token = data.token;

    if (action === 'generalRegister') {
      store.commit('setUsername', account);
      processGeneralRegister(account, fromData.password, token, fromData, setRegisterSuccess);
    
    } else if (action === 'generalLogin') {
      processGeneralLogin(account, fromData.password, token, fromData, setUsername);
      store.commit('setUsername', fromData.username);
      router.push('/homePage');
    } else if (action === 'phoneLogin') {
      processPhoneLogin(account, token, fromData, setUsername);
    } else if (action === 'phoneRegister') {
      processPhoneRegister(account, fromData.verificationCode, token, fromData, setUsername, setRegisterSuccess);
    }
  }
};

onMounted(() => {
  window.addEventListener('message', onSuccessCallback);
});

onBeforeUnmount(() => {
  window.removeEventListener('message', onSuccessCallback);
});
</script>

<style scoped>
.centered-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-350%, -50%);
  text-align: center;
}

.centered-content::before {
  content: "";
  position: fixed;
  top: -50%;
  left: -650%;
  width: 200vw;
  height: 200vh;
  background-color: rgba(128, 128, 128, 0.5);

  z-index: -1;
}

.centered-content::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 120%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background-color: white;
  z-index: -1;
}

/* 可选的组件样式 */
h1 {
  color: blue;
  font-size: 24px;
}
</style>