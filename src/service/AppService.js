import { apiClient } from "./BaseService.js"
export  class  AppController {
    static login(payload){
        return apiClient.appClient.post(`login`, payload)
    }

    static register(payload){
        return apiClient.appClient.post('register', payload)
    }

    static updateUserProfile(payload){
        return apiClient.appClient.post('update-profile', payload)
    }

    static uploadDoc(payload){
        return apiClient.appClient1.post('upload/', payload)
    }

    static readUploadDoc(payload){
        return apiClient.appClient.post('read-docs', payload)
    }

    static withdrawal(payload){
        return apiClient.appClient.post('withdrawal', payload)
    }

    static getWithdrawal(payload){
        return apiClient.appClient.post(`get_withdrawal`, payload)
    }

    static checkEmail(payload){
        return apiClient.appClient.post('check-email', payload)
    }
    static updateUser(payload){
        return apiClient.appClient.post('update-user', payload)
    }

    static doPasswordReset(payload){
        return apiClient.appClient.post('reset-password', payload)
    }

    static withdraw(payload){
        return apiClient.appClient.post('withdraw', payload)
    }

    static walletAddress(email){
        return apiClient.appClient.get(`read-wallets/${email}`)
    }

    static deposit(payload){
        return apiClient.appClient.post('deposit', payload)
    }

    static emailVerify(payload){
        return apiClient.appClient.post('email-verify', payload)
    }
    
}