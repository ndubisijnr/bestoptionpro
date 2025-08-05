<script setup>

import {computed, reactive} from "vue";
import StoreUtils from "../utils/storeUtils.js";

const loading = computed(() => {return StoreUtils.getter().auth.getLoading})

const confirmPasswordReset2 = reactive({
  password:null
})

const passwordReset2 = reactive({
  email:null,
  password:null,
  otp:null
})

function resetPassword(){
  if(confirmPasswordReset2.password !== passwordReset2.password){
    alert('Password Doesn\'t Match')
    return;
  }

  if(passwordReset2.password.length < 6){
    alert('Password should be up to 6 characters\'')

    return;
  }

  if(!passwordReset2.otp){
    alert('\'OTP is Required')
    return;
  }

  StoreUtils.getter().auth.resetPassword(passwordReset2)
}
</script>
<template>
    <div class="content login0wrapper">

<div class="container-fluid pb-5">

    <div class="row justify-content-md-center">
        <div class="card-wrapper col-12 col-md-4 mt-5">
            <div class="brand text-center mb-3">
                <h3 class="text-white">Etfsmartpro</h3>
            </div>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Reset Password</h4>
                    <div>

                      <div class="form-group">
                        <label for="password">Email Verification Code/OTP
                        </label>
                        <input id="password" type="text" v-model="passwordReset2.otp" class="form-control" name="otp" required="">
                      </div>
                        <div class="form-group">
                            <label for="password">Password
                            </label>
                            <input id="password" type="password" v-model="passwordReset2.password" class="form-control" name="password" required="">
                        </div>
                        
                        <div class="form-group">
                            <label for="password-confirm">Confirm Password
                            </label>
                            <input id="password-confirm" type="password" v-model="confirmPasswordReset2.password" class="form-control" name="password_confirmation" required="">
                        </div>

                        <div class="form-group no-margin">
                            <button class="btn btn-primary btn-block" @click="resetPassword">
                              {{loading ? 'Working' :  'Reset Password' }}
                              <span v-if="loading" class="ml-2 spinner-border spinner-border-sm" role="status"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer mt-3">
                <div class="container-fluid">
                    <div class="footer-content text-center small">
                        <span class="text-muted">&copy; 2024 bestoptions pro. All Rights Reserved.</span>
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