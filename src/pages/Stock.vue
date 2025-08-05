<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue';
import ChartWidget from '../components/ChartWidget.vue'
import SingleTickers from '../components/SingleTickers.vue';
import StockWatchlist from '../components/StockWatchlist.vue';


const porpularMarkets = {
    forex: {
        trade1: 'FX:EURUSD',
        trade2: 'FX:GBPUSD',
        trade3: 'FX:USDJPY'
    },
    technology: {
        trade1: 'NASDAQ:NVDA',
        trade2: 'NASDAQ:AAPL',
        trade3: 'NASDAQ:AMZN'
    },
    crypto: {
        trade1: 'BINANCE:BTCUSDT',
        trade2: 'COINBASE:ETHUSD',
        trade3: 'COINBASE:SOLUSD',
    }

}

</script>
<template>
    <DashboardLayout v-slot:child>

        <div class="">
            <div class="py-4 px-3 px-md-4">

                <div class="mb-3 mb-md-4 d-flex justify-content-between">
                    <div class="h3 mb-0">Stock Market Overview</div>
                </div>


                <div class="row">

                    <div class="col-12">
                        <div class="card mb-3 mb-md-4" style="height: 50vh;">
                            <ChartWidget></ChartWidget>
                        </div>
                    </div>

                </div>

               

                <div class="mb-3 mb-md-4 d-flex justify-content-between">
                    <div class="h3 mb-0">Porpular Markets</div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-xl-4 mb-3 mb-md-4" v-for="(value, key, outerIndex) in porpularMarkets" :key="outerIndex">
                        <div class="h5 mb-2" style="text-transform: capitalize;">{{ key }}</div>
                        <div v-for="(item, innerIndex) in value" :key="innerIndex">
                            <SingleTickers :trade="item"></SingleTickers>
                        </div>
                    </div>


                </div>

                <StockWatchlist />

        

            </div>

            <!-- Footer -->
            <footer class="small p-3 px-md-4 mt-auto">
                <div class="row justify-content-between">
                    <!-- <div class="col-lg text-center text-lg-left mb-3 mb-lg-0">
                        <ul class="list-dot list-inline mb-0">
                            <li class="list-dot-item list-dot-item-not list-inline-item mr-lg-2"><a class="link-dark"
                                    href="#">FAQ</a></li>
                            <li class="list-dot-item list-inline-item mr-lg-2"><a class="link-dark" href="#">Support</a>
                            </li>
                            <li class="list-dot-item list-inline-item mr-lg-2"><a class="link-dark" href="#">Contact
                                    us</a></li>
                        </ul>
                    </div>

                    <div class="col-lg text-center mb-3 mb-lg-0">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item mx-2"><a class="link-muted" href="#"><i
                                        class="gd-twitter-alt"></i></a></li>
                            <li class="list-inline-item mx-2"><a class="link-muted" href="#"><i
                                        class="gd-facebook"></i></a></li>
                            <li class="list-inline-item mx-2"><a class="link-muted" href="#"><i
                                        class="gd-github"></i></a></li>
                        </ul>
                    </div> -->

                    <div class="col-lg text-center text-lg-right">
                        &copy; 2025 best option pro. All Rights Reserved.
                    </div>
                </div>
            </footer>
            <!-- End Footer -->
        </div>

    </DashboardLayout>
</template>

<style></style>