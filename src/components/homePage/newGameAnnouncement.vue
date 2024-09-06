<template>
    <div class="newGameAll">
        <div class="newGameSection">
            <img :src="newGameIcon" class="newGameIcon" />
            <a>最新上線</a>
            <img :src="newGameHotIcon" class="newGameHotIcon" />
        </div>

        <div class="newGameSections">
            <div class="verticalAlignCenter">
                <img :src="MARBLEMAGIC" class="MARBLEMAGIC" />
                <img :src="MARBLEMAGIC2" class="MARBLEMAGIC2" />
                <a class="gameNow">立即遊戲</a>
            </div>
            <img :src="newGamePic" class="newGamePic"/>
        </div>
    </div>
</template>

<script setup>
import newGameIcon from '@/assets/mainPageAnnouncement/newGameIcon.svg';
import newGameHotIcon from '@/assets/mainPageAnnouncement/newGameHotIcon.svg';
import MARBLEMAGIC from '@/assets/mainPageAnnouncement/MARBLEMAGIC.png';
import MARBLEMAGIC2 from '@/assets/mainPageAnnouncement/MARBLEMAGIC2.png';
import newGamePic from '@/assets/mainPageAnnouncement/newGamePic.png';
</script>

<style scoped>
.newGameAll {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto; 
}

.newGameSections {
    display: flex;
    align-items: center;
    border: 2px solid #c6d8fc;
    margin: 1% 0%;
    border-radius: 10px;
    padding: 10px;
}

.newGameIcon {
    width: 3%; 
    height: 3%; 
    margin: 0 5px;
}

.newGameHotIcon {
    width: 5%; 
    height: 5%; 
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

.newGamePic {
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
    background-color:#1D6BF5 ;

 
}

.MARBLEMAGIC.MARBLEMAGIC{
    width: 50%;
    margin: 5%;
}
</style>