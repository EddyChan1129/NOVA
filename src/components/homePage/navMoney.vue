<template>
    <div class="gradient-box">
        <!-- Your content here -->
        <img :src="money" class="money" />
        <a class="dollor">0.00 </a>
        <img :src="lan" class="lan" />
    </div>
</template>

<script setup>
import money from '@/assets/navBar/money.svg';
import lan from '@/assets/navBar/lan.svg';
</script>

<style scoped>
.gradient-box {
    background: linear-gradient(to bottom, #FFFFFF, #BFD6FF);
    border-radius: 300px;
    height: 80%;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin: 15px;
    position: relative; 
}

.dollor {
    color: black;
    white-space: nowrap;
}



.dollor::after {
    content: '|'; 
    color: grey; 

    margin-left: 5px; 
}


.lan {
    margin: 10px 20px;
}


.money{
    margin: 10px;
}
</style>