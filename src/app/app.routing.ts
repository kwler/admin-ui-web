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
        children: [
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            },
            {
                path: 'main',
                component: MainComponent
            },
            {
                path: 'harvest/webscraping',
                component: HarvestWebscrapingComponent
            },
            {
                path: 'harvest/api',
                component: HarvestApiComponent
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