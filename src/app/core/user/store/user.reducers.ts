import {User} from '@app/core/user/user';
import * as UserActions from '@app/core/user/store/user.actions';

export interface State {
    user: User | null;
}

// const initialState: State = {
//     user: new User({
//         id: 1,
//         name: 'Superstar',
//         email: 'Superstar@gmail.com',
//         phone: '+380957398462',
//         position: 'Security',
//         position_id: 2,
//         photo: 'https://frontend-test-assignment-api.abz.agency/images/users/5b9626f0157d224.jpeg'
//     })
// };

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
