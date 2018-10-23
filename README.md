# Admin: Web
[![Build Status](https://travis-ci.org/kwler/admin-ui-web.svg?branch=master)](https://travis-ci.org/kwler/admin-ui-web)

A basic web client for managing back-office tasks

## Features
- [ ] Authentication
- [ ] Harvest Management

| Login                                    | Dashboard                                      |
| ---------------------------------------- |:----------------------------------------------:|
| ![Login](/docs/screenshots/login.png)    | ![Dashboard](/docs/screenshots/dashboard.png)  |

## Developer Notes
- Node.JS
- Angular CLI
```
npm install -g @angular/cli
```
- initialize project
```
firebase use --add <project name>
```
- target correct hosting
```
//firebase target:apply hosting <target name> <hosting site>
firebase target:apply hosting admin kwler-net-admin
```
- [Install](https://www.ubuntuupdates.org/ppa/google_chrome?dist=stable) Headless Chrome for Testing
```
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update 
sudo apt-get install google-chrome-stable
```

#### Create Components
```
ng generate component my-component
```

#### Deploy
```
npm run deploy
```

#### Local Server
```
npm start
```

#### Resources
- [Angular Bootstrap](https://valor-software.com/ngx-bootstrap/#/getting-started)
- [Angular and CoreUI](https://github.com/coreui/coreui-free-angular-admin-template)
