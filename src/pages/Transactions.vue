<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue';
import {ref, onMounted, reactive, computed} from 'vue';
import StoreUtils from '../utils/storeUtils';
import { router } from '../router';


let user = ref()

const transactions = computed(() => {return StoreUtils.getter().auth?.getTransactions})



const currentRoute = ref(router.currentRoute._value.query)


function getUser(payload) {

    user.value = payload
}


const deposit = reactive({
  email:null,
  amount:null,
  crypto_type:null,
  address:null,
})


onMounted(() => {
    StoreUtils.getter().auth.readWallets()
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


                    <div class="btn btn-primary" @click="createQr">{{ amountValue ? 'Copy Address' : 'Deposite' }}</div>

                </div>
            </div>

        </div>
        <!-- End Modal -->

        <div class="container-fluid">
            <div class="py-4 px-3 px-md-4">
                <div v-if="currentRoute.plan" class="mb-3 mt-5 mb-md-4 d-flex w-50 p-3 justify-content-between bg-dark text-white rounded">
                    <div class="h3 mb-0">Get STARTED WITH {{ currentRoute?.plan?.replaceAll('-', " ") }}</div>
                </div>

                <div class="mb-3 mb-md-4 d-flex justify-content-between">
                    <div class="h3 mb-0 text-center" style="width: 100%;" >Transactions</div>
                </div>

<!--                <div class="mb-3 mb-md-4 d-flex justify-content-between">-->
<!--                    <div class="h5 mb-0">Deposit with Fiat</div>-->
<!--                </div>-->

              <div class="container">
                <div class="">
                  <div class="card mb-3 mb-md-4  w-100">

                    <div class="card-body pt-0">
                      <h5 class="text-center" style="padding-top: 25px" v-if="!transactions.length">No recent transactions history to show</h5>

                      <div class="table-responsive-xl" v-else>
                        <table class="table text-nowrap mb-0 overflow-x-scroll">
                          <thead>
                          <tr>

                            <th class="font-weight-semi-bold border-top-0 py-2">Email</th>
                            <th class="font-weight-semi-bold border-top-0 py-2">Amount</th>
                            <th class="font-weight-semi-bold border-top-0 py-2">Status</th>
                            <th class="font-weight-semi-bold border-top-0 py-2">Transaction Type</th>
                            <th class="font-weight-semi-bold border-top-0 py-2">Remarks</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="(transaction, index) in transactions" :key="index">
                            <td class="py-3">{{transaction.email}} </td>
                            <td class="py-3">${{transaction.amount}} </td>
                            <td class="py-3">
                              <span class="badge badge-pill badge-success" :class="{'badge-warning':transaction.status === 'Pending'}">{{transaction.status}}</span>
                            </td>
                            <td class="py-3">
                              <span class="badge badge-pill badge-success" :class="{'badge-danger':transaction.debit === 'DR'}">{{transaction.debit}}</span>
                            </td>
                            <td class="py-3">{{transaction.remarks || 'NA'}} </td>

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

            <!-- Footer -->
            <footer class="small p-3 px-md-4 mt-auto">
                <div class="row">
                    <div class="col-lg text-center">
                        &copy; 2025 best option pro. All Rights Reserved.
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