<template>
    <div class="absolute bottom-50 right-200 earth" ref="el">
        behold:
        <img style="width: 250px" :src="url" alt="new-fixture" srcset="" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const el = ref();

const url = ref(
    'https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif'
);
</script>

<style lang="scss" scoped>
.earth {
    padding: 20px;
    background-color: rgb(211, 153, 46);
    text-align: center;
}
</style>
