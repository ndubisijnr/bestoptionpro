<script setup>
import { reactive, ref, computed } from 'vue';
import StoreUtils from '../utils/storeUtils'

const loading = computed(() => {return StoreUtils.getter().auth.getLoading})
const login = reactive({
    email: null,
    password: null,
})



async function loginAction() {
    await StoreUtils.getter().auth.Login(login)
}
</script>
<template>

    <div class="content login0wrapper">

        <div class="container-fluid pb-5">

            <div class="row justify-content-md-center">
                <div class="card-wrapper col-12 col-md-4 mt-5">
                    <div class="brand text-center mb-3">
                        <router-link to="/"><div class="pl-2"><em style="font-size: 1.5rem;font-weight: 800;color: white;">BestOptionPro</em></div> </router-link>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Login</h4>
                            <form>
                                <div class="form-group">
                                    <label for="email">E-Mail Address</label>
                                    <input id="email" type="email" v-model="login.email" class="form-control"
                                        name="email" required="" autofocus="">
                                </div>

                                <div class="form-group">
                                    <label for="password">Password
                                    </label>
                                    <input id="password" v-model="login.password" type="password" class="form-control"
                                        name="password" required="">
                                    <div class="text-right pt-3">
                                        <a href="/reset-password" class="small text-black">
                                            Forgot Your Password?
                                        </a>
                                    </div>
                                </div>

                                <!-- <div class="form-group">
                                    <div class="form-check position-relative mb-2">
                                        <input type="checkbox" class="form-check-input d-none" id="remember"
                                            name="remember">
                                        <label class="checkbox checkbox-xxs form-check-label ml-1" for="remember"
                                            data-icon="&#xe936">Remember Me</label>
                                    </div>
                                </div> -->

                                <div class="form-group no-margin">
                                    <button type="button" @click="loginAction" :disabled="loading"
                                        class="btn btn-primary btn-block" style="cursor: pointer;">
                                       {{loading ? 'Loging in' : 'Log In'}}
                                        <span v-if="loading" class="ml-2 spinner-border spinner-border-sm" role="status"></span>
                                        <span class="sr-only">Loading...</span>
                                    </button>
                                </div>
                                <div class="text-center mt-3 small">
                                    Don't have an account? <a href="/register">Sign Up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <footer class="footer mt-3">
                        <div class="container-fluid">
                            <div class="footer-content text-center small">
                                <span class="text-muted">&copy; 2025 bestoption pro. All Rights Reserved.</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>



        </div>

    </div>

</template>

<style>
.login0wrapper{
    height: 100vh;
    background-image: url('../main/images/background.jpg');
    background-position: center;
}
</style>