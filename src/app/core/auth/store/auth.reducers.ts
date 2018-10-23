import * as AuthActions from '@app/core/auth/store/auth.actions';

export interface State {
    isAuthorized: boolean;
}

const initialState: State = {
    isAuthorized: false
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
        default:
            return state;
    }
}
