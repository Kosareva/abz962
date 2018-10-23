import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {authReducer} from '@app/core/auth/store/auth.reducers';
import {menuReducer} from '@app/core/menu/store/menu.reducers';
import {MainMenuComponent} from '@app/shared/components/main-menu/main-menu.component';

@NgModule({
    declarations: [MainMenuComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('auth', authReducer),
        StoreModule.forFeature('mainMenu', menuReducer),
        RouterModule,
    ],
    exports: [MainMenuComponent],
    providers: [],
})
export class MainMenuModule {
}
