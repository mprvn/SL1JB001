import { TestBed } from '@angular/core/testing';

import { FeaturestateService } from './featurestate.service';

describe('FeaturestateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeaturestateService = TestBed.get(FeaturestateService);
    expect(service).toBeTruthy();
  });
});
