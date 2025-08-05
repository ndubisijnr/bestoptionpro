<script setup>
import { ref, onMounted } from 'vue';
import { router } from '../router';

const container1 = ref(null);

const currentRoute = router.currentRoute._value.query.sys


onMounted(() => {
    if (currentRoute) {
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");

        script1.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
        script1.type = "text/javascript";
        script1.async = true;
        script1.rel = "preload";
        script1.innerHTML = ` {
    "symbol": "${currentRoute}",
    "width": "100%",
    "isTransparent": false,
    "colorTheme": "light",
    "locale": "en"
  }`;

        container1.value.appendChild(script1);

    }

});
</script>
<template>

    <div class="mb-5" style="position: relative;">
        <div ref="container1" class="tradingview-widget-container__widget"></div>

        <div class="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span
                    class="blue-text"></span></a>
        </div>
    </div>



</template>

<style>
.tv-symbol-profile {
    height: 0 !important;
}
</style>
