export const authRoute = [
    {
        name: "Login",
        path: '/login',
        component: () => import("../../pages/Login.vue"),
        meta: {authRequired:false, layout:'auth'}
    },
    {
        name: "Register",
        path: '/register',
        component: () => import("../../pages/Register.vue"),
        meta: {authRequired:false, layout:'auth'}
    },
    {
        name: "PasswordReset",
        path: '/reset-password',
        component: () => import("../../pages/PasswordReset.vue"),
        meta: {authRequired:false, layout:'auth'}
    },
    {
        name: "PasswordReset2",
        path: '/reset-password-screen2',
        component: () => import("../../pages/PasswordReset2.vue"),
        meta: {authRequired:false, layout:'auth'}
    },
    
]