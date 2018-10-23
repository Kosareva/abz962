import {InjectionToken, isDevMode} from '@angular/core';

export interface AppConfig {
    apiEndpoint: string;
    logo: string;
    siteName: string;
}

export const CONFIG_OBJ_DEV: AppConfig = {
    apiEndpoint: 'https://frontend-test-assignment-api.abz.agency/api/v1',
    logo: './assets/imgs/logo/logo.svg',
    siteName: 'ABZ'
};

export const CONFIG_OBJ_PROD: AppConfig = Object.create(CONFIG_OBJ_DEV);

class AppConfigFactory {
    constructor() {
        return isDevMode() ? CONFIG_OBJ_DEV : CONFIG_OBJ_PROD;
    }
}

export const APP_CONFIG = new InjectionToken('APP_CONFIG', {
    providedIn: 'root',
    factory: () => new AppConfigFactory()
});
