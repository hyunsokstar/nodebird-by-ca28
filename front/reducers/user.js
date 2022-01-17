export const initialState = {
    // isLoggedIn: false,
    // signUpData: {},
    // loginData: {},
    me: null,
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,

    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
};

// export const loginAction = (data) => {
//     return {
//         type: "LOG_IN",
//         data,
//     };
// };

// export const logoutAction = () => {
//     return {
//         type: "LOG_OUT",
//     };
// };

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "LOG_IN":
//             return {
//                 ...state,
//                 isLoggedIn: true,
//                 me: action.data,

//             };
//         case "LOG_OUT":
//             return {
//                 ...state,
//                 isLoggedIn: false,
//             };
//         default:
//             return state;
//     }
// };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                logInLoading: true,
                logInError: null,
                logInDone: false
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                logInLoading: false,
                logInDone: true,
                me: action.data,
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                logInLoading: false,
                logInError: action.data
            };
        case LOG_OUT_REQUEST:
            return {
                ...state,
                logOutLoading: true,
                logouterror: null,
                logOutDone: false
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                logOutLoading: false,
                logOutDone: true,
                me: null,
            };
        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutLoading: false,
                logouterror: action.error,
            };
        default:
            return state;
    }
};

export default reducer;

