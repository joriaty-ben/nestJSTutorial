# Getting started

#based on this tutorial: https://angular.de/artikel/nestjs-tutorial/
### Install nestjs/cli on NixOS

* check `default.nix` which is prepared for the `nix-shell`
##### basic ops:
0. check nest version after installing: `$ nest --version`
1. new project: (`$ npm init` adds packacke-lock.json and package.json manually <- normally you should not need this)
 and `$ nest new <project-name>`
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
- After starting with `$ npm run start` visit localhost:3000 and localhost:3000/events 

###### At this point this is just a normal REST API
###### gRPC
- gRPC with mircoservices: `$ npm i --save @nestjs/microservices`
- gRPC server: `$ npm i --save @grpc/proto-loader`
- gRPC client: `$ npm install grpc`
- start the server: `$ npm run start`