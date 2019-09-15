import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KeycloakLocalService } from './keycloak-local.service';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';

export function kcFactory(keycloakService: KeycloakLocalService) {
  return () => keycloakService.init();
}

const config = {
  'url': 'http://localhost:9080/auth',
  'realm': 'jhipster',
  'clientId': 'web_app'
};

export function kcFactoryAngularKeyclock(keycloakService: KeycloakService) {
  return () => keycloakService.init({ config: config, loadUserProfileAtStartUp: true, initOptions: {onLoad: 'login-required'} });
}

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: kcFactory,
      deps: [KeycloakLocalService],
      multi: true
    },
/*    {
      provide: APP_INITIALIZER,
      useFactory: kcFactoryAngularKeyclock,
      multi: true,
      deps: [KeycloakService]
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
