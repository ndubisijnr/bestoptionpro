<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue';
import ChartWidget from '../components/ChartWidget.vue'
import SingleTickers from '../components/SingleTickers.vue';
import {ref, computed, onMounted, reactive} from 'vue';
import StoreUtils from '../utils/storeUtils';

let user = ref()


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

function getUser(payload){
    user.value = payload
}

const updateuser = reactive({
  email:null
})

onMounted(() => {

  onMounted(() => {
    updateuser.email = sessionStorage.getItem('email');
    StoreUtils.getter().auth.updateUser(updateuser)
  })
})


</script>
<template>
    <DashboardLayout v-slot:child @user="getUser">


        <div class="">
            <div class="py-4 px-3 px-md-4">

                <div class="mb-3 mb-md-4 d-flex justify-content-between">
                   
                    <div class="h3 mb-0">Dashboard Overview</div>
                </div>


                <div class="row">

                    <div class="col-12">
                        <div class="card mb-3 mb-md-4" style="height: 50vh;">
                            <ChartWidget></ChartWidget>
                        </div>
                    </div>

                </div>


                <div class="mb-3 mb-md-4 d-flex justify-content-between">
            <div class="h3 mb-0">My Assets</div>
        </div>

        <div class="row">



            <div class="col-md-6 col-xl-4 mb-3 mb-xl-4">
                <!-- Widget -->
                <div class="card flex-row align-items-center p-3 p-md-4">
                    <div class="icon icon-lg bg-soft-secondary rounded-circle mr-3">
                        <i class="gd-wallet icon-text d-inline-block text-secondary"></i>
                    </div>
                    <div>
                        <h4 class="lh-1 mb-1">${{user?.walletDeposit}}</h4>
                        <h6 class="mb-2">DEPOSIT</h6>
                    
                        <router-link to="/deposit" class="btn btn-primary btn-block"> Deposit</router-link>

                    </div>
                    <!-- <i class="gd-arrow-down icon-text d-flex text-danger ml-auto"></i> -->
                </div>
                <!-- End Widget -->
            </div>



            <div class="col-md-6 col-xl-4 mb-3 mb-xl-4">
                <!-- Widget -->
                <div class="card flex-row align-items-center p-3 p-md-4">
                    <div class="icon icon-lg bg-soft-warning rounded-circle mr-3">
                        <i class="gd-money icon-text d-inline-block text-warning"></i>
                    </div>
                    <div>
                        <h4 class="lh-1 mb-1">${{user?.walletBalance}}</h4>
                        <h6 class="mb-2">BALANCE</h6>
                        <router-link to="/withdraw" class="btn btn-primary btn-block"> Withdraw</router-link>

                    </div>
                    <i class="gd-arrow-up icon-text d-flex text-success ml-auto"></i>
                </div>
                <!-- End Widget -->
            </div>

          <div class="col-md-6 col-xl-4 mb-3 mb-xl-4">
            <!-- Widget -->
            <div class="card flex-row align-items-center p-3 p-md-4">
              <div class="icon icon-lg bg-soft-warning rounded-circle mr-3">
                <i class="gd-money icon-text d-inline-block text-warning"></i>
              </div>
              <div>
                <h4 class="lh-1 mb-1">${{user?.walletProfit}}</h4>
                <h6 class="mb-2">PROFIT</h6>
                <p class="text-warning"> Profit returns will reflect here</p>

              </div>
              <i class="gd-arrow-up icon-text d-flex text-success ml-auto"></i>
            </div>
            <!-- End Widget -->
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

                <!-- {{ transactions[0] }} -->

                <!-- <div class="row">
                    <div class="col-12">
                        <div class="card h-100">
                            <div class="card-header">
                                <h5 class="h6 text-uppercase font-weight-semi-bold mb-0">Recent Transactions</h5>
                            </div>
                            <div class="card-body p-0">
                                <h5 class="text-center">No Recent Transactions</h5>

                                <div class="border-top p-3 px-md-4 mx-0">
                                    <div class="row justify-content-between small mb-2">
                                        <div class="col">
                                            <span class="text-primary mr-3">TOK</span>

                                            <span class="mr-1">$3,320.98</span>
                                            <i class="gd-arrow-left text-success mr-3"></i>
                                        </div>

                                        <div class="col-auto text-muted">
                                            3h ago
                                        </div>
                                    </div>

                                    Balance update
                                </div>
                                <div class="border-top p-3 px-md-4 mx-0">
                                    <div class="row justify-content-between small mb-2">
                                        <div class="col">
                                            <span class="text-primary mr-3">NYC</span>

                                            <span class="mr-1">$4,320.98</span>
                                            <i class="gd-arrow-left text-success mr-3"></i>
                                        </div>

                                        <div class="col-auto text-muted">
                                            5h ago
                                        </div>
                                    </div>

                                    Balance update
                                </div>
                                <div class="border-top p-3 px-md-4 mx-0">
                                    <div class="row justify-content-between small mb-2">
                                        <div class="col">
                                            <span class="text-primary mr-3">NYC</span>

                                            <span class="mr-1">$3,320.98</span>
                                            <i class="gd-arrow-right text-danger mr-3"></i>
                                        </div>

                                        <div class="col-auto text-muted">
                                            7h ago
                                        </div>
                                    </div>
                                    Marketing Expenses
                                </div>
                                <div class="border-top p-3 px-md-4 mx-0">
                                    <div class="row justify-content-between small mb-2">
                                        <div class="col">
                                            <span class="text-primary mr-3">NYC</span>

                                            <span class="mr-1">$1,320.98</span>
                                            <i class="gd-arrow-left text-success mr-3"></i>
                                        </div>

                                        <div class="col-auto text-muted">
                                            12h ago
                                        </div>
                                    </div>

                                    Balance update
                                </div>

                            </div>
                        </div>
                    </div>
                </div> -->




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

<style scoped>


</style>