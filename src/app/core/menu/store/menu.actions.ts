import {Action} from '@ngrx/store';

export const SET_MENU = 'SET_MENU';

export class SetMenu implements Action {
    readonly type = SET_MENU;

    constructor(public payload: boolean) {
    }
}

export type MenuActions = SetMenu;
