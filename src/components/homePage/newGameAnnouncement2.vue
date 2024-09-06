<template>
    <div class="newGameAll">
        <div class="newGameSection">
            <img :src="newGameIcon" class="newGameIcon" />
            <a>最新上線</a>
        </div>

        <div class="newGameSections">
            <div class="verticalAlignCenter">
                <img :src="AnnouncementTitle" class="AnnouncementTitle" />
                <a class="AnnouncementSubTitle">高效便捷急速充值提款</a>
                <a>覆盖世界各地赛事，让球、大小、半全场、波胆单双、总入球、连串过关等多元竞猜。<br>更有动画直播、视频直播，让您轻松体验聊球投注，乐在其中.</a>
                <div class="imageContainer">
                    <img :src="directAccess" class="directAccess" />
                    <img :src="IOSDownload" class="IOSDownload" />
                    <img :src="AndroidDownload" class="AndroidDownload" />
                </div>
            </div>
            <img :src="newGamePic2" class="newGamePic2" />
        </div>
    </div>
</template>

<script setup>
import newGameIcon from '@/assets/mainPageAnnouncement/newGameIcon.svg';
import AnnouncementTitle from '@/assets/mainPageAnnouncement/AnnouncementTitle.png';
import newGamePic2 from '@/assets/mainPageAnnouncement/newGamePic2.png';
import directAccess from '@/assets/mainPageAnnouncement/directAccess.png';
import IOSDownload from '@/assets/mainPageAnnouncement/IOSDownload.png';
import AndroidDownload from '@/assets/mainPageAnnouncement/AndroidDownload.png';
</script>

<style scoped>
.newGameAll {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 5% auto;
}

.newGameSections {
    display: flex;
    align-items: center;
    margin: 1% 0%;
    padding: 10px;
}

.newGameIcon {
    width: 3%;
    height: 3%;
    margin: 0 5px;
}

.newGameSection a {
    font-size: 200%;
    font-weight: bold;
    margin: 0 5px;
}

.verticalAlignCenter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}

.newGamePic2 {
    margin-left: auto;
    width: 45%;
}

.gameNow {
    color: #1D6BF5;
    border: 2px solid #1D6BF5;
    font-size: 20px;
    border-radius: 10px;
    padding: 2% 20%;
    margin: 5%;
}

.gameNow:hover {
    color: #FFF;
    border: 2px solid #1D6BF5;
    background-color: #1D6BF5;
}

.AnnouncementTitle {
    width: 50%;
    margin: 5%;
}

.AnnouncementSubTitle {
    color: #7E8288;
    font-size: 25px;
    margin: 2%;
}
.imageContainer {
    display: flex;
    justify-content: space-between;
    margin: 10% auto;
    padding: 0 5%;
}

.imageContainer img {
    margin: 0 10PX;
    max-width: 30%; /* 设置图片的最大宽度 */
}


</style>