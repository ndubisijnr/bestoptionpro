<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue';
import DetailsComponent from '../components/DetailsComponent.vue';
import { ref } from 'vue';

let user = ref()

function getUser(payload) {
    user.value = payload
}

</script>
<template>
    <DashboardLayout v-slot:child @user="getUser">

        <div class="content">
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
                            <h4 class="lh-1 mb-1">${{ user?.walletBalance }}</h4>
                            <h6 class="mb-2">Balance</h6>

                            <router-link to="/deposit" class="btn btn-primary btn-block"> Deposit</router-link>

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
                            <h4 class="lh-1 mb-1">${{ user?.walletProfit }}</h4>
                            <h6 class="mb-2">Profit</h6>
                            <router-link to="/withdraw" class="btn btn-primary btn-block"> Withdraw</router-link>

                        </div>
                        <i class="gd-arrow-up icon-text d-flex text-success ml-auto"></i>
                    </div>
                    <!-- End Widget -->
                </div>

            </div>

            <div class="row">

                <div class="col-12">
                    <div class="card mb-3 mb-md-4" style="height: 29vh;">
                        <DetailsComponent></DetailsComponent>
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
                        &copy; 2025 best option pro. All Rights Reserved.
                    </div>
                </div>
            </footer>
            <!-- End Footer -->
        </div>

    </DashboardLayout>
</template>

<style></style>