<template>
    <new-button :onClickFunction="togglePanel" tooltip="🌎">
        <span class="block h-24">🌎</span>
    </new-button>
</template>

<script setup lang="ts">
import type { InstanceAPI } from '@/api';
import { inject } from 'vue';
const iApi = inject('iApi') as InstanceAPI;

const togglePanel = () => {
    iApi.fixture.add('new-fixture');

    // the above will re-add the new fixture as it was self-terminated
};
</script>

<style lang="scss" scoped></style>
