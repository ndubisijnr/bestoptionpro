<script setup>
import {computed, reactive} from "vue";
import StoreUtils from "../utils/storeUtils.js";

const loading = computed(() => {return StoreUtils.getter().auth.getLoading})

const passwordReset1 = reactive({
  email:null
})

function checkEmail() {
  StoreUtils.getter().auth.checkEmail(passwordReset1)
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
                            <label for="email">E-Mail Address</label>
                            <input id="email" type="email" v-model="passwordReset1.email" class="form-control" name="email" required="" autofocus="">
                        </div>

                        <div class="form-group no-margin">
                            <button  class="btn btn-primary btn-block" @click="checkEmail">
                              {{loading ? 'Checking Email' : 'Send' }}
                              <span v-if="loading" class="ml-2 spinner-border spinner-border-sm" role="status"></span>
                            </button>
                        </div>
                        <div class="text-center mt-3 small">
                            Don't have an account? <a href="/register">Sign Up</a>
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