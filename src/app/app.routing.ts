import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './dashboard/main/main.component';
import { HarvestWebscrapingComponent } from './dashboard/harvest-webscraping/harvest-webscraping.component';
import { HarvestApiComponent } from './dashboard/harvest-api/harvest-api.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard/main',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            title: 'Dashboard'
        },
        children: [
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            },
            {
                path: 'main',
                component: MainComponent,
                data: {
                    title: 'Main'
                },
            },
            {
                path: 'harvest/webscraping',
                component: HarvestWebscrapingComponent,
                data: {
                    title: 'Harvest'
                },
            },
            {
                path: 'harvest/api',
                component: HarvestApiComponent,
                data: {
                    title: 'Harvest'
                },
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}