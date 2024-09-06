import userRegister from './userRegister';
import userLogin from './userLogin';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

export const processGeneralRegister = async (account, password, token) => {
   

  const result = await userRegister().accountRegister(account, password, token);

  if (result === 11008) {
    alert("账号已存在,請再註冊");
    location.reload();
  } else if (result === 200) {
    
   console.log('vueX success')
  }
};

export const processGeneralLogin = async (account, password, token) => {
 
  const result = await userLogin().accountLogin(account, password, token);

  if (result === 11009 || result === 11010) {
    alert("登入失敗");
    router.push('/');
    location.reload();
  } else if (result === 200) {
    setUsername(account);
    router.push('/homePage');
  }
};

export const processPhoneLogin = async (account, password, token) => {


  const result = await userLogin().phoneLogin(account, token);

  if (result === 11009 || result === 11010) {
    alert("登入失敗");
    router.push('/');
    location.reload();
  } else if (result === 200) {
    setUsername(account);
    router.push('/homePage');
  }
};

export const processPhoneRegister = async (account, password, token) => {


  const result = await userRegister().phoneRegister(account, password, token);

  if (result === 11008) {
    alert("账号已存在");
  } else if (result === 200) {
    setUsername(account);
    setRegisterSuccess();
  }
};



export const setUsername = (fromData) => {
    console.log("setUsername VUEX");
    store.commit('setUsername', fromData.username);
  }

  export const setRegisterSuccess = () => {
    console.log("setRegisterSuccess VUEX")
    store.commit('setRegisterSuccess')
  }
  