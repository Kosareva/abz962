import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as AuthActions from '@app/core/auth/store/auth.actions';
import * as MenuActions from '@app/core/menu/store/menu.actions';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class AuthEffects {
    @Effect()
    authSignin = this.actions$
        .pipe(
            ofType(AuthActions.SIGNIN),
            mergeMap(() => {
                return [
                    {
                        type: MenuActions.SET_MENU,
                        payload: true
                    }
                ];
            })
        );

    constructor(private actions$: Actions) {

    }
}
