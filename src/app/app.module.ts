import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '@app/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '@app/app.component';
import {SharedModule} from '@app/shared/shared.module';
import {HomeModule} from '@app/views/home/home.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@app/store/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '@app/core/auth/store/auth.effects';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HomeModule,
        HttpClientModule,
        SharedModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AuthEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
