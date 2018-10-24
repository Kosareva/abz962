import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '@app/store/app.reducers';
import * as fromMenu from '@app/core/menu/store/menu.reducers';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

    menuState$: Observable<fromMenu.State>;

    constructor(
        private store: Store<fromApp.AppState>,
    ) {
    }

    ngOnInit() {
        this.menuState$ = this.store.select('mainMenu');
    }

}
