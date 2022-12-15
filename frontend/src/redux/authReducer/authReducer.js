import { FILLSIGNUP, LOGIN, SIGNUP, VERIFYOTP } from "./actionTypes"

let initState = {
    token: localStorage.getItem('authToken'),
    isAuth: !!localStorage.getItem('authToken'),
    otpVerified: false,
    signupState: false,
    userExists: false,
    fillSignup: false,
    wrongOtp: false,
    successOtp: false,
    invalidEmail: false
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case VERIFYOTP:
            return {
                ...state, otpVerified: action.payload,
                wrongOtp: action.payload && action.payload !== 'email invalid' ? false : true,
                successOtp: action.payload && action.payload !== 'email invalid' ? true : false,
                invalidEmail: action.payload === 'email invalid' ? true : false
            }

        case SIGNUP:
            return {
                ...state, signupState: action.payload,
                userExists: action.payload ? false : true,
            }

        case LOGIN:
            localStorage.setItem('authToken', action.payload)
            return {
                ...state, isAuth: true
            }

        case FILLSIGNUP:
            return {
                ...state, fillSignup: action.payload,
                userExists: false
            }
        default:
            return state
    }

}