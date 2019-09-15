import { Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakLocalService {

  private keycloakAuth: any;

  constructor(private keycloack: KeycloakService) { }
  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        'url': 'http://localhost:9080/auth',
        'realm': 'jhipster',
        'clientId': 'web_app'
      };


       this.keycloack.init({
        config: {
          'url': 'http://localhost:9080/auth',
          'realm': 'jhipster',
          'clientId': 'web_app'
        },
        initOptions: {
          onLoad: 'login-required',
        },
        bearerExcludedUrls: ['/assets', '/clients/public']
      });

      resolve();
    });
  }

  getToken(): string {
    return this.keycloakAuth.token;
  }
}
