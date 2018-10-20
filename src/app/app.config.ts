import {InjectionToken, isDevMode} from '@angular/core';

export interface AppConfig {
    apiEndpoint: string;
}

export const CONFIG_OBJ_DEV: AppConfig = {
    apiEndpoint: 'https://dev'
};

export const CONFIG_OBJ_PROD: AppConfig = {
    apiEndpoint: 'https://prod'
};

class AppConfigFactory {
    constructor() {
        return isDevMode() ? CONFIG_OBJ_DEV : CONFIG_OBJ_PROD;
    }
}

export const APP_CONFIG = new InjectionToken('APP_CONFIG', {
    providedIn: 'root',
    factory: () => new AppConfigFactory()
});
