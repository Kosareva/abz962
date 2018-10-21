import * as MenuActions from '@app/core/menu/store/menu.actions';
import {MenuModel} from '@app/core/menu/menu.model';

export type State = MenuModel[];

const initialState: State = [
    {
        title: 'About me',
        route: '/about-me',
        forAuthorized: true,
        forUnauthorized: true,
    },
    {
        title: 'Relationships',
        route: '/relationships',
        forAuthorized: true,
        forUnauthorized: true,
    },
    {
        title: 'Requirements',
        route: '/requirements',
        forAuthorized: true,
        forUnauthorized: true,
    },
    {
        title: 'Users',
        route: '/users',
        forAuthorized: true,
        forUnauthorized: true,
    },
    {
        title: 'Sign In',
        route: '/sign-in',
        forAuthorized: false,
        forUnauthorized: true,
    },
    {
        title: 'Sign Up',
        route: '/sign-up',
        forAuthorized: false,
        forUnauthorized: true,
    },
    {
        title: 'Sign Out',
        route: '/sign-out',
        forAuthorized: true,
        forUnauthorized: false,
    },
];

function menuFactory(isAuthorized: boolean) {
    return initialState.filter((menuItem) => isAuthorized ? menuItem.forAuthorized : menuItem.forUnauthorized);
}

export function menuReducer(state = initialState, action: MenuActions.MenuActions) {
    switch (action.type) {
        case (MenuActions.SET_MENU):
            return menuFactory(action.payload);
        default:
            return menuFactory(false);
    }
}
