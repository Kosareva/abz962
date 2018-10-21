import {Action} from '@ngrx/store';

export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';

export class Signin implements Action {
    readonly type = SIGNIN;

    constructor() {
    }
}

export class Signout implements Action {
    readonly type = SIGNOUT;

    constructor() {
    }
}

export type AuthActions = Signin | Signout;
