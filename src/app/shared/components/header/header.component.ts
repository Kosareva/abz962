import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';
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
export class HeaderComponent implements OnInit, AfterViewInit {

    isSideNavOpened = false;
    authState$: Observable<fromAuth.State>;
    userState$: Observable<fromUser.State>;

    constructor(
        private renderer: Renderer2,
        private store: Store<fromApp.AppState>,
        private elRef: ElementRef,
    ) {
    }

    private static preventScroll(e) {
        if (e.target.id !== 'appSideNav' && !document.getElementById('appSideNav').contains(e.target)) {
            e.preventDefault();
        }
    }

    login() {
        this.store.dispatch(new AuthActions.TrySignin());
    }

    logout() {
        this.store.dispatch(new AuthActions.TrySignout());
    }

    ngAfterViewInit() {
        try {
            const headerHeight = this.elRef.nativeElement.querySelector('.app-header').clientHeight;
            this.renderer.setStyle(this.elRef.nativeElement, 'height', headerHeight + 'px');
        } catch (e) {
            console.error(e);
        }
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
            const that = this;
            if (this.isSideNavOpened) {
                document.addEventListener('touchmove', HeaderComponent.preventScroll, {passive: false});
            } else {
                document.removeEventListener('touchmove', HeaderComponent.preventScroll, false);
            }
        } catch (e) {
            console.error(e);
        }
    }

}
