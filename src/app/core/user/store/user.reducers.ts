import {User} from '@app/core/user/user';
import * as UserActions from '@app/core/user/store/user.actions';

export interface State {
    user: User | null;
}

const initialState: State = {
    user: null
};

export function userReducer(state: State = initialState, action: UserActions.UserActions) {
    switch (action.type) {
        case (UserActions.SET_USER):
            return {
                ...state,
                user: new User(action.payload)
            };
        case (UserActions.UNSET_USER):
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}
