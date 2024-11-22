<template>
    <div class="swipe-container">
        <div
            id="verticalLine"
            :style="{ left: linePosition, height: lineHeight, top: lineTop }"
            ref="line"
            v-tippy="{ content: 'Drag and slide to move', placement: 'left' }"
        ></div>
        <input v-model="sliderPosition" id="layerSlider" type="range" ref="slider" min="5" max="95" step="0.5" />
    </div>
</template>

<script setup lang="ts">
import { FixtureInstance } from '@/api';
import { onBeforeMount, computed, onMounted, ref, useTemplateRef, onBeforeUnmount } from 'vue';
import { usePanelStore } from '@/stores/panel';

const panelStore = usePanelStore();
const slider = useTemplateRef('slider');
const sliderPosition = ref<number>(50);
const innerShellHeight = ref<number>(0);
const line = useTemplateRef('line');
const lineDragging = ref<Boolean>(false);
const linePosition = computed(() => {
    const diff = +sliderPosition.value - 50;
    const position = 50 + 0.99 * diff;
    return `${position - 1}%`;
});

const lineHeight = computed(() => {
    return `${innerShellHeight.value}px`;
});

const lineTop = computed(() => {
    return `${(-innerShellHeight.value + 45) / 2}px`;
});

defineProps({
    fixture: {
        type: FixtureInstance,
        required: true
    },
    message: String
});

const mouseMoveHandler = (e: MouseEvent) => {
    const cursor = window.getComputedStyle(line.value as Element).cursor;

    console.log('is line disabled?');
    console.log(line.value.disabled);
    console.log('is input disabled?');
    console.log(slider.value?.disabled);

    if (e.movementX === 0) {
        lineDragging.value = false;
    }
    if (lineDragging.value) {
        sliderPosition.value = +sliderPosition.value + e.movementX / 5;
        setTimeout(() => {
            const inputEvent = new Event('input');
            slider.value?.dispatchEvent(inputEvent);
        });
    }
};

onBeforeMount(() => {
    const innerShell = document.querySelector('.inner-shell');
    innerShellHeight.value = innerShell?.clientHeight ?? 1000;
});

onMounted(() => {
    window.addEventListener('resize', () => {
        const innerShell = document.querySelector('.inner-shell');
        innerShellHeight.value = innerShell?.clientHeight ?? innerShellHeight.value;
    });

    line.value?.addEventListener('mousedown', e => {
        lineDragging.value = true;
        panelStore.setOpacity(0.1);
    });

    line.value?.addEventListener('mouseup', () => {
        lineDragging.value = false;
        panelStore.setOpacity(1);
    });

    window.addEventListener('mouseup', () => {
        lineDragging.value = false;
        panelStore.setOpacity(1);
    });

    line.value?.addEventListener('mouseover', () => {
        panelStore.setOpacity(0.1);
    });

    line.value?.addEventListener('mouseleave', () => !lineDragging.value && panelStore.setOpacity(1));

    slider.value?.addEventListener('focus', () => panelStore.setOpacity(0.1));

    slider.value?.addEventListener('blur', () => panelStore.setOpacity(1));

    slider.value?.addEventListener('mouseover', () => panelStore.setOpacity(0.1));

    slider.value?.addEventListener('mouseleave', () => panelStore.setOpacity(1));

    line.value?.addEventListener('mousemove', mouseMoveHandler);

    line.value?.addEventListener('dragstart', e => {
        console.log('dragstart event on line');
        console.log(e);
        lineDragging.value = false;
    });
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', () => {
        const innerShell = document.querySelector('.inner-shell');
        innerShellHeight.value = innerShell?.clientHeight ?? innerShellHeight.value;
    });

    line.value?.removeEventListener('mousedown', () => {
        lineDragging.value = true;
        panelStore.setOpacity(0.1);
    });

    line.value?.removeEventListener('mouseup', () => {
        lineDragging.value = false;
        panelStore.setOpacity(1);
    });

    window.removeEventListener('mouseup', () => {
        lineDragging.value = false;
        panelStore.setOpacity(1);
    });

    line.value?.removeEventListener('mouseover', () => panelStore.setOpacity(0.1));

    line.value?.removeEventListener('mouseleave', () => !lineDragging.value && panelStore.setOpacity(1));

    slider.value?.removeEventListener('focus', () => panelStore.setOpacity(0.1));

    slider.value?.removeEventListener('blur', () => panelStore.setOpacity(1));

    slider.value?.removeEventListener('mouseover', () => panelStore.setOpacity(0.1));

    slider.value?.removeEventListener('mouseleave', () => panelStore.setOpacity(1));

    line.value?.removeEventListener('mousemove', mouseMoveHandler);
});
</script>

<style lang="scss" scoped>
.swipe-container {
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 50%;
    z-index: 5;
}

#layerSlider {
    width: 90%;
    opacity: 0.7;
    -webkit-appearance: none;
    appearance: none;
    height: 5px;
    background: inherit;
}

#layerSlider:hover {
    opacity: 1;
}

#layerSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: black;
    cursor: col-resize;
}

#verticalLine {
    display: flex;
    align-items: center;
    position: absolute;
    padding-right: 40px;
    z-index: 10;
    border: 2px solid black;
    background: linear-gradient(#000, #000) no-repeat center/4px 100%;
}

#verticalLine:hover {
    cursor: col-resize;
}
</style>
