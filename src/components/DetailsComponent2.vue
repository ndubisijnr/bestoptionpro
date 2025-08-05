<script setup>
import { ref, onMounted } from 'vue';
import { router } from '../router';

const container2 = ref(null);

const currentRoute = router.currentRoute._value.query.sys


onMounted(() => {
    if (currentRoute) {

        script2.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
        script2.type = "text/javascript";
        script2.async = true;
        script2.rel = "preload";
        script2.innerHTML = ` {
    "symbol": "${currentRoute}",
    "width": "100%",
    "isTransparent": false,
    "colorTheme": "light",
    "locale": "en"
  }`;


        if (container2.value) {
            container2.value.appendChild(script2);
        }
    }

});
</script>
<template>




    <div ref="container2" class="tradingview-widget-container__widget" style="height: 100%;width: 100%">
    </div>

    <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span
                class="blue-text"></span></a>
    </div>




</template>

<style></style>
