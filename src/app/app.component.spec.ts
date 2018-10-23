import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { MainComponent } from './dashboard/main/main.component';
import { HarvestWebscrapingComponent } from './dashboard/harvest-webscraping/harvest-webscraping.component';
import { HarvestApiComponent } from './dashboard/harvest-api/harvest-api.component';

import { AppRoutingModule } from './app.routing';

import { BrowserModule } from '@angular/platform-browser';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

import {
  BsDropdownModule,
  TabsModule
} from 'ngx-bootstrap';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        NotificationsComponent,
        MainComponent,
        HarvestWebscrapingComponent,
        HarvestApiComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'admin-ui-web'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('admin-ui-web');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('test');
  }));
});
