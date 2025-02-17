<template>
    <panel-screen :panel="panel">
        <template #header>{{ t('geosearch.title') }}</template>

        <template #content>
            <div class="flex flex-col h-full">
                <geosearch-bar></geosearch-bar>
                <geosearch-top-filters></geosearch-top-filters>
                <loading-bar class="flex-none" v-if="loadingResults"></loading-bar>
                <div class="text-red-900 text-xs px-8 mb-10" v-if="failedServices.length > 0 && !loadingResults">
                    {{
                        t('geosearch.serviceError', {
                            services: failedServices.join(', ')
                        })
                    }}
                </div>
                <div
                    class="px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
                    v-if="cleanedSearchVal && searchResults.length === 0 && !loadingResults"
                >
                    <span class="relative h-48"
                        >{{ t('geosearch.noResults')
                        }}<span class="font-bold text-blue-600">"{{ cleanedSearchVal }}"</span></span
                    >
                </div>
                <ul
                    class="rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
                    v-focus-list
                    v-if="searchResults.length > 0"
                >
                    <li class="relative h-56" v-for="(result, idx) in searchResults" v-bind:key="idx">
                        <button
                            type="button"
                            class="absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style"
                            @click="zoomIn(result)"
                            v-focus-item="'show-truncate'"
                            style="border-bottom: 1px solid lightgray"
                            truncate-trigger
                        >
                            <div class="rv-result-description px-8">
                                <div
                                    class="flex-1 text-left truncate font-bold leading-tight"
                                    v-truncate="{
                                        externalTrigger: true,
                                        options: { placement: 'top-start' }
                                    }"
                                >
                                    <span v-html="highlightSearchTerm(result.name, result.location.province)"></span>
                                    <span v-if="result.location.province" class="text-gray-600 text-sm">
                                        {{
                                            result.location.city
                                                ? ' ' + result.location.city + ', ' + result.location.province.abbr
                                                : ' ' + result.location.province.abbr
                                        }}</span
                                    >
                                    <span v-if="result.type" class="hidden">; </span>
                                    <span v-if="result.type" class="text-sm font-normal"><br />{{ result.type }}</span>
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
                <geosearch-bottom-filters class="mt-auto"></geosearch-bottom-filters>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { PropType } from 'vue';
import type { InstanceAPI, PanelInstance } from '@/api';
import { Polygon, SpatialReference } from '@/geo/api';
import { useGeosearchStore } from './store';
import GeosearchBar from './search-bar.vue';
import GeosearchTopFilters from './top-filters.vue';
import GeosearchBottomFilters from './bottom-filters.vue';
import LoadingBar from './loading-bar.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi')!;
const geosearchStore = useGeosearchStore();

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>
    }
});

const cleanedSearchVal = computed<string>(() => geosearchStore.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, '').trim());
const searchResults = computed<Array<any>>(() => geosearchStore.searchResults);
const loadingResults = computed<boolean>(() => geosearchStore.loadingResults);
const failedServices = computed<string[]>(() => geosearchStore.failedServices);

// zoom in to a clicked result
const zoomIn = (result: any) => {
    let zoom = new Polygon(
        'zoomies',
        [
            [
                [result.bbox[0], result.bbox[1]],
                [result.bbox[0], result.bbox[3]],
                [result.bbox[2], result.bbox[3]],
                [result.bbox[2], result.bbox[1]],
                [result.bbox[0], result.bbox[1]]
            ]
        ],
        SpatialReference.latLongSR(),
        true
    );
    iApi.geo.map.zoomMapTo(zoom);
};

// highlight the search term in each listed geosearch result
const highlightSearchTerm = (name: string, province: any) => {
    // wrap matched search term in results inside span with styling
    const highlightedResult = name.replace(
        new RegExp(`${geosearchStore.searchRegex}`, 'gi'),
        match => '<span class="font-bold text-blue-600">' + match + '</span>'
    );
    // add comma to new highlighted result if a province/location is provided
    return province ? highlightedResult + ',' : highlightedResult;
};
</script>

<style lang="scss" scoped></style>
