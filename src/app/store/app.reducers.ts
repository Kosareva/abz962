import {ActionReducerMap} from '@ngrx/store';
import * as fromAuth from '@app/core/auth/store/auth.reducers';
import * as fromMenu from '@app/core/menu/store/menu.reducers';
import * as fromUser from '@app/core/user/store/user.reducers';

export interface AppState {
    auth: fromAuth.State;
    mainMenu: fromMenu.State;
    user: fromUser.State;
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    mainMenu: fromMenu.menuReducer,
    user: fromUser.userReducer,
};
