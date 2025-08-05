<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue';
import {ref, onMounted, reactive} from 'vue';
import StoreUtils from '../utils/storeUtils';
import QRCode from 'qrcode';
import { router } from '../router';


let user = ref()

let selectedItem = ref()

const currentRoute = ref(router.currentRoute._value.query)

let amount = ref()

let amountValue = ref(false)

let isFocus = ref(false)

const qrcode = ref();

const textToCopy = ref('');

const copySuccess = ref(false);


function getUser(payload) {

    user.value = payload
  StoreUtils.getter().auth.readWallets(payload.email)
}

function selectItem(obj) {
    isFocus.value = true
    selectedItem.value = obj
}

const deposit = reactive({
  email:null,
  amount:null,
  crypto_type:null,
  address:null,
})

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
        deposit.email = user.value.email
        deposit.amount = amount.value
        deposit.address = selectedItem.value.coinAddress
        deposit.crypto_type = selectedItem.value.coinName

        StoreUtils.getter().auth.doDeposit(deposit).then(()=> {
          amount.value = null
          amountValue.value = false
          qrcode.value = null
      })


    }
    else {
        if (!amount.value) alert('enter amount');
        else {
            amountValue.value = true
            QRCode.toCanvas(qrcode.value, selectedItem.value.coinAddress, (error) => {
                if (error) console.error(error);
                console.log('QR code generated!');
            });
        }
    }

}

const wallets = StoreUtils.getter().auth.getWallets || []



onMounted(() => {

})




</script>
<template>
    <DashboardLayout v-slot:child @user="getUser">
        <!-- Modal -->
        <div id="exampleModal" class="modal fade" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog rounded" role="document">
                <div class="modal-content">
                    <h4 id="exampleModalLabel" class="modal-title mx-auto">Enter {{ selectedItem?.coinName }} Amount
                    </h4>

                    <input type="number" autofocus="true" :autofocus="isFocus" v-model="amount"
                        :placeholder="`${selectedItem?.coinName} 0.00`" class="inputt text-center" />


                    <div style="display: flex;align-items: center;justify-content: center;">


                        <canvas v-show="qrcode" ref="qrcode"></canvas>
                    </div>


                    <div class="btn btn-primary" @click="createQr">{{ amountValue ? 'Copy Address' : 'Deposit' }}</div>

                </div>
            </div>

        </div>
        <!-- End Modal -->

        <div class="content">
            <div class="py-4 px-3 px-md-4">


                <div v-if="currentRoute.plan" class="mb-3 mt-5 mb-md-4 d-flex w-50 p-3 justify-content-between bg-dark text-white rounded">
                    <div class="h3 mb-0">Get STARTED WITH {{ currentRoute?.plan?.replaceAll('-', " ") }}</div>
                </div>

                <div class="mb-3 mb-md-4 d-flex justify-content-between">
                    <div class="h3 mb-0">Select Payment Method</div>
                </div>

                <div class="mb-3 mb-md-4 d-flex justify-content-between">
                    <div class="h5 mb-0">Deposit with Fiat</div>
                </div>

                <div class="row">

                    <div class="col-md-6 col-xl-4 mb-3 mb-xl-4" style="cursor: pointer;">
                        <!-- Widget -->
                        <div class="card flex-row align-items-center p-3 p-md-4">
                            <div class="icon icon-lg bg-soft-secondary rounded-circle mr-3">
                                <i class="gd-wallet icon-text d-inline-block text-secondary"></i>
                            </div>
                            <div>
                                <h4 class="lh-1 mb-2">Deposit with Bank Transfer</h4>
                                <h6 class="mb-2">Bank Transfer,paypal,cashapp and more</h6>

                            </div>
                        </div>
                        <!-- End Widget -->
                    </div>

                </div>

                <div class="mb-3 mb-md-4 d-flex justify-content-between">
                    <div class="h5 mb-0">Deposit with Crypto</div>
                </div>
                <div class="row">

                    <div class="col-md-6 col-xl-4 mb-3 mb-xl-4">
                        <!-- Widget -->
                        <div type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false"
                            aria-controls="collapseExample" class="card flex-row align-items-center p-3 p-md-4"
                            style="cursor: pointer;">
                            <div class="icon icon-lg bg-soft-secondary rounded-circle mr-3">
                                <i class="gd-wallet icon-text d-inline-block text-secondary"></i>
                            </div>
                            <div>
                                <h4 class="lh-1 mb-2">Deposit with Crypto</h4>
                                <h6 class="mb-2">Already have crypto?Deposit directly</h6>

                            </div>
                        </div>
                        <div class="collapse bg-white p-4" id="collapseExample">
                            <div>
                                <h6>Recommended</h6>
                                <div class="mb-5 d-flex justify-content-start">
                                    <div data-toggle="modal" aria-expanded="false" @click="selectItem(i)"
                                        aria-controls="exampleModal" data-target="#exampleModal"
                                        class="btn btn-dark rounded-pill mr-2" style="cursor: pointer;"
                                        v-for="(i, index) in wallets" :key="index">{{ i.coinName }}</div>
                                </div>

                                <div>
                                    <h3>Steps</h3>
                                    <p>1. Choose your prefered crypto</p>
                                    <p>2. Input amount to Deposit</p>
                                    <p>3. Copy Address or scan QRcode to copy address</p>
                                    <p>4. Proceed to your Crypto Wallet, Select the USTD BSC(BEP20) Network and send</p>
                                    <p>5. Proceed to "My Assets" page, refresh page your balance should reflect.</p>

                                </div>
                            </div>

                        </div>
                        <!-- End Widget -->
                    </div>
                    <div class="col-md-6 col-xl-4 mb-3 mb-xl-4">


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

<style>
.inputt::placeholder {
    font-size: 3rem;
}

.inputt {
    font-size: 3rem;
    font-weight: 700;
}
</style>