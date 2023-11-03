interface AuthState {
    LoggedIn: boolean;
    user: null | { id: string };
}

const initialState: AuthState = {
    LoggedIn: false,
    user: null
};

type AuthAction = { type: 'SUCCESS'; payload: { id: string } } | { type: 'LOGOUT' };

const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch(action.type) {
        case 'SUCCESS': 
            return{
                LoggedIn: true,
                user: action.payload
            };
        case "LOGOUT": 
            return initialState;
        default:
            return state;
    }
};

export default authReducer;