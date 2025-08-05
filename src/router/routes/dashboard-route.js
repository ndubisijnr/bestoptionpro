export const dashboardRoute = [
    {
        name: "Home",
        path: '/',
        component: () => import("../../pages/Home.vue"),
        meta: {authRequired:false, layout:'dashboard'}
    },
    {
        name: "Software",
        path: '/software',
        component: () => import("../../pages/Software.vue"),
        meta: {authRequired:false, layout:'dashboard'}
    },
    {
        name: "OilAndGas",
        path: '/oil-and-gas',
        component: () => import('../../pages/OilAndGas.vue'),
        meta: {authRequired:false, layout:'dashboard'}
    },
    {
        name: "Investment",
        path: '/investment-plans',
        component: () => import('../../pages/InvestmentPlan.vue'),
        meta: {authRequired:false, layout:'dashboard'}
    },
    {
        name: "Transactions",
        path: '/transactions',
        component: () => import('../../pages/Transactions.vue'),
        meta: {authRequired:true, layout:'dashboard'}
    },
    
    {
        name: "OptionTrading",
        path: '/option-trading',
        component: () => import("../../pages/OptionsTrading.vue"),
        meta: {authRequired:false, layout:'dashboard'}
    },
    {
        name: "Futures",
        path: '/futures',
        component: () => import("../../pages/Futures.vue"),
        meta: {authRequired:false, layout:'dashboard'}
    },
    {
        name: "AdvanceTrading",
        path: '/advance-trading',
        component: () => import("../../pages/AdvanceOptions.vue"),
        meta: {authRequired:false, layout:'dashboard'}
    },
    {
        name: "RealEstate",
        path: '/real-estate',
        component: () => import("../../pages/RealEstate.vue"),
        meta: {authRequired:false, layout:'dashboard'}
    },

    {
        name: "Dashboard",
        path: '/dashboard',
        component: () => import("../../pages/Dashboard.vue"),
        meta: {authRequired:true, layout:'dashboard'}
    },
   
    {
        name: "CryptoMarket",
        path: '/invest/crypto-market',
        component: () => import("../../pages/Crypto.vue"),
        meta: {authRequired:true, layout:'dashboard'}
    },
    {
        name: "AccountNotVerified",
        path: '/verification',
        component: () => import("../../pages/AccountNotVerified.vue"),
        meta: {authRequired:true, layout:'dashboard'}
    },
    {
        name: "Deposit",
        path: '/deposit',
        component: () => import("../../pages/Deposit.vue"),
        meta: {authRequired:true, layout:'dashboard'}
    },
    {
        name: "SysDetails",
        path: '/details',
        component: () => import("../../pages/SysDetails.vue"),
        meta: {authRequired:true, layout:'dashboard'}
    },
    {
        name: "Withdraw",
        path: '/withdraw',
        component: () => import("../../pages/Withdraw.vue"),
        meta: {authRequired:true, layout:'dashboard'}
    },
    {
        name: "WithdrawSwitch",
        path: '/withdraw/switch',
        component: () => import("../../pages/WithdrawProcess.vue"),
        meta: {authRequired:true, layout:'dashboard'}
    },
    {
        name: "StockMarket",
        path: '/invest/stock-market',
        component: () => import("../../pages/Stock.vue"),
        meta: {authRequired:true, layout:'dashboard'}
    },
    {
        name: "Payout",
        path: '/payout',
        component: () => import("../../pages/Payout.vue"),
        meta: {authRequired:true, layout:'dashboard'}
    }
    
    
]