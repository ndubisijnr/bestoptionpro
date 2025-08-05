<script setup>
import { ref, onMounted } from 'vue';
import { router } from '../router';
const props = defineProps({
    trade:String
})

const container = ref(null);

function routeTodetails(){
  router.push({name:"SysDetails", query:{sys:props.trade}}).then(() => {
    location.reload()

  })
}

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
  script.type = "text/javascript";
  script.async = true;
  script.rel = "preload";
  script.innerHTML = ` {
    "symbol": "${props?.trade}",
    "width": "100%",
    "isTransparent": false,
    "colorTheme": "light",
    "locale": "en"
  }`;
  if (container.value) {
    container.value.appendChild(script);
  }
});
</script>
<template>
<!-- TradingView Widget BEGIN -->
<div ref="container" class="tradingview-widget-container mb-5">
    <div class="tradingview-widget-container__widget"></div>
    <div @click="routeTodetails" class="btn btn-dark mt-1 rounded-pill">Invest</div>

    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text"></span></a></div>
  </div>
  <!-- TradingView Widget END -->

</template>

<style></style>

