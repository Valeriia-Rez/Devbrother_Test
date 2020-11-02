const initialState = {
    credentials: {
        username: "Admin",
        password: "12345"
    },
    authed: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return {
                ...state,
                authed: true
            }
        case 'APP_LOAD':
            return {
                ...state,
                authed: action.payload.isAuth
            }
            case 'LOGOUT_USER':
                return {
                    ...state,
                    authed: false
                }
    }

    return state;
};

export default reducer;