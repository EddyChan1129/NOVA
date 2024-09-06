<template>
    <div class="all">
        <h1>个人资料</h1>
        <div class="progressBars">
            <img :src="accountSecurityIndex" class="accountSecurityIndex" />
            <div class="progressBarGroup">
                <a class="percentage">账号安全指数 20%</a>
                <div class="progressBar"></div>
                <a class="safetest">完善信息，安全指数更高</a>
                <img :src="tick" class="tick" /><a class="safetest">已填基本资料</a>
                <img :src="noTick" class="noTick" /><a class="safetest">绑定手机号</a>
                <img :src="noTick" class="noTick" /><a class="safetest">绑定电子邮箱</a>
                <img :src="noTick" class="noTick" /><a class="safetest">添加银行卡</a>
            </div>
        </div>
    </div>
    <br> <br>
</template>

<script setup>
import accountSecurityIndex from '@/assets/personalCenter/accountSecurityIndex.svg'
import tick from '@/assets/personalCenter/tick.svg'
import noTick from '@/assets/personalCenter/noTick.svg'

</script>

<style scoped>
.all {
    margin: 3% 0 0 5%;
}

.all h1 {
    color: #1D6BF5;
}

.accountSecurityIndex {
    height: 100px;
}

.progressBarGroup {
    margin: 30px 0 0 40px;
    width: 80%;
}

.progressBar {
    height: 10px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.progressBars {
    display: flex;
}

.progressBar::after {
    content: '';
    display: block;
    width: 20%;
    /* 進度 */
    height: 100%;
    background: linear-gradient(to right, #1D6BF5, #5699FF);
    border-radius: 5px;
}

.tick {
    margin-bottom: -2px;
    margin-right: 10px;
}

.noTick {
    margin-bottom: -2px;
    margin-right: 10px;
}

.safetest {
    color: #656565;
    margin-right: 30px;
}
.percentage{
    font-weight: bold;
}
</style>