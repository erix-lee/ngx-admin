import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
           
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'ngxchart', loadChildren: './ngxchart/ngxchart.module#NgxchartModule' }
        ]
    },

    // Not found
    { path: '**', redirectTo: 'ngxchart' }

];
