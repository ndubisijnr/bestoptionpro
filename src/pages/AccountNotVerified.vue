<script setup>
import StoreUtils from '../utils/storeUtils';

const user = StoreUtils.getter().auth.getUsers


 function Logout(){
    sessionStorage.clear()
    location.reload()
}

</script>
<template>

    <div class="content">

        <div class="py-4 px-3 px-md-4">
            <!-- Breadcrumb -->
            <nav class="d-none d-md-block" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <div @click="Logout" class="link-muted" style="cursor: pointer;">&lt; Back</div>
                    </li>
                </ol>
            </nav>
            <!-- End Breadcrumb -->

            <h1 class="h3 mb-3 mb-md-4">Etfsmartpro</h1>

            <!-- Page content -->
            <div class="card mb-3 mb-md-4">
                <div class="card-body">
                    <h3>Thank You for Onboarding...</h3>

                    <div id="lipsum">
                        <p>
                            Dear <b style="text-transform: capitalize;">{{user?.firstname + ' ' + user?.lastname}},</b> <br /><br />

                            Your account is currently pending verification. Our team is reviewing your details and will
                            update your status shortly.


                            If you require any assistance or have any questions, please don't hesitate to contact our
                            support team at <a href="mailto:support@bestoptionsfx.com">support@bestoptionspro.com</a>.

                            <br /><br />

                            Thank you for your patience.

                            <br />

                            Best regards,
                            Etfsmartpro Support Team
                        </p>

                    </div>
                </div>
            </div>
            <!-- End Page Content -->


        </div>
        <footer class="footer mt-3 bg-body">
            <div class="container-fluid">
                <div class="footer-content text-center small">
                    <span class="text-muted">&copy; 2024 bestoptions pro. All Rights Reserved.</span>
                </div>
            </div>
        </footer>

    </div>

</template>

<style></style>