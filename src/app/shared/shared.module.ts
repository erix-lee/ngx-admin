import { ModuleWithProviders } from '@angular/core';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxUIModule } from '@swimlane/ngx-ui';
//import {TabsModule,TabComponent,TabsComponent,InputModule,DrawerService,InjectionService,OverlayService,DialogService,NotificationService, AlertService, LoadingService,IconRegisteryService,HotkeysService,} from '@swimlane/ngx-ui'


import { ColorsService } from './colors/colors.service';




// https://angular.io/styleguide#!#04-10
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgxUIModule
    ],
    providers: [NgxUIModule,
      ColorsService//,DrawerService,InjectionService,OverlayService,DialogService,NotificationService, InjectionService ,AlertService, LoadingService,IconRegisteryService,HotkeysService,
    ],
    declarations: [
        
    ],
    exports: [
        NgxUIModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        RouterModule,
             // TabsModule,InputModule
 
 
    ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
