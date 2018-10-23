import {Action} from '@ngrx/store';

export const TRY_SIGNIN = 'TRY_SIGNIN';
export const TRY_SIGNOUT = 'TRY_SIGNOUT';
export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const SIGNUP = 'SIGNUP';

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

export class Signup implements Action {
    readonly type = SIGNUP;

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

export class TrySignup implements Action {
    readonly type = TRY_SIGNUP;

    constructor() {
    }
}

export type AuthActions = Signin | Signout | Signup | TrySignin | TrySignout | TrySignup;
