import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '@app/app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from '@app/app.component';
import {SharedModule} from '@app/shared/shared.module';
import {HomeModule} from '@app/views/home/home.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@app/store/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '@app/core/auth/store/auth.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {RequestInterceptor} from '@app/core/http-interceptors/http-interceptor';
import {environment} from '@app/env/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ApplicantsEffects} from '@app/core/applicants/store/applicants.effects';
import {RefreshTokenInterceptor} from '@app/core/http-interceptors/refresh-token.interceptor';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        EffectsModule.forRoot([AuthEffects, ApplicantsEffects]),
        HomeModule,
        HttpClientModule,
        SharedModule,
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        ToastrModule.forRoot(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RefreshTokenInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
