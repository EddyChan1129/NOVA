<template>
    <div class="dropdown" @click="toggleDropdown">
        <button class="dropbtn">{{ selectedOption }} </button>
        <div v-if="isDropdownOpen" class="dropdown-content" @click.stop>
            <a v-for="option in options" :key="option" @click="selectOption(option)">{{ option }}</a>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(['options', 'value', 'defaultOption']);
const emit = defineEmits(['update:modelValue']);

const isDropdownOpen = ref(false);
const selectedOption = ref(props.defaultOption);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option) => {
    selectedOption.value = option;
    isDropdownOpen.value = false; // 点击选项后关闭下拉菜单
    emit('update:modelValue', option); // 将选择传递给父组件
};
</script>

<style scoped>
.dropdown {
  
  
}

.dropbtn {
   
    color: 
 #8590A2;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    width: 480px;
    height: 55px;
    border-radius: 10px;
    background-color: #EFF6FE;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #EFF6FE;
    border-radius: 10px;
    min-width: 160px;
    width: 480px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #D7E5FF;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>