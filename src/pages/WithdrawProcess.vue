<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue';
import {ref, computed, reactive, onMounted} from 'vue';
import StoreUtils from '../utils/storeUtils';
import {router} from "../router/index.js";

let user = ref()
const transactions = computed(() => {return StoreUtils.getter().auth.getWithdrawals})

let selectedItem = ref()

const image = ref(null)

let amount = ref()

let loading = ref(false)

let withdrawalLoading = computed(() => {
  return StoreUtils.getter().auth.getWithdrawalLoading
})

let isFocus = ref(false)

const qrcode = ref();

const textToCopy = ref('');

const copySuccess = ref(false);

const currentRoute = computed(() => {
  return router.currentRoute._value.query?.coin
})

const Error = computed(() => {
  return StoreUtils.getter().auth.getError
})

const withdrawCodeError = ref(null)

const taskError = ref(null)

const withdrawStage = ref('1')

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

function withdraw() {
  const balance = Number(user?.value.walletBalance.replace(/,/g, ''));
  const withdrawAmount = Number(amount.value);

  if (!amount.value) {
    alert("Please enter an amount");
    return; // Exit function if no amount is entered
  }

  if (isNaN(withdrawAmount)) {
    alert("Please enter a valid number");
    return; // Exit function if the entered amount is not a number
  }


  if (balance >= withdrawAmount) {
    if(withdrawStage.value === '1'){
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        withdrawStage.value = '2'
      },2000)
    }

  } else {
    alert("You have Insufficient Balance")
  }
}

const withdrawalRequest = reactive({
  email:null,
  address:null,
  amount:null,
  commission_code:null,
  task_code:null,
  withdraw_code:null
})

function withdrawal() {
  const balance = Number(user?.value.walletBalance.replace(/,/g, ''));
  const withdrawAmount = Number(amount.value);

  if (!amount.value) {
    alert("Please enter an amount");
    return; // Exit function if no amount is entered
  }

  if (isNaN(withdrawAmount)) {
    alert("Please enter a valid number");
    return; // Exit function if the entered amount is not a number
  }


  if (balance >= withdrawAmount) {
    withdrawalRequest.amount = withdrawAmount;
    withdrawalRequest.email = user.value.email

      StoreUtils.getter().auth.withdrawalAction(withdrawalRequest)

  } else {
    alert("You have Insufficient Balance");
  }
}

const wallets = StoreUtils.getter().auth.getWallets

function cancel(){
  location.reload()
}

onMounted(() => {
  const data= {"email": user?.value.email}
  StoreUtils.getter().auth.getWithdrawalAction(data)
})


</script>
<template>
    <DashboardLayout v-slot:child @user="getUser">






      <div class="container">
        <div class="container-fluid d-flex align-items-start mt-5 gap-5 flex-column">
          <div class="container-fluid py-4">

              <div class="container d-flex flex-column justify-content-start align-items-start">
                <div class="container-fluid">
                  <div class="h6 mb-3">Complete Withdrawal Process</div>

                </div>

                <div class="container row bg-white py-3 px-3 d-lg-w-20">
                  <div class="modal-content">
<!--                    <h4 id="exampleModalLabel" class="modal-title mx-auto mb-2">Enter {{ currentRoute }} Amount to Withdraw</h4>-->

                    <p style="font-weight: 600;font-size: 1.2rem;">Current Balance: <span style="color: green;font-weight: 600;font-size: 1.2rem;">$ {{ user?.walletBalance }}</span></p>

                    <p v-if="Error" class="text-danger pt-1 mb-5">{{Error}}</p>


                    <label>Amount</label>
                    <input type="text"  v-model="amount"
                           :placeholder="`${currentRoute} amount to withdraw`" class="inputtt mb-5"
                    />
                    <label>Wallet Address</label>
                    <input type="text" v-model="withdrawalRequest.address"
                           :placeholder="`${currentRoute} Wallet Address`" class="inputtt mb-5"
                    />
                    <label v-if="withdrawStage==='2'">Commission Code</label>
                    <input type="text" v-if="withdrawStage==='2'" v-model="withdrawalRequest.commission_code"
                           :placeholder="`Enter Commission Code`" class="inputtt mb-5"
                    />
                    <label v-if="withdrawStage==='2'">Tax Code</label>
                    <input type="text" v-if="withdrawStage==='2'" v-model="withdrawalRequest.task_code"
                           :placeholder="`Enter Tax Code`" class="inputtt mb-5"
                    />

                    <label v-if="withdrawStage==='2'">Withdrawal code</label>
                    <input type="text" v-if="withdrawStage==='2'" v-model="withdrawalRequest.withdraw_code"
                           :placeholder="`Enter Withdrawal code`" class="inputtt"
                    />

<!--                                      <select class="inputtt" style="height: 30px">-->
<!--                                        <option>Select Your Wallet Name</option>-->
<!--                                        <option>Luno</option>-->
<!--                                      </select>-->


                    <button v-if="withdrawStage === '2'" class="btn btn-primary mt-5" @click="withdrawal" :disabled="withdrawalLoading">
                      <span v-if="withdrawalLoading" class="ml-2 spinner-border spinner-border-sm" role="status"></span>

                      Withdraw
                    </button>
                    <button v-else class="btn btn-primary mt-5" @click="withdraw" :disabled="loading">
                      <span v-if="loading" class="ml-2 spinner-border spinner-border-sm" role="status"></span>

                      Proceed
                    </button>

                  </div>
                </div>
              </div>


            </div>

          <div class="container">
            <div class="mb-3 mb-md-4 d-flex justify-content-between">
              <div class="h6 mb-0">Withdraw Transactions</div>
            </div>
            <div class="card mb-3 mb-md-4 w-100">
              <div class="card-body pt-0">
                <h5 class="text-center" style="padding-top: 25px" v-if="!transactions?.length">No recent transactions history to show</h5>

                <div class="table-responsive-xl" v-else>
                  <table class="table text-nowrap mb-0 overflow-x-scroll">
                    <thead>
                    <tr>
<!--                      <th class="font-weight-semi-bold border-top-0 py-2">#</th>-->
                      <th class="font-weight-semi-bold border-top-0 py-2">Amount</th>
                      <th class="font-weight-semi-bold border-top-0 py-2">Commission Code</th>
                      <th class="font-weight-semi-bold border-top-0 py-2">Task Code</th>
                      <th class="font-weight-semi-bold border-top-0 py-2">Withdraw Code</th>
                      <th class="font-weight-semi-bold border-top-0 py-2">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(transaction, index) in transactions" :key="index">
                      <td class="py-3">${{transaction.amount}}</td>
                      <td class="py-3">
                        <div>{{transaction.commission_code}}</div>
                      </td>
                      <td class="py-3">{{transaction.task_code}} </td>
                      <td class="py-3">{{transaction.withdraw_code}} </td>
                      <td class="py-3">
                        <span class="badge badge-pill badge-success" :class="{'badge-warning':transaction.status === 'Pending'}">{{transaction.status}}</span>
                      </td>


                      <!-- <td class="py-3">
                          <div class="position-relative">
                              <a id="dropDown16Invoker" class="link-dark d-flex" href="#"
                                  aria-controls="dropDown16" aria-haspopup="true"
                                  aria-expanded="false" data-unfold-target="#dropDown16"
                                  data-unfold-event="click" data-unfold-type="css-animation"
                                  data-unfold-duration="300" data-unfold-animation-in="fadeIn"
                                  data-unfold-animation-out="fadeOut">
                                  <i class="gd-more-alt icon-text"></i>
                              </a>

                              <ul id="dropDown16"
                                  class="unfold unfold-light unfold-top unfold-right position-absolute py-3 mt-1 unfold-css-animation unfold-hidden fadeOut"
                                  aria-labelledby="dropDown16Invoker"
                                  style="min-width: 150px; animation-duration: 300ms; right: 0px;">
                                  <li class="unfold-item">
                                      <a class="unfold-link media align-items-center text-nowrap"
                                          href="#">
                                          <i class="gd-pencil unfold-item-icon mr-3"></i>
                                          <span class="media-body">Edit</span>
                                      </a>
                                  </li>
                                  <li class="unfold-item">
                                      <a class="unfold-link media align-items-center text-nowrap"
                                          href="#">
                                          <i class="gd-close unfold-item-icon mr-3"></i>
                                          <span class="media-body">Delete</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </td> -->
                    </tr>

                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
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

.inputtt::placeholder {
  font-size: 1rem;
}

.inputtt {
  font-size: 1rem;
  font-weight: 500;
}

</style>