import {defineStore} from 'pinia'
import {AppController} from '../../service/AppService'
import {router} from '../../router'
import StoreUtils from '../../utils/storeUtils'

const doc = sessionStorage.doc ? sessionStorage.doc : null

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        loading: false,
        users:null,
        wallets:null,
        isOtp:'false',
        transactions:null,
        documentUploadResponse:null,
        documentUploadLoading:false,
        withdrawalLoading:false,
        error:null,
        success:null,
        withdrawals:null
    }),

    getters: {
        getUsers:state => state.users || JSON.parse(sessionStorage.user),
        getWallets: state => state.wallets,
        getError: state => state.error,
        getSuccess: state => state.success,
        getLoading:state => state.loading,
        getWithdrawalLoading:state => state.withdrawalLoading,
        getIsOtp:state => state.isOtp,
        getTransactions:state => state.transactions || JSON.parse(sessionStorage.transactions),
        getDocumentUploadLoading:state => state.documentUploadLoading,
        getWithdrawals:state => state.withdrawals,
        getDocumentUploadResponse:state => state.documentUploadResponse || JSON.parse(doc),
    },

    actions: {

    
        async Login(payload){
            this.loading = true
            const response = await AppController.login(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                    this.users= responseData.user
                    sessionStorage.user = JSON.stringify(responseData.user)
                    sessionStorage.email = responseData.user.email
                    sessionStorage.transactions = JSON.stringify(responseData.withdraws)
                    if(this.users.verified){
                        this.transactions = responseData.withdraws
                        await router.push({name: "Dashboard"})
                        await StoreUtils.getter().auth.readWallets(responseData.user.email)
                    }
                    else router.push({name:"AccountNotVerified"})
                    
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                this.loading = false
                alert(e)

            }
        },
        

        async register(payload){
            this.loading = true
            const response = await AppController.register(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                    alert(responseData.message)

                    this.isOtp = 'true'
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                this.loading = false
                alert(e)

            }
        },

        async updateUserProfileAction(payload){
            this.loading = true
            const response = await AppController.updateUserProfile(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                    alert(responseData.message)
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                this.loading = false
                alert(e)
            }
        },

        async withdrawalAction(payload){
            this.error = null
            this.success = null
            this.withdrawalLoading = true
            const response = await AppController.withdrawal(payload)
            const responseData = response.data

            try{
                this.withdrawalLoading = false
                if(responseData.code === '00'){
                    this.success = responseData.message
                    alert(responseData.message)
                    await StoreUtils.getter().auth.updateUser({email:sessionStorage.getItem('email')})
                    location.reload()

                }else{

                    this.error = responseData.message
                }
            }catch(e){
                this.withdrawalLoading = false
                alert(e)


            }
        },

        async getWithdrawalAction(payload){
            this.error = null
            this.success = null
            const response = await AppController.getWithdrawal(payload)
            const responseData = response.data

            try{
                this.withdrawals = responseData.data
            }catch(e){
                alert(e)
            }
        },

        async readUploadDocAction(payload){
            this.documentUploadLoading = true
            const response = await AppController.readUploadDoc(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                    this.documentUploadResponse = responseData.data
                    sessionStorage.doc = JSON.stringify(responseData.data)
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                this.loading = false
                alert(e)
            }
        },

        async uploadDocAction(payload){
            this.documentUploadLoading = true
            const response = await AppController.uploadDoc(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                   await this.readUploadDocAction({email:this.users.email})
                   await location.reload()
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                this.loading = false
                alert(e)

            }
        },



        async doDeposit(payload){
            this.loading = true
            const response = await AppController.deposit(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                    alert(responseData.message)
                    location.reload()
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                this.loading = false
                alert(e)
            }
        },

        async doWithdraw(payload){
            this.loading = true
            const response = await AppController.withdraw(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                    alert(responseData.message)
                }else{
                    alert(responseData.message)                }
            }catch(e){
                this.loading = false
                alert(e)
            }
        },

        async checkEmail(payload){
            this.loading = true
            const response = await AppController.checkEmail(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                    alert(responseData.message)
                    await router.push({name:"PasswordReset2", query:{email:payload.email}})
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                this.loading = false
                alert(e)
            }
        },

        async updateUser(payload){
            const response = await AppController.updateUser(payload)
            const responseData = response.data
            this.users= responseData.user
            sessionStorage.user = JSON.stringify(responseData.user)
            sessionStorage.email = responseData.user.email
            sessionStorage.transactions = JSON.stringify(responseData.withdraws)

        },

        async resetPassword(payload){
            payload.email = router.currentRoute.value.query.email
            this.loading = true
            const response = await AppController.doPasswordReset(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                    alert(responseData.message)
                    await router.push({name:"Login"})
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                this.loading = false
                alert(e)

            }
        },

        async verifyEmail(payload){
            this.loading = true
            const response = await AppController.emailVerify(payload)
            const responseData = response.data

            try{
                this.loading = false
                if(responseData.code === '00'){
                    alert(responseData.message)
                    this.isOtp = 'false'
                    router.push({name:"Login"})
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                alert(e)

            }
        },

        async readWallets(payload){
            const response = await AppController.walletAddress(payload)
            const responseData = response.data

            try{
                if(responseData.code === '00'){
                    this.wallets = responseData.address
                }else{
                    alert(responseData.message)
                }
            }catch(e){
                this.loading = false
                alert(e)
            }
        },

    }
})