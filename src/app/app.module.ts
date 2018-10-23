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
import {RequestInterceptor} from '@app/core/error-handler/http-interceptor';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        EffectsModule.forRoot([AuthEffects]),
        HomeModule,
        HttpClientModule,
        SharedModule,
        StoreModule.forRoot(reducers),
        ToastrModule.forRoot(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
