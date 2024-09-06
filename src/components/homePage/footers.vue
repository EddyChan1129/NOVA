<template>
        <div class="container">
            <div class="left">
                <div class="centered-content">
                    <h2>KG.com</h2>
                    <div class="links">
                        <a>推广</a>
                        <a>代理</a>
                        <a>优惠</a>
                        <a>客服</a>
                    </div>
                </div>
            </div>
    
            <div class="right">
                <h2>游戏提供商</h2>
                <img :src="footer1" class="footer1" />
                <img :src="footer2" class="footer2" />
            </div>
        </div>
    </template>
    
    <script setup>
    import footer1 from '@/assets/mainPageAnnouncement/footer1.png'
    import footer2 from '@/assets/mainPageAnnouncement/footer2.png'
    </script>
    
    <style scoped>
    .container {
        display: flex;
        width: 100%;
        border: 1px solid #DCDFE4;
        height: calc(35vh - 50px);
    }
    
    .left {
        flex: 40%;
   
    }
    
    .left h2 {
        color: #1D6BF5;
        text-align: center;
    }
    
    .left .centered-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        margin-top: 20px; 
    }
    
    .links {
        display: flex;
        justify-content: center;
    }
    
    .links a {
        margin: 0 10px;
    }
    
    .right {
        flex: 60%;
       
    }
    
    .right img {
        margin: 20px 0;
    }
    </style>