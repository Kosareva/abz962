import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isSideNavOpened = false;

    constructor(
        private renderer: Renderer2,
    ) {
    }

    ngOnInit() {
    }

    toggleSideNav() {
        this.isSideNavOpened = !this.isSideNavOpened;
        this.toggleBodyScroll();
    }

    private toggleBodyScroll() {
        try {
            const body = document.querySelector('body');
            this.renderer.setStyle(body, 'overflow-y', this.isSideNavOpened ? 'hidden' : 'auto');
        } catch (e) {
            console.error(e);
        }
    }

}
