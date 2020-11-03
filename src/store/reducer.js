const initialState = {
    credentials: {
        username: "Admin",
        password: "12345"
    },
    authed: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'APP_LOAD':
            return {
                ...state,
                authed: action.payload.isAuth
            }
        case 'LOGIN_USER':
            return {
                ...state,
                authed: true
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                authed: false
            }
        default:
            return state
    }
};

export default reducer;