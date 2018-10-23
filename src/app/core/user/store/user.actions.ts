import {User} from '@app/core/user/user';
import {Action} from '@ngrx/store';

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export class SetUser implements Action {
    readonly type = SET_USER;

    constructor(public payload: User) {
    }
}

export class UnsetUser implements Action {
    readonly type = UNSET_USER;

    constructor() {
    }
}

export type UserActions = SetUser | UnsetUser;
