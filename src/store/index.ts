
import { createStore } from 'vuex';


export default createStore({
  state: {
    showRegisterState: false,
    username: '',
    personalCenterPage:'personalInformation',

    messageType:'',//messageCenter
    messageDetailsID:0, //messageCenter

  },
  mutations: {
    setRegisterSuccess(state, value) {
      state.showRegisterState = !state.showRegisterState;
    },
    setUsername(state, value) {
      state.showRegisterState = !state.showRegisterState;
      state.username = value; // 更新 username 的值为传入的 value
    },
    setPersonalCenterPage(state, index) {
     
      state.personalCenterPage = index; // 更新 personalCenterPage 的值为传入的 value
    
    },
    setMessageDetailsID(state, index) {
     
      state.messageDetailsID = index; 
    },
    setMessagType(state, index) {
     
      state.messageType = index; 
    },
  },
  actions: {
    updateRegisterSuccess({ commit }, value) {
      commit('setRegisterSuccess', value);
    },

  },
  getters: {
    getRegisterSuccess(state) {
      return state.showRegisterState;
    },
    
  }
});