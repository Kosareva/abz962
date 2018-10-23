import {Component, OnInit, Renderer2} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '@app/store/app.reducers';
import * as fromAuth from '@app/core/auth/store/auth.reducers';
import * as fromUser from '@app/core/user/store/user.reducers';
import * as AuthActions from '@app/core/auth/store/auth.actions';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isSideNavOpened = false;
    authState$: Observable<fromAuth.State>;
    userState$: Observable<fromUser.State>;

    constructor(
        private renderer: Renderer2,
        private store: Store<fromApp.AppState>
    ) {
    }

    login() {
        this.store.dispatch(new AuthActions.TrySignin());
    }

    logout() {
        this.store.dispatch(new AuthActions.TrySignout());
    }

    ngOnInit() {
        this.authState$ = this.store.select('auth');
        this.userState$ = this.store.select('user');
    }

    toggleSideNav() {
        this.isSideNavOpened = !this.isSideNavOpened;
        this.toggleBodyScroll();
    }

    private toggleBodyScroll() {
        try {
            const body = document.querySelector('body');
            this.renderer.setStyle(body, 'overflow-y', this.isSideNavOpened ? 'hidden' : 'auto');
        } catch (e) {
            console.error(e);
        }
    }

}
