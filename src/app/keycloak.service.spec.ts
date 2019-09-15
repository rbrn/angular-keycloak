import { TestBed } from '@angular/core/testing';

import { KeycloakLocalService } from './keycloak-local.service';

describe('KeycloakLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeycloakLocalService = TestBed.get(KeycloakLocalService);
    expect(service).toBeTruthy();
  });
});
