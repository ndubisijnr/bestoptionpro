<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue';
import {ref, onMounted, reactive, computed} from 'vue';
import StoreUtils from '../utils/storeUtils';
import {router} from "../router/index.js";


let user = ref()

let selectedItem = ref()

const image = ref(null)

const isDocVerified = computed(() => {
  return StoreUtils.getter().auth.getDocumentUploadResponse
})

let amount = ref()

let isFocus = ref(false)

const qrcode = ref();

const textToCopy = ref('');

const copySuccess = ref(false);

const imageFile = ref(null)

const documentUpload = reactive({
  file:null,
  email:null
})

function getUser(payload) {
   
    user.value = payload
}

function selectItem(obj) {
    isFocus.value = true
    selectedItem.value = obj
    router.push({name:'WithdrawSwitch', query:{coin:JSON.stringify(obj.coinName)}})
}

const copyText = async () => {
  try {
    await navigator.clipboard.writeText(selectedItem.value.coinAddress);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};


function withdraw() {
    if(!amount.value){
        alert("Please enter an amount")
        return;
    }
    if (user?.walletBalance > amount.value) {
        
    }
    else {
      alert("You have Insufficient Balance")
        setTimeout(() => {
            location.reload()
        },2500)
       
    }

}

const wallets = StoreUtils.getter().auth.getWallets

function cancel(){
  location.reload()
}

async function handleFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  imageFile.value = file

  console.log(imageFile)

  const reader = new FileReader();
  try {
    reader.onload = async e => {
      image.value = e.target.result
    };
    reader.readAsDataURL(file);
  } catch (e) {
  }
}

function handleUpload() {
  const uploadModal = document.getElementById('upload_logo')
  if (uploadModal) {
    uploadModal.click()
  }
}

function upload() {
  console.log(imageFile)

  const formData = new FormData();

  // Assuming 'file' and 'user' are DOM elements holding your file and user data
  formData.append('file', imageFile.value);  // 'file.files[0]' gets the selected file
  formData.append('email', user.value.email);  // Add the user's email to FormData

  // Now you can use StoreUtils to send this formData directly
  StoreUtils.getter().auth.uploadDocAction(formData)
      .then(response => {
        console.log('File uploaded successfully:', response);
        // Handle the response here, such as updating the UI or notifying the user
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        // Handle the error here, such as showing an error message to the user
      });
}

onMounted(() => {
    StoreUtils.getter().auth.readWallets()
    StoreUtils.getter().auth.readUploadDocAction({email:user.value.email})
})




</script>
<template>
    <DashboardLayout v-slot:child @user="getUser">
        <!-- Modal -->
        <div id="exampleModal" class="modal fade" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog rounded" role="document">
                <div class="modal-content">
                    <h4 id="exampleModalLabel" class="modal-title mx-auto mb-4">Enter {{ selectedItem?.coinName }} Amount to Withdraw</h4>

                    <p style="font-weight: 600;font-size: 1.2rem;">Current Balance: <span style="color: green;font-weight: 600;font-size: 1.2rem;">$ {{ user?.walletBalance }}</span></p>
                    <input type="number" autofocus="true" :autofocus="isFocus" v-model="amount"
                        :placeholder="`${selectedItem?.coinName} 0.00`" class="inputtt mb-5"
                        />

                  <input type="text"  v-model="amount"
                         placeholder="Enter BTC Wallet Address" class="inputtt mb-5"
                  />

<!--                  <select class="inputtt" style="height: 30px">-->
<!--                    <option>Select Your Wallet Name</option>-->
<!--                    <option>Luno</option>-->
<!--                  </select>-->




                    <div class="btn btn-primary mt-5" @click="withdraw">Withdraw</div>

                </div>
            </div>

        </div>
        <!-- End Modal -->

      <!-- Modal2 -->
      <div id="exampleModal2" class="modal fade" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog rounded" role="document">
          <div class="modal-content">

            <div class="w-full border-2 d-flex h-auto p-3 flex-column" style="cursor: pointer; height: 100px;border: solid gray 1px;border-style:dashed;align-items: center;justify-content: center">
              <div class="w-full flex items-center justify-center" v-if="image">
                <img :src="image" class="img-thumbnail" width="250" alt="document_thumb"/>
              </div>

              <p @click="handleUpload" class="mt-5">{{ image ? 'Change Document' : 'Browse From Device' }}</p>

            </div>

            <input type="file" id="upload_logo" accept="image/*" @change="handleFile($event)"
                   class="d-none">

            <div class="d-flex justify-content-center align-items-center gap-2 mt-5">
              <div class="btn btn-primary" @click="upload">Upload Document</div>
              <div class="btn-danger btn" style="background-color: #dc3e3e;border: none" @click="cancel">Cancel Upload</div>

            </div>

          </div>
        </div>

      </div>
      <!-- End Modal2 -->

        <div class="content">
            <div class="py-4 px-3 px-md-4">

                <div class="mb-3 mb-md-4 d-flex justify-content-between">
                    <div class="h3 mb-0">Select Withdrawal Method</div>
                </div>


                <div v-if="!isDocVerified?.file" class="mb-3 mb-md-4 bg-soft-secondary" style="width: 30rem; padding: 10px;border-radius: .4rem">
                  <div class="h5 mb-0">KYC Verification Required To Process Withdrawal</div>
                  <div class="mt-3">
                    <p>Upload any government issued identification document</p>
                    <p>✅ Passport</p>
                    <p>✅ ID</p>
                    <p>✅ Driver Licence etc</p>

                  </div>
                  <div data-toggle="modal" aria-expanded="false"
                       aria-controls="exampleModal2" data-target="#exampleModal2"
                       class="btn btn-dark rounded-pill" style="cursor: pointer;">Do KYC Verification</div>
                </div>

               <div v-else>
                 <div v-if="isDocVerified?.is_verified" class="mb-3 mb-md-4 bg-soft-success text-center" style="width: 20rem; padding: 10px;border-radius: .4rem">
                   <div class="h5 mb-0">KYC Verification was successful</div>
                 </div>
                 <div  v-else class="mb-3 mb-md-4 bg-semi-soft-warning text-center" style="width: 20rem; padding: 10px;border-radius: .4rem">
                   <div class="h5 mb-0">KYC Verification is ongoing</div>
                 </div>
               </div>


              <div class="mb-3 mb-md-4 d-flex justify-content-between">
                    <div class="h5 mb-0">Withdraw with Fiat</div>
                </div>

                <div class="row">

                    <div class="col-md-6 col-xl-4 mb-3 mb-xl-4" style="cursor: pointer;">
                        <!-- Widget -->
                        <div class="card flex-row align-items-center p-3 p-md-4">
                            <div class="icon icon-lg bg-soft-secondary rounded-circle mr-3">
                                <i class="gd-wallet icon-text d-inline-block text-secondary"></i>
                            </div>
                            <div>
                                <h4 class="lh-1 mb-2">Withdraw with Bank Transfer</h4>
                                <h6 class="mb-2">Bank Transfer,paypal,cashapp and more</h6>

                            </div>
                        </div>
                        <!-- End Widget -->
                    </div>

                </div>

                <div class="mb-3 mb-md-4 d-flex justify-content-between">
                    <div class="h5 mb-0">Withdraw with Crypto</div>
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
                                <h4 class="lh-1 mb-2">Withdraw with Crypto</h4>
                                <h6 class="mb-2">Withdraw directly to your wallet</h6>

                            </div>
                        </div>
                        <div class="collapse bg-white p-4" id="collapseExample">
                            <div>
                                <h6>Recommended</h6>
                                <div class="mb-5 d-flex justify-content-start">
                                    <div  @click="selectItem(i)"
                                        class="btn btn-dark rounded-pill mr-2" style="cursor: pointer;"
                                        v-for="(i, index) in wallets" :key="index">{{ i.coinName }}</div>
                                </div>

                                <div>
                                    <h3>Steps</h3>
                                    <p>1. Choose your prefered crypto</p>
                                    <p>2. Input amount to withdraw</p>
                                    <p>3. Patse your selected wallet address</p>
                                    <p>4. Click widthdraw</p>

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

.inputtt::placeholder {
  font-size: 1rem;
}

.inputtt {
  font-size: 1rem;
  font-weight: 500;
}

</style>