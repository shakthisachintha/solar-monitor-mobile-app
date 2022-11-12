import { AnyAction } from "redux";
import { AuthState } from "../../types/store.types";
import { AuthActions } from "../actionTypes";

const initialAuthState: AuthState =
{
    isLogged: false,
    user: null
}

const authReducer = (state: AuthState = initialAuthState, action: AnyAction) => {
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