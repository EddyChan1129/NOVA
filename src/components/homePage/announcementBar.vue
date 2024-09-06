<template>
    <div class="announcement">
  
         <img :src="announcementIcon" class="announcementIcon" />   
        <p class="scrolling-text">你想要参加一个有趣又刺激的活动吗？你想要赢取丰厚的奖金吗？那就快来参加我们的实时抽奖奖金大放送吧！这是一个在线的抽奖活动，你只需要实时关注我们的平台。</p>
        
    
    </div>
</template>

<script setup>
import announcementIcon from '@/assets/icon/announcementIcon.svg'

</script>

<style scoped>
.announcement {
    background-color: #f0f0f0;
    height: 20px;
    display: flex;
    align-items: center;
    overflow: hidden;
  
    
}

.announcementIcon {
    width: 20%;
    height: 20px;
    text-align: center;
    color: #333;
    background-color: #f0f0f0;
    z-index: 1;
    position: absolute;
    left: -10px;
    color: #1D6BF5;
    font-size: 10px;
 
   
}

.scrolling-text {
    white-space: nowrap;
    overflow: hidden;
    animation: scroll-left 15s linear infinite;
}

@keyframes scroll-left {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>