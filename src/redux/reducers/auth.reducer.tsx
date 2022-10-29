import { AnyAction } from "redux";
import { AuthActions } from "../actionTypes";

const initialAuthState = { isLogged: true, user: {name:"Shakthi Sachintha", email:"shakthisachintha@gmail.com", id:1} }

const authReducer = (state = initialAuthState, action: AnyAction) => {
    switch (action.type) {
        case AuthActions.LOGGED_IN:
            return {
                isLogged: true,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    id: action.payload.id
                }
            }

        case AuthActions.LOGGED_OUT: return { isLogged: false, user: null }
        default:
            return state;
    }
}

export default authReducer;