<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue';
import { ref, onMounted, reactive } from 'vue';
import StoreUtils from '../utils/storeUtils';
import QRCode from 'qrcode';
import { router } from '../router';


let user = ref()

const plans = reactive({
    plans:[
        {}
    ]
})

const selectPlan = ref('weekly')

const pricingOptons = ref('pricing')


let selectedItem = ref()

let amount = ref()

let amountValue = ref(false)

let isFocus = ref(false)

const qrcode = ref();

const textToCopy = ref('');

const copySuccess = ref(false);


function getUser(payload) {

    user.value = payload
}

function selectItem(obj) {
    isFocus.value = true
    selectedItem.value = obj
}

const copyText = async () => {
    try {
        await navigator.clipboard.writeText(selectedItem.value.coinAddress);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};


function createQr() {
    if (amountValue.value) {
        copyText()
        alert('copied')
        amount.value = null
        amountValue.value = false
        qrcode.value = null
        location.reload()
    }
    else {
        if (!amount.value)  alert('enter amount');
        else {
            amountValue.value = true
            QRCode.toCanvas(qrcode.value, selectedItem.value.coinAddress, (error) => {
                if (error) console.error(error);
                console.log('QR code generated!');
            });
        }
    }

}

const wallets = StoreUtils.getter().auth.getWallets



onMounted(() => {
    StoreUtils.getter().auth.readWallets()
})




</script>
<template>
    <DashboardLayout v-slot:child @user="getUser">


        <div class="mt-8 mb">
            <div class="py-4 px-3 px-md-4 w-100">

                <!-- investment plan -->
                <div class="row" style="background-color: #fff;">
                    <fieldset>
                            <div>
                                <label>
                                    <input type="radio" name="radio" @click="pricingOptons = 'pricing'" checked />
                                    <span>Pricing Plan</span>
                                </label>
<!--                                <label>-->
<!--                                    <input type="radio" name="radio" @click="pricingOptons = 'myplan'" />-->
<!--                                    <span>My Plans</span>-->
<!--                                </label>-->

                            </div>
                        </fieldset>
                    <div v-if="pricingOptons === 'pricing'" class="col-12">
                       

                        <div class="card mb-3 mb-md-4">
                            <fieldset>
                                <h1 class="ont-weight-semi-bold mb-0"><strong>Pricing Plans</strong></h1>
                                <div>
                                    <label>
                                        <input type="radio" name="radio" @click="selectPlan = 'weekly'" checked />
                                        <span>BASIC</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio" @click="selectPlan = 'monthly'" />
                                        <span>PRO</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio" @click="selectPlan = 'nfp'" />
                                        <span>ULTIMATE</span>
                                    </label>
                                </div>
                            </fieldset>

                            <div v-show="selectPlan === 'weekly'">

                                <div class="plans">

                                    <div class="pricing-box-2">
                                        <h2>STARTER PLAN </h2>
                                        <span class="price">5% Daily Interest</span>

                                        <span class="pricing-table-divider"></span>
                                        <a class="btn" style="cursor: pointer;" @click="router.push({path:'/deposit', query:{plan:'STARTER-MIN=300-MAX=1,500'}})"><b>Get Started</b></a>
                                        <span class="pricing-table-divider"></span>

                                        <p>minimum:$1,000</p>
                                        <p>maximum:$3,000</p>

                                        <p>24/7 active support</p>

                                    </div>
                                    <div class="pricing-box-2">
                                        <h2>SLIVER</h2>
                                        <span class="price">5% Daily Interest</span>

                                        <span class="pricing-table-divider"></span>
                                        <a class="btn" style="cursor: pointer;" @click="router.push({path:'/deposit', query:{plan:'SLIVER-MIN=2,000-MAX=5000'}})"><b>Get Started</b></a>
                                        <span class="pricing-table-divider"></span>

                                        <p>minimum:$2,000</p>
                                        <p>maximum:$5,000</p>

                                        <p>24/7 active support</p>

                                    </div>
                                    <div class="pricing-box-2">
                                        <h2>GOLD</h2>
                                        <span class="price">5% Daily Interest</span>

                                        <span class="pricing-table-divider"></span>
                                        <a class="btn" style="cursor: pointer;" @click="router.push({path:'/deposit', query:{plan:'GOLD-MIN=30,000-MAX=7500'}})"><b>Get Started</b></a>
                                        <span class="pricing-table-divider"></span>

                                        <p>minimum:$3,000</p>
                                        <p>maximum:$7,500</p>

                                        <p>24/7 active support</p>

                                    </div>


                                </div>
                            </div>

                            <div v-show="selectPlan === 'monthly'" class="">
                                <div class="plans">

                                    <div class="pricing-box-2">
                                        <h2>GOLD </h2>
                                        <span class="price">5% Daily Interest</span>

                                        <span class="pricing-table-divider"></span>
                                        <a class="btn" style="cursor: pointer;" @click="router.push({path:'/deposit', query:{plan:'PRO-GOLD-MIN=3,000-MAX=8,000'}})"><b>Get Started</b></a>
                                        <span class="pricing-table-divider"></span>

                                        <p>minimum:$3,000</p>
                                        <p>maximum:$8,000</p>
                                        <p>Risk Managements</p>
                                        <p>24/7 active support</p>

                                    </div>
                                    <div class="pricing-box-2">
                                        <h2>PREMIUM PLAN </h2>
                                        <span class="price">5% Daily Interest</span>

                                        <span class="pricing-table-divider"></span>
                                        <a class="btn" style="cursor: pointer;" @click="router.push({path:'/deposit', query:{plan:'PRO-PREMIUM-MIN=5,000-MAX=10,000'}})"><b>Get Started</b></a>
                                        <span class="pricing-table-divider"></span>
                                        <p>minimum:$5,000</p>
                                        <p>maximum:$10,000</p>
                                        <p>Risk Managements</p>
                                        <p>24/7 active support</p>
                                    </div>

                                </div>
                            </div>

                            <div v-show="selectPlan === 'nfp'" class="">
                                <div class="plans">
                                    <div class="pricing-box-2">
                                        <h2>PLATINUM PLAN </h2>
                                        <span class="price">5% Daily Interest</span>

                                        <span class="pricing-table-divider"></span>
                                        <a class="btn" style="cursor: pointer;" @click="router.push({path:'/deposit', query:{plan:'ULTIMATE-PLATINUM-MIN=1,000,MAX-15,000'}})"><b>Get Started</b></a>
                                        <span class="pricing-table-divider"></span>

                                        <p>minimum:$10,000</p>
                                        <p>maximum:$15,000</p>
                                        <p>Risk Managements</p>
                                        <p>24/7 active support</p>

                                    </div>
                                    <div class="pricing-box-2">
                                        <h2>MASTER PLAN </h2>
                                        <span class="price">5% Daily Interest</span>

                                        <span class="pricing-table-divider"></span>
                                        <a class="btn" style="cursor: pointer;" @click="router.push({path:'/deposit', query:{plan:'ULTIMATE-MASTER-MIN=1,500,MAX=20,000'}})"><b>Get Started</b></a>
                                        <span class="pricing-table-divider"></span>

                                        <p>minimum:$15,000</p>
                                        <p>maximum:$20,000</p>
                                        <p>Risk Managements</p>
                                        <p>24/7 active support</p>

                                    </div>
                                    <div class="pricing-box-2">
                                        <h2>ULTIMATE PLAN </h2>
                                        <span class="price">5% Daily Interest</span>

                                        <span class="pricing-table-divider"></span>
                                        <a class="btn" style="cursor: pointer;" @click="router.push({path:'/deposit', query:{plan:'ULTIMATE-ULTIMATE-MIN=20,000,MAX=UNLIMITED'}})"><b>Get Started</b></a>
                                        <span class="pricing-table-divider"></span>

                                        <p>minimum:$20,000</p>
                                        <p>maximum:UNLIMITED</p>
                                        <p>Risk Managements</p>
                                        <p>24/7 active support</p>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    <div v-else class="col-12">
                        <div class="card mb-3 mb-md-4">
                            <h1 class="ont-weight-semi-bold mb-0"><strong>My Plans</strong></h1>


                            <div>

                                <div class="text-center">
                                    <h3>You dont have any plans</h3>
                                    <a class="btn text-white" style="cursor: pointer;" @click="pricingOptons='pricing'"><b>Get Started</b></a>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <footer class="small p-3 px-md-4 mt-auto">
                <div class="row">
                    <div class="col-lg text-center">
                        &copy; 2024 bestoptions pro. All Rights Reserved.
                    </div>
                </div>
            </footer>
            <!-- End Footer -->
        </div>

    </DashboardLayout>
</template>

<style scoped>
.inputt::placeholder {
    font-size: 3rem;
}

.inputt {
    font-size: 3rem;
    font-weight: 700;
}

.plans {
    display: flex;
    justify-content: center;
    gap: 40px;
}

.mb {
    width: 90%;
}

.pricing-box-2 {
    padding-top: 15px;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 15px;
}

@media (max-width:999px) {
    .plans {
        flex-direction: column;
    }

    .mb {
        width: 100%;
    }
}
</style>