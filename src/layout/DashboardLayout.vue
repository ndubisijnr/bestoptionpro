<script setup>
import { ref, defineEmits } from 'vue';
import { router } from "../router/index";
import StoreUtils from '../utils/storeUtils';
import { onMounted, reactive } from 'vue';
import UpdateProfile from "../components/UpdateProfile.vue";


const user = StoreUtils.getter().auth.getUsers

const currentRoute = ref(router.currentRoute._value.path)
const emit = defineEmits(['user']);

const updateuser = reactive({
  email:null
})
onMounted(() => {
    updateuser.email = sessionStorage.getItem('email');
    emit('user', user)
    StoreUtils.getter().auth.updateUser(updateuser)
})


function Logout() {
    sessionStorage.clear()
    location.reload()
}

</script>

<template>

    <div>
      <UpdateProfile v-if="!user.isProfileUpdated"></UpdateProfile>

      <!-- Header -->
      <header class="header">
        <nav class="navbar navbar-expand-lg" style="background-color: white;">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Etfsmartpro</a>
            <img class="navbar-toggler" src="../assets/undraw_asymmetric-parallels.svg"   type="button" data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                 aria-expanded="false" aria-label="Toggle navigation"/>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul id="sideNav" class="navbar-nav me-auto mb-2 mb-lg-0">


                <!-- Dashboard -->
                <li class="nav-item" :class="{ 'active': currentRoute === '/dashboard' }">
                  <router-link class="side-nav-menu-link media align-items-center" to="/dashboard">
                            <span class="side-nav-menu-icon d-flex mr-3">
                                <i class="gd-dashboard"></i>
                            </span>
                    <span class="side-nav-fadeout-on-closed media-body">Dashboard</span>
                  </router-link>
                </li>

                <!-- Dashboard -->
                <li class="nav-item" :class="{ 'active': currentRoute === '/invest/stock-market' }">

                  <router-link class="side-nav-menu-link media align-items-center" to="/invest/stock-market">
                            <span class="side-nav-menu-icon d-flex mr-3">
                                <i class="gd-rocket"></i>
                            </span>
                    <span class="side-nav-fadeout-on-closed media-body">Stock Market</span>
                  </router-link>
                </li>
                <!-- End Dashboard -->

                <!-- Transactions -->
                <li class="nav-item" :class="{ 'active': currentRoute === '/invest/stock-market' }">

                  <router-link class="side-nav-menu-link media align-items-center" to="/transactions">
                            <span class="side-nav-menu-icon d-flex mr-3">
                                <i class="gd-notepad"></i>
                            </span>
                    <span class="side-nav-fadeout-on-closed media-body">Transactions</span>
                  </router-link>
                </li>
                <!-- End Transactions -->

                <!-- Dashboard -->
                <li class="nav-item" :class="{ 'active': currentRoute === '/invest/crypto-market' }">

                  <router-link class="side-nav-menu-link media align-items-center" to="/invest/crypto-market">
                            <span class="side-nav-menu-icon d-flex mr-3">
                                <i class="gd-rocket"></i>
                            </span>
                    <span class="side-nav-fadeout-on-closed media-body">Crypto Market</span>
                  </router-link>
                </li>
                <!-- End Dashboard -->






                <!-- widthdrawals -->
                <li class="nav-item" :class="{ 'active': currentRoute === '/investment-plans' }">
                  <router-link class="side-nav-menu-link media align-items-center" to="/investment-plans">
                            <span class="side-nav-menu-icon d-flex mr-3">
                                <i class="gd-money"></i>
                            </span>
                    <span class="side-nav-fadeout-on-closed media-body">Investment Plans</span>
                  </router-link>
                </li>
                <!-- End Dashboard -->




                <!-- Settings -->
                <!-- <li class="nav-item" :class="{ 'active': currentRoute === '/profile' }">
                    <router-link class="side-nav-menu-link media align-items-center" to="/profile">
                        <span class="side-nav-menu-icon d-flex mr-3">
                            <i class="gd-user"></i>
                        </span>
                        <span class="side-nav-fadeout-on-closed media-body">Profile</span>
                    </router-link>
                </li> -->
                <!-- End Settings -->

                <!-- Static -->
                <!-- <li class="side-nav-menu-item">
                    <a class="side-nav-menu-link media align-items-center" href="static-non-auth.html">
                        <span class="side-nav-menu-icon d-flex mr-3">
                            <i class="gd-file"></i>
                        </span>
                        <span class="side-nav-fadeout-on-closed media-body">Static page</span>
                    </a>
                </li> -->
                <!-- End Static -->

                <!--logout-->
                <li class="nav-item">
                  <div class="side-nav-menu-link media align-items-center" @click="Logout"
                       style="cursor: pointer;">
                            <span class="side-nav-menu-icon d-flex mr-3">
                                <i class="gd-power-off"></i>
                            </span>
                    <span class="side-nav-fadeout-on-closed media-body">Logout</span>
                  </div>
                </li>
                <!--end logout-->

              </ul>

              <div class="header-content col px-md-3">
                <div class="d-flex align-items-center">
                  <!-- Side Nav Toggle -->
                  <!-- <a class="js-side-nav header-invoker d-flex mr-md-2" href="#" data-close-invoker="#sidebarClose"
                      data-target="#sidebar" data-target-wrapper="body">
                      <i class="gd-align-left"></i>
                  </a> -->
                  <!-- End Side Nav Toggle -->

                  <!-- User Notifications -->
                  <div class="dropdown ml-auto">
                    <a id="notificationsInvoker" class="header-invoker" href="#" aria-controls="notifications"
                       aria-haspopup="true" aria-expanded="false" data-unfold-event="click"
                       data-unfold-target="#notifications" data-unfold-type="css-animation"
                       data-unfold-duration="300" data-unfold-animation-in="fadeIn"
                       data-unfold-animation-out="fadeOut">
                                <span
                                    class="indicator indicator-bordered indicator-top-right indicator-primary rounded-circle"></span>
                      <i class="gd-bell"></i>
                    </a>

                    <div id="notifications"
                         class="dropdown-menu dropdown-menu-center py-0 mt-4 w-18_75rem w-md-22_5rem unfold-css-animation unfold-hidden"
                         aria-labelledby="notificationsInvoker" style="animation-duration: 300ms;">
                      <div class="card">
                        <div class="card-header d-flex align-items-center border-bottom py-3">
                          <h5 class="mb-0">Notifications</h5>
                          <a class="link small ml-auto" href="#">Clear All</a>
                        </div>

                        <div class="card-body p-0">
                          <div class="list-group list-group-flush">
                            <div class="list-group-item list-group-item-action">
                              <div class="d-flex align-items-center text-nowrap mb-2">
                                <i class="gd-info-alt icon-text text-primary mr-2"></i>
                                <h6 class="font-weight-semi-bold mb-0">New Update</h6>
                                <span class="list-group-item-date text-muted ml-auto">just
                                                        now</span>
                              </div>
                              <p class="mb-0">
                                Order <strong>#10000</strong> has been updated.
                              </p>
                              <a class="list-group-item-closer text-muted" href="#"><i
                                  class="gd-close"></i></a>
                            </div>
                            <div class="list-group-item list-group-item-action">
                              <div class="d-flex align-items-center text-nowrap mb-2">
                                <i class="gd-info-alt icon-text text-primary mr-2"></i>
                                <h6 class="font-weight-semi-bold mb-0">New Update</h6>
                                <span class="list-group-item-date text-muted ml-auto">just
                                                        now</span>
                              </div>
                              <p class="mb-0">
                                Order <strong>#10001</strong> has been updated.
                              </p>
                              <a class="list-group-item-closer text-muted" href="#"><i
                                  class="gd-close"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End User Notifications -->
                  <!-- User Avatar -->
                  <div class="dropdown mx-3 dropdown ml-2">
                    <a id="profileMenuInvoker" class="header-complex-invoker" href="#"
                       aria-controls="profileMenu" aria-haspopup="true" aria-expanded="false"
                       data-unfold-event="click" data-unfold-target="#profileMenu"
                       data-unfold-type="css-animation" data-unfold-duration="300"
                       data-unfold-animation-in="fadeIn" data-unfold-animation-out="fadeOut">
                      <!--img class="avatar rounded-circle mr-md-2" src="#" alt="John Doe"-->
                      <span class="mr-md-2 avatar-placeholder">{{ user.firstname[0] }}</span>
                      <span class="d-none d-md-block">{{ user.firstname }} {{ user.lastname }}</span>
                      <!-- <i class="gd-angle-down d-none d-md-block ml-2"></i> -->
                    </a>

                    <ul id="profileMenu"
                        class="unfold unfold-user unfold-light unfold-top unfold-centered position-absolute pt-2 pb-1 mt-4 unfold-css-animation unfold-hidden fadeOut"
                        aria-labelledby="profileMenuInvoker" style="animation-duration: 300ms;">
                      <li class="unfold-item">
                        <a class="unfold-link d-flex align-items-center text-nowrap" href="#">
                                        <span class="unfold-item-icon mr-3">
                                            <i class="gd-user"></i>
                                        </span>
                          My Profile
                        </a>
                      </li>
                      <li class="unfold-item unfold-item-has-divider">
                        <a class="unfold-link d-flex align-items-center text-nowrap" href="#">
                                        <span class="unfold-item-icon mr-3">
                                            <i class="gd-power-off"></i>
                                        </span>
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- End User Avatar -->
                </div>
              </div>
            </div>
          </div>
        </nav>

      </header>
      <!-- End Header -->
      <main class="main">
        <!-- Sidebar Nav -->


        <!-- End Sidebar Nav -->

        <slot name="child"></slot>
      </main>
    </div>

</template>

<style>

</style>