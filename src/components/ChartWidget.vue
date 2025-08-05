<script setup>
import { ref, onMounted } from 'vue';

const container = ref(null);

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
  script.type = "text/javascript";
  script.rel = "preload";
  script.async = true;
  script.innerHTML = `
        {
          "symbols": [
            [
              "Apple",
              "AAPL|1M"
            ],
            [
              "Google",
              "GOOGL|1M"
            ],
            [
              "Microsoft",
              "MSFT|1M"
            ],
            [
              "NASDAQ:NVDA|1M"
            ],
            [
              "NASDAQ:TSLA|1M"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
  if (container.value) {
    container.value.appendChild(script);
  }
});
</script>

<template>
  <div ref="container" class="tradingview-widget-container" style="height: 100%; width: 100%">
    <div  class="tradingview-widget-container__widget" style="height: calc(100% - 32px); width: 100%"></div>
  </div>
  <div class="tradingview-widget-copyright">
    <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
    </a>
  </div>
</template>

<style>

  .tradingview-widget-container {
    position: relative;
  }
  .tradingview-widget-container__widget {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
