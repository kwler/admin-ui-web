# Admin: Web
[![Build Status](https://travis-ci.org/kwler/admin-ui-web.svg?branch=master)](https://travis-ci.org/kwler/admin-ui-web)

A basic web client for managing back-office tasks


## Features
- [ ] Authentication
- [ ] Harvest Management

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
