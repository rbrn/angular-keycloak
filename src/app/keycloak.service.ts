import { Injectable } from '@angular/core';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private keycloakAuth: any;

  constructor() { }
  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        'url': 'http://localhost:9080/auth',
        'realm': 'jhipster',
        'clientId': 'web_app'
      };

      this.keycloakAuth = new Keycloak(config);

      this.keycloakAuth.init({ onLoad: 'login-required'})
        .success(() => {
          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }

  getToken(): string {
    return this.keycloakAuth.token;
  }
}
