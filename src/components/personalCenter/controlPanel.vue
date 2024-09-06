<template>
    <div class="grid-container">
      <GridItem v-for="item in gridItems" :key="item.index" :index="item.index" :image-source="item.imageSource" :image-class="item.imageClass" :item-text="item.itemText" @click="changeBackground(item.index)" :selected="selected"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

import GridItem from "./subComponents/controlPanelIcon.vue";
import personalInformation from '@/assets/personalCenter/personalInformation.svg'
import reportQuery from '@/assets/personalCenter/reportQuery.svg'
import Promotions from '@/assets/personalCenter/Promotions.svg'

import agentApplication from '@/assets/personalCenter/agentApplication.svg'
import myWallet from '@/assets/personalCenter/myWallet.svg'
import myCollection from '@/assets/personalCenter/myCollection.svg'

import messageCenter from '@/assets/personalCenter/messageCenter.svg'
import helpCenter from '@/assets/personalCenter/helpCenter.svg'
import fundDetails from '@/assets/personalCenter/fundDetails.svg'

import feedback from '@/assets/personalCenter/feedback.svg'
import bettingRecords from '@/assets/personalCenter/bettingRecords.svg'
import APPDownload from '@/assets/personalCenter/APPDownload.svg'


const gridItems = [
  { index: 'personalInformation', imageSource: personalInformation, imageClass: 'personalInformation', itemText: '个人资料' },
  { index: 'bettingRecords', imageSource: bettingRecords, imageClass: 'bettingRecords', itemText: '投注记录' },
  { index: 'fundDetails', imageSource: fundDetails, imageClass: 'fundDetails', itemText: '资金明细' },

  { index: 'reportQuery', imageSource: reportQuery, imageClass: 'reportQuery', itemText: '报表查询' },
  { index: 'messageCenter', imageSource: messageCenter, imageClass: 'messageCenter', itemText: '消息中心' },
  { index: 'Promotions', imageSource: Promotions, imageClass: 'Promotions', itemText: '优惠活动' },

  { index: 'myCollection', imageSource: myCollection, imageClass: 'myCollection', itemText: '我的收藏' },
  { index: 'APPDownload', imageSource: APPDownload, imageClass: 'APPDownload', itemText: 'APP下载' },
  { index: 'agentApplication', imageSource: agentApplication, imageClass: 'agentApplication', itemText: '代理申请' },

  { index: 'feedback', imageSource: feedback, imageClass: 'feedback', itemText: '意见反馈' },
  { index: 'helpCenter', imageSource: helpCenter, imageClass: 'helpCenter', itemText: '帮助中心' },
  { index: 'myWallet', imageSource: myWallet, imageClass: 'myWallet', itemText: '我的钱包' },
  
 
];

const selected = ref('personalInformation');

const changeBackground = (index) => {
    selected.value = index;
    store.commit('setPersonalCenterPage', selected.value);
  
};
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-top: 10px;
    height: 95%;
    justify-items: center;
}

.grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    width: 70%;
    height: 70%;


}

img {
    height: 50px;
    width: auto;
    object-fit: cover;
}

a {
    margin-top: 5px;
}
</style>