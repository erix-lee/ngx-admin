/* tslint:disable:no-unused-variable */

import { TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';


describe('App', () => {
    beforeEach(() => {

    

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                TranslateModule.forRoot(),
                CoreModule,
                LayoutModule,
                SharedModule,
                RoutesModule
            ],
            providers: [
               
            ]
        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
