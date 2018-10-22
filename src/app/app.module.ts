import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import {
  BsDropdownModule,
  TabsModule
} from 'ngx-bootstrap';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { MainComponent } from './dashboard/main/main.component';
import { HarvestWebscrapingComponent } from './dashboard/harvest-webscraping/harvest-webscraping.component';
import { HarvestApiComponent } from './dashboard/harvest-api/harvest-api.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotificationsComponent,
    MainComponent,
    HarvestWebscrapingComponent,
    HarvestApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,

    TabsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
