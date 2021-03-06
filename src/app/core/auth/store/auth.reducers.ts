import * as AuthActions from '@app/core/auth/store/auth.actions';

export interface State {
    isAuthorized: boolean;
    token: string;
    tokenPristine: boolean;
}

const initialState: State = {
    isAuthorized: false,
    token: '',
    tokenPristine: true
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case (AuthActions.SIGNIN):
            return {
                ...state,
                isAuthorized: true
            };
        case (AuthActions.SIGNOUT):
            return {
                ...state,
                isAuthorized: false
            };
        case (AuthActions.SIGNUP):
            return {
                ...state,
                isAuthorized: false
            };
        case (AuthActions.SET_TOKEN):
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
                tokenPristine: false,
            };
        default:
            return state;
    }
}
