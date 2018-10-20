import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '@app/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '@app/app.component';
import {SharedModule} from '@app/shared/shared.module';
import {HomeModule} from '@app/views/home/home.module';

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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
