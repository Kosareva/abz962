import {NgModule} from '@angular/core';
import {MainMenuComponent} from '@app/shared/components/main-menu/main-menu.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from '@app/core/auth/store/auth.reducers';
import {CommonModule} from '@angular/common';
import {menuReducer} from '@app/core/menu/store/menu.reducers';
import {RouterModule} from '@angular/router';

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
