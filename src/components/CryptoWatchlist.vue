<script setup>
import { ref, onMounted } from 'vue';

const container = ref(null);

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
  script.type = "text/javascript";
  script.async = true;
  script.rel = "preload";
  script.innerHTML = ` {
    "width": "100%",
    "height": "100%",
    "defaultColumn": "performance",
    "screener_type": "crypto_mkt",
    "displayCurrency": "USD",
    "colorTheme": "light",
    "locale": "en"
  }`;
  if (container.value) {
    container.value.appendChild(script);
  }
});
</script>
<template>
        <div ref="container" class="tradingview-widget-container__widget" style="height: 100%; width: 100%"></div>
        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text"></span></a></div>
</template>

<style></style>

