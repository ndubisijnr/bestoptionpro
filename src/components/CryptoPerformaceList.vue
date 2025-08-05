<script setup>
import { ref, onMounted } from 'vue';

const container = ref(null);

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";
  script.type = "text/javascript";
  script.async = true;
  script.rel = "preload";
  script.innerHTML = ` {
          "dataSource": "Crypto",
          "blockSize": "market_cap_calc",
          "blockColor": "change",
          "locale": "en",
          "symbolUrl": "",
          "colorTheme": "light",
          "hasTopBar": false,
          "isDataSetEnabled": false,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "isMonoSize": false,
          "width": "100%",
          "height": "100%"
        }`;
  if (container.value) {
    container.value.appendChild(script);
  }
});
</script>
<template>
    <div class="tradingview-widget-container" ref=container>
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text"></span></a></div>
    </div>
</template>

<style></style>
