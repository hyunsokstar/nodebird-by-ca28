
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

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'



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

const dummyUser = (data) => ({
    ...data,
    nickname: '제로초',
    id: 1,
    Posts: [{ id: 1 }],
    Followings: [{ nickname: '부기초' }, { nickname: 'Chanho Lee' }, { nickname: 'neue zeal' }],
    Followers: [{ nickname: '부기초' }, { nickname: 'Chanho Lee' }, { nickname: 'neue zeal' }],
});

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
                me: dummyUser(action.data)
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

        case ADD_POST_TO_ME:
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: [{ id: action.data }, ...state.me.Posts],
                },
            };

            case REMOVE_POST_OF_ME:
                return {
                  ...state,
                  me: {
                    ...state.me,
                    Posts: state.me.Posts.filter((v) => v.id !== action.data),
                  },
                };

        default:
            return state;
    }
};

export default reducer;

