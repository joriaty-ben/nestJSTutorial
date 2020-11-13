# Getting started

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