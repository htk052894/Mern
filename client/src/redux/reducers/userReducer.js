const isEmpty = require("is-empty");

const initialState = {
    user: null,
    isAuthenticated: false,
    isRegistered: false,
    loginError: null,
    registerError: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.json),
                user: action.json,
            };
        case 'SET_CURRENT_USER_FAILED':
            return {
                ...state,
                loginError: action.error,
            };
        case 'SET_REGISTER_USER':
            return {
                ...state,
                isRegistered: !isEmpty(action.json)
            };
        case 'SET_REGISETER_USER_FAILED':
            return {
                ...state,
                registerError: action.error
            };
        default:
            return state;
    }
};
export default userReducer;
