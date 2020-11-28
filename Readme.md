# Getting started

#based on this tutorial: https://angular.de/artikel/nestjs-tutorial/
### Install nestjs/cli on NixOS

* check `default.nix` which is prepared for the `nix-shell`
##### basic ops:
0. check nest version after installing: `$ nest --version`
1. new project: `$ nest new <project-name>`
2. goto project dir: `$ cd <project-name>`
3. start application: `$ npm run start`
4. goto http://localhost:3000
5. create: 
- new module: `$ nest g module events`
- new controller: `$ nest g co events`
- new service: `$ nest g s events`

##### connect db (postgres)
- Install packages typorm and pg: `$ npm install --save @nestjs/typeorm typeorm pg`
- Start postgres database: docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=secret -d postgres
- Visit database: psql -h localhost  -p 5432 -U postgres --password