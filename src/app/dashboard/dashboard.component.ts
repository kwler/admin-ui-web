import { Component, OnInit } from '@angular/core';

const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard/main',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Harvest'
  },
  {
    name: 'Web Scraping',
    url: '/dashboard/harvest/webscraping',
    icon: 'icon-globe'
  },
  {
    name: 'API',
    url: '/dashboard/harvest/api',
    icon: 'icon-graph'
  },
  {
    title: true,
    name: 'Data Processing'
  },
  {
    name: 'Validation',
    url: '/base',
    icon: 'icon-check'
  },
  {
    name: 'Load',
    url: '/buttons',
    icon: 'icon-basket-loaded',
    children: [
      {
        name: 'MongoDB',
        url: '/buttons/buttons',
        icon: 'icon-cloud'
      },
      {
        name: 'Postgres',
        url: '/buttons/dropdowns',
        icon: 'icon-code'
      },
      {
        name: 'Elasticsearch',
        url: '/buttons/brand-buttons',
        icon: 'icon-cog'
      }
    ]
  },
  {
    name: 'Metrics',
    url: '/charts',
    icon: 'icon-chart'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Site Activity',
  },
  {
    name: 'Users',
    url: '/pages',
    icon: 'icon-user',
    children: [
      {
        name: 'Sessions',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Registrations',
        url: '/register',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Download App',
    url: 'http://kwler.net/download/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success'
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor() {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

}
