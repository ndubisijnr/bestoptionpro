<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue';
import { ref } from 'vue';

let user = ref()

function getUser(payload){
    user.value = payload
}


</script>
<template>
     <DashboardLayout v-slot:child @user="getUser">

<div class="content">
    <div class="py-4 px-3 px-md-4">
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
                        <h4 class="lh-1 mb-1">${{user?.walletBalance}}</h4>
                        <h6 class="mb-2">Total Balance</h6>
                    
                        <router-link to="/deposit" class="btn btn-primary btn-block">  Deposit</router-link>

                    </div>
                    <i class="gd-arrow-down icon-text d-flex text-danger ml-auto"></i>
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
                        <h6 class="mb-2">Net Profit</h6>
                        <router-link to="/withdraw" class="btn btn-primary btn-block">  Withdraw</router-link>

                    </div>
                    <i class="gd-arrow-up icon-text d-flex text-success ml-auto"></i>
                </div>
                <!-- End Widget -->
            </div>

        


        </div>

    

        <div class="row">
            <div class="col-md-6 col-xl-4 mb-3 mb-md-4" v-for="(value, key, outerIndex) in porpularMarkets" :key="outerIndex">
                <div class="h5 mb-2" style="text-transform: capitalize;">{{ key }}</div>
                <div v-for="(item, innerIndex) in value" :key="innerIndex">
                    <SingleTickers :trade="item"></SingleTickers>
                </div>
            </div>




        </div>
        <div class="row">
                    <div class="col-12">
                        <!-- Card -->
                        <div class="card h-100">
                            <div class="card-header">
                                <h5 class="h6 text-uppercase font-weight-semi-bold mb-0">Recent Transactions</h5>
                            </div>
                            <div class="card-body p-0">
                                <h5 class="text-center">No Recent Transactions</h5>

                                <!-- <div class="border-top p-3 px-md-4 mx-0">
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
                                </div> -->

                            </div>
                        </div>
                        <!-- End Card -->
                    </div>
                </div>

        <div class="row">
                    <div class="col-12">
                        <div class="card mb-3 mb-md-4">
                            <div class="card-header">
                                <h5 class="font-weight-semi-bold mb-0">Recent Payout Request</h5>
                            </div>

                            <div class="card-body pt-0">
                                <div class="table-responsive-xl">
                                    <table class="table text-nowrap mb-0">
                                        <h5 class="text-center">No Recent Payout Request</h5>

                                        <!-- <thead>
                                            <tr>
                                                <th class="font-weight-semi-bold border-top-0 py-2">#</th>
                                                <th class="font-weight-semi-bold border-top-0 py-2">Customer</th>
                                                <th class="font-weight-semi-bold border-top-0 py-2">Phone</th>
                                                <th class="font-weight-semi-bold border-top-0 py-2">Amount</th>
                                                <th class="font-weight-semi-bold border-top-0 py-2">Status</th>
                                                <th class="font-weight-semi-bold border-top-0 py-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="py-3">149531</td>
                                                <td class="py-3">
                                                    <div>John Doe</div>
                                                    <div class="text-muted">Acme Inc.</div>
                                                </td>
                                                <td class="py-3">(000) 111-1234</td>
                                                <td class="py-3">$1,230.00</td>
                                                <td class="py-3">
                                                    <span class="badge badge-pill badge-warning">Pending</span>
                                                </td>
                                                <td class="py-3">
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="py-3">149531</td>
                                                <td class="py-3">
                                                    <div>John Doe</div>
                                                    <div class="text-muted">Acme Inc.</div>
                                                </td>
                                                <td class="py-3">(000) 111-1234</td>
                                                <td class="py-3">$1,230.00</td>
                                                <td class="py-3">
                                                    <span class="badge badge-pill badge-success">Fulfilled</span>
                                                </td>
                                                <td class="py-3">
                                                    <div class="position-relative">
                                                        <a id="dropDown15Invoker" class="link-dark d-flex" href="#"
                                                            aria-controls="dropDown15" aria-haspopup="true"
                                                            aria-expanded="false" data-unfold-target="#dropDown15"
                                                            data-unfold-event="click" data-unfold-type="css-animation"
                                                            data-unfold-duration="300" data-unfold-animation-in="fadeIn"
                                                            data-unfold-animation-out="fadeOut">
                                                            <i class="gd-more-alt icon-text"></i>
                                                        </a>

                                                        <ul id="dropDown15"
                                                            class="unfold unfold-light unfold-top unfold-right position-absolute py-3 mt-1 unfold-css-animation unfold-hidden fadeOut"
                                                            aria-labelledby="dropDown15Invoker"
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="py-3">149531</td>
                                                <td class="py-3">
                                                    <div>John Doe</div>
                                                    <div class="text-muted">Acme Inc.</div>
                                                </td>
                                                <td class="py-3">(000) 111-1234</td>
                                                <td class="py-3">$1,230.00</td>
                                                <td class="py-3">
                                                    <span class="badge badge-pill badge-warning">Pending</span>
                                                </td>
                                                <td class="py-3">
                                                    <div class="position-relative">
                                                        <a id="dropDown14Invoker" class="link-dark d-flex" href="#"
                                                            aria-controls="dropDown14" aria-haspopup="true"
                                                            aria-expanded="false" data-unfold-target="#dropDown14"
                                                            data-unfold-event="click" data-unfold-type="css-animation"
                                                            data-unfold-duration="300" data-unfold-animation-in="fadeIn"
                                                            data-unfold-animation-out="fadeOut">
                                                            <i class="gd-more-alt icon-text"></i>
                                                        </a>

                                                        <ul id="dropDown14"
                                                            class="unfold unfold-light unfold-top unfold-right position-absolute py-3 mt-1 unfold-css-animation unfold-hidden fadeOut"
                                                            aria-labelledby="dropDown14Invoker"
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="py-3">149531</td>
                                                <td class="py-3">
                                                    <div>John Doe</div>
                                                    <div class="text-muted">Acme Inc.</div>
                                                </td>
                                                <td class="py-3">(000) 111-1234</td>
                                                <td class="py-3">$1,230.00</td>
                                                <td class="py-3">
                                                    <span class="badge badge-pill badge-danger">Cancelled</span>
                                                </td>
                                                <td class="py-3">
                                                    <div class="position-relative">
                                                        <a id="dropDown13Invoker" class="link-dark d-flex" href="#"
                                                            aria-controls="dropDown13" aria-haspopup="true"
                                                            aria-expanded="false" data-unfold-target="#dropDown13"
                                                            data-unfold-event="click" data-unfold-type="css-animation"
                                                            data-unfold-duration="300" data-unfold-animation-in="fadeIn"
                                                            data-unfold-animation-out="fadeOut">
                                                            <i class="gd-more-alt icon-text"></i>
                                                        </a>

                                                        <ul id="dropDown13"
                                                            class="unfold unfold-light unfold-top unfold-right position-absolute py-3 mt-1 unfold-css-animation unfold-hidden fadeOut"
                                                            aria-labelledby="dropDown13Invoker"
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="py-3">149531</td>
                                                <td class="py-3">
                                                    <div>John Doe</div>
                                                    <div class="text-muted">Acme Inc.</div>
                                                </td>
                                                <td class="py-3">(000) 111-1234</td>
                                                <td class="py-3">$1,230.00</td>
                                                <td class="py-3">
                                                    <span class="badge badge-pill badge-success">Fulfilled</span>
                                                </td>
                                                <td class="py-3">
                                                    <div class="position-relative">
                                                        <a id="dropDown12Invoker" class="link-dark d-flex" href="#"
                                                            aria-controls="dropDown12" aria-haspopup="true"
                                                            aria-expanded="false" data-unfold-target="#dropDown12"
                                                            data-unfold-event="click" data-unfold-type="css-animation"
                                                            data-unfold-duration="300" data-unfold-animation-in="fadeIn"
                                                            data-unfold-animation-out="fadeOut">
                                                            <i class="gd-more-alt icon-text"></i>
                                                        </a>

                                                        <ul id="dropDown12"
                                                            class="unfold unfold-light unfold-top unfold-right position-absolute py-3 mt-1 unfold-css-animation unfold-hidden fadeOut"
                                                            aria-labelledby="dropDown12Invoker"
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="py-3">149531</td>
                                                <td class="py-3">
                                                    <div>John Doe</div>
                                                    <div class="text-muted">Acme Inc.</div>
                                                </td>
                                                <td class="py-3">(000) 111-1234</td>
                                                <td class="py-3">$1,230.00</td>
                                                <td class="py-3">
                                                    <span class="badge badge-pill badge-light">Draft</span>
                                                </td>
                                                <td class="py-3">
                                                    <div class="position-relative">
                                                        <a id="dropDown11Invoker" class="link-dark d-flex" href="#"
                                                            aria-controls="dropDown11" aria-haspopup="true"
                                                            aria-expanded="false" data-unfold-target="#dropDown11"
                                                            data-unfold-event="click" data-unfold-type="css-animation"
                                                            data-unfold-duration="300" data-unfold-animation-in="fadeIn"
                                                            data-unfold-animation-out="fadeOut">
                                                            <i class="gd-more-alt icon-text"></i>
                                                        </a>

                                                        <ul id="dropDown11"
                                                            class="unfold unfold-light unfold-top unfold-right position-absolute py-3 mt-1 unfold-css-animation unfold-hidden fadeOut"
                                                            aria-labelledby="dropDown11Invoker"
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="py-3">149531</td>
                                                <td class="py-3">
                                                    <div>John Doe</div>
                                                    <div class="text-muted">Acme Inc.</div>
                                                </td>
                                                <td class="py-3">(000) 111-1234</td>
                                                <td class="py-3">$1,230.00</td>
                                                <td class="py-3">
                                                    <span class="badge badge-pill badge-success">Fulfilled</span>
                                                </td>
                                                <td class="py-3">
                                                    <div class="position-relative">
                                                        <a id="dropDown10Invoker" class="link-dark d-flex" href="#"
                                                            aria-controls="dropDown10" aria-haspopup="true"
                                                            aria-expanded="false" data-unfold-target="#dropDown10"
                                                            data-unfold-event="click" data-unfold-type="css-animation"
                                                            data-unfold-duration="300" data-unfold-animation-in="fadeIn"
                                                            data-unfold-animation-out="fadeOut">
                                                            <i class="gd-more-alt icon-text"></i>
                                                        </a>

                                                        <ul id="dropDown10"
                                                            class="unfold unfold-light unfold-top unfold-right position-absolute py-3 mt-1 unfold-css-animation unfold-hidden fadeOut"
                                                            aria-labelledby="dropDown10Invoker"
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
                                                </td>
                                            </tr>
                                        </tbody> -->
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                &copy; 2024 bestoptions pro. All Rights Reserved.
            </div>
        </div>
    </footer>
    <!-- End Footer -->
</div>

</DashboardLayout>
</template>

<style></style>