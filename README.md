# AngularKeycloak

Angular 7 example project to explore the usage of keycloak as an authentication and authorization service.

## Pre-requisites

Have a keycloak instance running and update your configuration on the init function inside `keycloak-local.service.ts`.

Alternatively setup a new Keycloak server using Docker:

## Create a Keycloak server using docker

### Create a network
```javascript
$ docker-compose -f src/main/docker/keycloak.yml up -d

Add the following to Valid redirects and Web Origin in Keyclock Admin (http://localhost:9080/auth/admin/master)
http://localhost:4200
http://localhost:4200/*
```

This will create and configure keyclock with a default realm(thanks jhipster team)

## TODO
* Create an authguard to only allow access to components to logged-in users and users having the necessary roles.
