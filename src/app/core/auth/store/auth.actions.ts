import {Action} from '@ngrx/store';

export const TRY_SIGNIN = 'TRY_SIGNIN';
export const TRY_SIGNOUT = 'TRY_SIGNOUT';
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

export class TrySignin implements Action {
    readonly type = TRY_SIGNIN;

    constructor() {
    }
}

export class TrySignout implements Action {
    readonly type = TRY_SIGNOUT;

    constructor() {
    }
}

export type AuthActions = Signin | Signout | TrySignin | TrySignout;
