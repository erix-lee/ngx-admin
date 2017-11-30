import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';


import { MenuService } from '../../core/menu/menu.service';
import { SettingsService } from '../../core/settings/settings.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    menuItems: Array<any>;
    router: Router;

    constructor(public menu: MenuService, public settings: SettingsService, public injector: Injector) {

        this.menuItems = menu.getMenu();

    }

    ngOnInit() {

        this.router = this.injector.get(Router);

        this.router.events.subscribe((val) => {
            // close any submenu opened when route changes
            this.removeFloatingNav();
            // scroll view to top
            window.scrollTo(0, 0);
        });

    }

    toggleSubmenuClick(event) {
       

    }

    // Close menu collapsing height
    closeMenu(elem) {
        elem.height(elem[0].scrollHeight); // set height
        elem.height(0); // and move to zero to collapse
        elem.removeClass('opening');
    }

    toggleSubmenuHover(event) {
       
    }

    listenForExternalClicks() {
      
    }

    removeFloatingNav() {
      
    }

    isSidebarCollapsed() {
        return this.settings.layout.isCollapsed;
    }
    isSidebarCollapsedText() {
        return this.settings.layout.isCollapsedText;
    }
    isEnabledHover() {
        return this.settings.layout.asideHover;
    }
}
